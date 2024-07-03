import HlsObject from "./HlsObject.js";

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
    'dobrich_tpfo',
    'dobrich_bac'
];

let HlsObjectsArray = [];

// Function to create and append video tags
function createVideoTags(HlsObject) {
    const container = document.getElementById('video-container');

    for (let stream_index = 0; stream_index < stream_names.length; stream_index++) {
        // Create a wrapper div for each video and label
        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'video-wrapper';

        // Create the label element
        const label = document.createElement('div');
        label.className = 'video-label';
        label.textContent = `${stream_names[stream_index]}`;

        // Create the video element
        const video = document.createElement('video');
        video.width = 550;
        video.controls = false;
        video.id = `${stream_names[stream_index]}`;
        video.muted = true;
        video.autoplay = true;

        video.addEventListener('mouseover', () => {
            video.controls = true;
            setTimeout(() => {
                video.controls = false;
            }, 6000);
        });

        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = 'X';
        closeButton.onclick = function () {
            container.removeChild(videoWrapper);
        };

        videoWrapper.appendChild(label);
        videoWrapper.appendChild(video);
        videoWrapper.appendChild(closeButton);
        // Append the wrapper to the container
        container.appendChild(videoWrapper);

        // Initialize hls.js for the video element, create hls object and save it to HlsObjectArray
        if (Hls.isSupported()) {
            const hls = new HlsObject(stream_names[stream_index], video).create();
            HlsObjectsArray.push(hls);

        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = `/hls/${stream_names[stream_index]}.m3u8`; // Replace with actual M3U8 stream URL
            video.addEventListener('loadedmetadata', function () {
                video.play();
            });
        }
    }
}
createVideoTags(HlsObject);