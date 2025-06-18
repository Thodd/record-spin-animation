import Renderer from "./renderer.js";

function connectDropHandlers(dropArea, fnCallback) {
    // Prevent default behavior for drag events
    ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
        dropArea.addEventListener(eventName, e => e.preventDefault());
        dropArea.addEventListener(eventName, e => e.stopPropagation());
    });

    // Visual feedback
    ["dragenter", "dragover"].forEach(eventName => {
        dropArea.addEventListener(eventName, () => dropArea.classList.add("hover"));
    });

    ["dragleave", "drop"].forEach(eventName => {
        dropArea.addEventListener(eventName, () => dropArea.classList.remove("hover"));
    });

    // receive dropped image files
    dropArea.addEventListener("drop", e => {
        const files = e.dataTransfer.files;
        // only check for image mime type
        if (files.length && files[0].type.startsWith("image/")) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = function (event) {
                const imageDataUrl = event.target.result;
                fnCallback(imageDataUrl);
            };

            reader.readAsDataURL(file); // Convert to base64 data URL
        } else {
            alert("Please drop a valid image file.");
        }
    });
}

const Drop = {
    init() {
        const dropAreaCoverart = document.getElementById("coverart");
        const dropAreaRecordSpinner = document.getElementById("record");

        connectDropHandlers(dropAreaCoverart, Renderer.coverart);
        connectDropHandlers(dropAreaRecordSpinner, Renderer.recordlabel);
    }
}

export default Drop;
export {
    Drop
};