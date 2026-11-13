import { getData  } from "./api.js";
import { hideError, showError } from "./errors.js";
import { renderChannels , searchChannels } from "./ui.js";

async function init() {
    hideError();
    try {
        //throw new Error("fffffffff");
        const channels = await getData();
        
        renderChannels(channels);
        searchChannels();
    }
    catch(error) {
        showError();
        console.error("Unable to load data" , error)
        showError("impossible de charger data" +error.message , init);
    }

}
init();
