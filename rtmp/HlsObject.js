export default class HlsObject {

    constructor(name, video) {
        this.name = name;
        this.video = video;
    }

    create() {
        const hls = new Hls({
            liveSyncDuration: 4, // Sync to the live edge within 3 seconds
            liveMaxLatencyDuration: 5, // Max latency duration for live streams
            maxLiveSyncPlaybackRate: 1.5, // Faster catch-up when behind live edge
            enableWorker: true, // Use web worker for better performance
            lowLatencyMode: true, // Enable low latency mode
            maxBufferLength: 30,
            maxMaxBufferLength: 30,
            backBufferLength: 30
        });

        hls.loadSource(`/hls/${this.name}.m3u8`); // Replace with actual M3U8 stream URL
        hls.attachMedia(this.video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            this.video.play();
        });
    }
}
