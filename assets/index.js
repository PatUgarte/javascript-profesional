import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({ element: video });

button.onclick = () => player.togglePlayPause();