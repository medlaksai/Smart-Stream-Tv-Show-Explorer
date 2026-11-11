const dataApi = "https://6af21e1742c6561ced390722.mockapi.io/api/v1/channels"

export async function getData(){
   try {
   const res = await fetch(dataApi)
   if(!res.ok){
    throw new Error(`HTTP Error! : ${res.status}` )
   }
   const data = await res.json()
   console.log(data)
   return data
   }
   catch(error) {
    console.error("Filled to fetch channels : " ,error)
    throw error;
   }
}



/*
export async function findCategories(){
    const response = await fetch(
  "https://iptv-org.github.io/api/channels.json"
);

const channels = await response.json();
const result = channels.filter(
  channel => channel.country === "MA"

);

console.log(result);
}
*/