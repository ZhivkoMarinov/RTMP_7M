export let active_hls_array = [];

export default class HlsObject {

    constructor(name, video) {
        this.name = name;
        this.video = video;
        this.hls = null;
    }

    create() {
        this.hls = new Hls({
            liveSyncDuration: 0, // Sync to the live edge within 3 seconds
            liveMaxLatencyDuration: 2, // Max latency duration for live streams
            maxLiveSyncPlaybackRate: 1.5, // Faster catch-up when behind live edge
            enableWorker: true, // Use web worker for better performance
            lowLatencyMode: true, // Enable low latency mode
            maxBufferLength: 2,
            maxMaxBufferLength: 2,
            backBufferLength: 2
        });

        this.hls.loadSource(`/hls/${this.name}.m3u8`); // Replace with actual M3U8 stream URL
        this.hls.attachMedia(this.video);
        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
            this.video.play();
            active_hls_array.push(this);
        });
    }

    pause(name) {
        if (this.hls) {
            this.hls.stopLoad();
            active_hls_array = active_hls_array.filter(element => element.name !== name);
        }
    }

    resume() {
        if (this.hls) {
            this.hls.startLoad();
        }
    }

    destroy(name) {
        if (this.hls) {
            this.hls.destroy()
            active_hls_array = active_hls_array.filter(element => element.name !== name);
        }
    }
}
