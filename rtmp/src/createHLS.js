import HlsObject from "./HlsObject.js";
import { active_hls_array } from "./HlsObject.js";

export function createHLS(videoTag, videoName){
    let hls = null;
        if (Hls.isSupported()) {
            hls = new HlsObject(videoName, videoTag).create();

        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            videoTag.src = `/hls/${videoName}.m3u8`; // Replace with actual M3U8 stream URL
            videoTag.addEventListener('loadedmetadata', function () {
                videoTag.play();
        });
    }
}

export function stopHLS(name){
    const hls = active_hls_array.find(element => element.name === name);
    if(hls instanceof HlsObject){
        hls.destroy(name);
    }
}