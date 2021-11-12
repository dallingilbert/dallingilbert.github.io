// load the audio files
function playSound(e) {
    const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(div);
    
}

window.addEventListener('keydown', playSound);