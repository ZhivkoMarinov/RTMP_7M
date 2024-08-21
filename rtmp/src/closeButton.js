import { updateButtonBar } from "./streamButtons.js";
import { stopHLS } from "./createHLS.js";

export function createCloseButton(container, element, name){
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = 'X';
    closeButton.onclick = function () {
        container.removeChild(element);
        updateButtonBar(name);
        stopHLS(name);
    }

    return closeButton;
}