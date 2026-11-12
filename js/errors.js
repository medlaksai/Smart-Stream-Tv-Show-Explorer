
export function showError(message , ressayer ){
    document.getElementById('error-msg').textContent = message;
    document.getElementById('retry-button').onclick = ressayer;
    document.getElementById('error').classList.remove('hidden');
}
export function hideError(){
    document.getElementById('error').classList.add('hidden');
}