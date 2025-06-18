import Renderer from "./renderer.js";

const SettingsDialog = {
    init() {
        // window handle
        const dialog = document.getElementById("settings-dialog");

        // Make window draggable
        document.querySelectorAll(".title-bar").forEach(bar => {
            let offsetX, offsetY, dragging = false;
            const windowEl = bar.parentElement;

            bar.addEventListener("mousedown", e => {
                dragging = true;
                const rect = windowEl.getBoundingClientRect();
                offsetX = e.clientX - rect.left;
                offsetY = e.clientY - rect.top;
            });

            document.addEventListener("mousemove", e => {
                if (!dragging) return;
                windowEl.style.left = e.clientX - offsetX + "px";
                windowEl.style.top = e.clientY - offsetY + "px";
            });

            document.addEventListener("mouseup", () => dragging = false);
        });

        // connect close button
        const closeButton = document.getElementById("close-dialog");
        closeButton.addEventListener("click", () => {
            dialog.style.display = "none";
        });

        // connect show button
        const openButton = document.getElementById("open-dialog");
        openButton.addEventListener("click", () => {
            dialog.style.display = "initial";
        });

        // connect change handlers to input elements
        document.querySelectorAll("#settings-dialog input").forEach((inputElement) => {
            inputElement.addEventListener("change", (e) => {
                // we simply update everything even if just one value changed, who cares 🤷
                Renderer.updateAll({
                    background: document.getElementById("settings-background-color").value,
                    showBackground: document.getElementById("settings-show-background").checked,
                    blur: document.getElementById("settings-blur").value,
                    wrapperOpacity: document.getElementById("settings-wrapper-opacity").value,
                    scale: document.getElementById("settings-scale").value
                })
            });
        });
    }
}

export default SettingsDialog;
export {
    SettingsDialog
};
