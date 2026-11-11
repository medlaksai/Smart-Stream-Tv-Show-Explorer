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
    const filtredChannel = channelsData.filter(channels => channels.name.toLowerCase().includes(currentFilter));
    console.log(channelsData)
     return renderChannels(filtredChannel);
 }

filterChannel.addEventListener("input" , e => {
 currentFilter = e.target.value.toLowerCase();
    searchChannels();
})


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

const channels = await getData();

channelsData = channels;
renderChannels(channelsData);