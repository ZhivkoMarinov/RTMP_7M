import { createHLS } from "./createHLS.js";
import { createCloseButton } from "./closeButton.js";

// Function to create and return video tag
export function createVideoTag(videoName) {
    const container = document.getElementById('video-container');

    // Create a wrapper div for each video and label
    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';

    // Create the label element
    const label = document.createElement('div');
    label.className = 'video-label';
    label.textContent = videoName;

    // Create the video element
    const video = document.createElement('video');
    video.width = 550;
    video.controls = true;
    video.id = videoName;
    video.muted = true;
    video.autoplay = true;

    createHLS(video, videoName);

    videoWrapper.appendChild(label);
    videoWrapper.appendChild(video);
    videoWrapper.appendChild(createCloseButton(container, videoWrapper, videoName));
    
    return videoWrapper;
}