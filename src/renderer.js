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
    },

    updateAll(values) {
        // background color
        const designer = document.getElementById("designer");
        designer.style.backgroundColor = `${values.background ?? "#ffffff"}`;

        const bgImage = document.getElementById("background_image");
        // show bg image
        bgImage.style.display = values.showBackground ? "initial" : "none";
        // blur;
        bgImage.style.filter = `blur(${values.blur ?? 10}px)`;

        // plastic wrapper
        const plasticWrap = document.getElementById("plastic_wrap");
        plasticWrap.style.opacity = `${values.wrapperOpacity ?? 0.5}`;

        // values.scale;
        const designerScaler = document.getElementById("designer-scaler");
        designerScaler.style.transform = `scale(${values.scale ?? 1})`;
    }
}

export default Renderer;
export {
    Renderer
};