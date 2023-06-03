const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav");

const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`;
   audio.play(); //main audio

   const clickedKey = document.querySelector(`[data-key="${key}"]`);
   clickedKey.classList.add("active");
   setTimeout(() => {
    clickedKey.classList.remove("active");
   }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    //memanggil function nilai key
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
   if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("keydown", pressedKey);