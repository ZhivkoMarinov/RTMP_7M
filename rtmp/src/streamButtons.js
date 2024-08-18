import { createVideoTag } from "./videoTag.js";
// import { active_stream_array } from "./streamArray.js";

let temp_container = null;
let active_stream_array = [];

export function createVideoSelectButtons(streamName, video_container){
    temp_container = video_container;
    const container = document.getElementById('rectangle-container');
    const button = document.createElement('button');
    button.className = 'rectangle-button';
    button.innerHTML = streamName;
    button.onclick = function(){
        const video_tag = createVideoTag(streamName);
        video_container.appendChild(video_tag);
        active_stream_array.push(streamName);
        container.removeChild(button); 
    }

    // Append the ellipse to the container
    container.appendChild(button);
    
    return container;
}

export function updateButtonBar(name, container = temp_container){
    createVideoSelectButtons(name, container);
    active_stream_array = active_stream_array.filter(element => element !== name);
    console.log(active_stream_array)
}
