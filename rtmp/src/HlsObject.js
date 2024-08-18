export default class HlsObject {

    constructor(name, video) {
        this.name = name;
        this.video = video;
        this.hls = null;
    }

    create() {
        this.hls = new Hls({
            liveSyncDuration: 2, // Sync to the live edge within 3 seconds
            liveMaxLatencyDuration: 5, // Max latency duration for live streams
            maxLiveSyncPlaybackRate: 1.5, // Faster catch-up when behind live edge
            enableWorker: true, // Use web worker for better performance
            lowLatencyMode: true, // Enable low latency mode
            maxBufferLength: 8,
            maxMaxBufferLength: 8,
            backBufferLength: 8
        });

        this.hls.loadSource(`/hls/${this.name}.m3u8`); // Replace with actual M3U8 stream URL
        this.hls.attachMedia(this.video);
        this.hls.on(Hls.Events.MANIFEST_PARSED, function () {
            this.video.play();
        });
    }

    pause() {
        if (this.hls) {
            this.hls.stopLoad();
        }
    }

    resume() {
        if (this.hls) {
            this.hls.startLoad();
        }
    }

    destroy() {
        if (this.hls) {
            this.hls.destroy()
        }
    }
}
