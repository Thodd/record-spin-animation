const Renderer = {
    coverart(imageDataUrl) {
        const coverart = document.getElementById("coverart");
        coverart.style.backgroundImage = `url(${imageDataUrl})`;

        const bgImage = document.getElementById("background_image");
        bgImage.style.backgroundImage = `url(${imageDataUrl})`;
    },

    recordlabel(imageDataUrl) {
        const recordLabel = document.getElementById("record_label");
        recordLabel.style.backgroundImage = `url(${imageDataUrl})`;
    }
}

export default Renderer;
export {
    Renderer
};