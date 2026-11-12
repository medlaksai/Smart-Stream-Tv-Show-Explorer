import { getData  } from "./api.js";
import { hideError, showError } from "./errors.js";
import { renderChannels , searchChannels } from "./ui.js";

async function init() {
    hideError();
    try {
        const channels = await getData();

        renderChannels(channels);
        searchChannels();
    }
    catch(error) {
        console.error("Unable to load data" , error)
        showError("impossible de charger data" +error.message , init);
    }

}
init();
