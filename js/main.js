import { getData  } from "./api.js";
import { renderChannels , searchChannels } from "./ui.js";

async function init() {
    try {
        const channels = await getData();
        renderChannels(channels);
    }
    catch(error) {
        console.error("Unable to load data" , error)

    }
}
init();
searchChannels();