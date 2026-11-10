const dataApi = "https://iptv-org.github.io/api/channels.json"

export async function getData(){
   try {
   const res = await fetch(dataApi)
   if(!res.ok){
    throw new Error(`HTTP Error! : ${res.status}` )
   }
   const data = await res.json()
   return data
   }
   catch(error) {
    console.log(error)
   }
}

