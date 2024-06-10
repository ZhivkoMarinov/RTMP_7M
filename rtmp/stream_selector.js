const stream_names = [
    'vivo_bac_1',
    'vivo_bac_2',
    'vivo_ru',
    'india_tpfo',
    'india_tp',
    'india_ab',
    '1x_tr_bj',
    '1x_en_bj',
    '1x_ru_bj',
    '1x_tr_ru',
    '1x_td',
    '1x_bac_en',
    '1x_bac_kr',
    'galaxy_ru',
    'green_ru',
    '7m_tr_ru',
    '7m_bac',
    '7m_td',
    'neon_ru',
    'dobrich_ab',
    'dobrich_tpfo'
];

// for (let i = 0; i < stream_names.length; i++){
//     <html>
//     <video id="video" width="600" controls></video>
//     <video id="video2" width="600" controls></video>
//     </html>
//     var video = document.getElementById("video");
//     var videoSrc = "/hls/test.m3u8";
//     if (Hls.isSupported()) {
//         var hls = new Hls();
//         hls.loadSource(videoSrc);
//         hls.attachMedia(video);
//     }
//     else if (video.canPlayType("application/vnd.apple.mpegurl")) {
//         video.src = videoSrc;
//     }
// }

function createVideoTags() {
    const container = document.getElementById('video-container');
    
    for (let i = 0; i < stream_names.length; i++) {
        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'video-wrapper';
        
        const video = document.createElement('video');
        video.width = 600;
        // video.height = 300;
        video.controls = true;
        
        const source = document.createElement('source');
        source.src = `/hls/${stream_names[i]}.m3u8`;

        video.appendChild(source);

        const label = document.createElement('div');
        label.className = 'video-label';
        label.textContent = `${stream_names[i]}`;
                
        videoWrapper.appendChild(video);
        videoWrapper.appendChild(label);
                
        container.appendChild(videoWrapper);
        // container.appendChild(video);
    }
}

createVideoTags();