import { getData } from "./api.js";

const channelsContainer = document.querySelector("#channels-container")
const totalChannels = document.querySelector(".channels-total")
const filterChannel = document.getElementById("filterInput")
const categoryContainer = document.getElementById("category-container")


let channelsData = []
let selectCategory = "Tout"

export  function categoryFilter(){
    if (selectCategory === "Tout") return channelsData ;
     return channelsData.filter(channels => channels.category === selectCategory);
}

categoryContainer.addEventListener("click" , (event) => {
   const btnCat =  event.target.closest("button")
   if(!btnCat) return
   selectCategory = btnCat.dataset.category;
   renderChannels(categoryFilter());
})


export function renderChannels(channels){
    channelsContainer.innerHTML = "";
    channelsContainer.innerHTML = channels.map((channel) =>
    `
        <button type="button" id="${channel.id}" class="flex flex-rows shrink-0 gap-4 hover:bg-gray-700 w-full h-10 cursor-pointer hover:border hover:border-gray-700 rounded-lg p-2">
       ${channel.channelNumber}  <img src="${channel.logo}" alt="${channel.name}" class="channel-logo w-10 rounded">
        <p class="channel-name">
        
        ${channel.name}
        </p>
        </button>`
        )
        .join("")

       totalChannels.textContent = channels.length
}

let currentFilter = "";
export function searchChannels(){
    const filtredChannel = channelsData.filter(channels =>
    channels.name.toLowerCase().includes(currentFilter) ||
    String(channels.channelNumber).includes(currentFilter));
     return renderChannels(filtredChannel);
 }

filterChannel.addEventListener("input" , e => {
 currentFilter = e.target.value.toLowerCase();
    searchChannels();
})


channelsContainer.addEventListener("click" , (event) => {
    const btn = event.target.closest("button")
    const title = document.getElementById("channel-title")
    const videoSrc = document.querySelector(".live-image") 
    const nowPlaying = document.getElementById("playing-now")
    const titleNow = document.getElementById("playing-title")
    const periodHours = document.getElementById("playing-hours")
    const channelId = btn.id
    const selectedChannel = channelsData.find(
        
        channel => channel.id === channelId    
    )
    nowPlaying.textContent = "Now Playing"
    titleNow.textContent = "Live News"
    periodHours.textContent = "12:30 PM - 13:00 PM"
    title.textContent = selectedChannel.name  
    videoSrc.src = selectedChannel.previewImage 
    channelsContainer.querySelectorAll("button").forEach(button => {
        button.classList.remove("bg-blue-800");
    });
    btn.classList.add("bg-blue-800")
})


const channels = await getData();

channelsData = channels;
renderChannels(channelsData); 
