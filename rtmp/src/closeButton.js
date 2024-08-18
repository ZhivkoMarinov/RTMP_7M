import { updateButtonBar } from "./streamButtons.js";

export function createCloseButton(container, element, name){
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = 'X';
    closeButton.onclick = function () {
        container.removeChild(element);
        updateButtonBar(name);
    }

    return closeButton;
}