
export function saveChannel(channel , userChannel){
localStorage.setItem("channel" , JSON.stringify(userChannel) );
}
