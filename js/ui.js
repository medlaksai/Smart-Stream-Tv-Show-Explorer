import { getData } from "./api.js";

const channelsContainer = document.querySelector("#channels-container")
let channelsData = []
export function renderChannels(channels){
    channelsData = channels;
    channelsContainer.innerHTML = channels.map((channel) =>
    `
        <button type="button" id="${channel.id}" class="flex flex-rows shrink-0 gap-4 hover:bg-gray-700 w-full h-10 cursor-pointer hover:border hover:border-gray-700 rounded-lg p-2">
        <img src="${channel.logo}" alt="${channel.name}" class="channel-logo w-10 rounded">
        <p class="channel-name">
        ${channel.name}
        </p>
        </button>`
        )
        .join("")
       
}
channelsContainer.addEventListener("click" , (event) => {
    const btn = event.target.closest("button")
    const title = document.getElementById("channel-title")
    const thumbnail = document.querySelector(".live-image") 
    const channelId = btn.id
    const selectedChannel = channelsData.find(
        channel => channel.id === channelId    
    )
    title.textContent = selectedChannel.name
    thumbnail.src = selectedChannel.previewImage
})