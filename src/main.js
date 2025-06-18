import domReady from "./domReady.js";
import SettingsDialog from "./settings-dialog.js";
import Drop from "./drop.js";

await domReady();

Drop.init();
SettingsDialog.init();