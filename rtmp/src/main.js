import { createVideoContainer } from "./videoContainer.js";
import { createVideoSelectButtons } from "./streamButtons.js";
import { stream_names } from "./streamArray.js";

let video_container = createVideoContainer();

for (let i = 0; i < stream_names.length; i++){
    const video_button = createVideoSelectButtons(stream_names[i], video_container);
    video_container.appendChild(video_button);
}

