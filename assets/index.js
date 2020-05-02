import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const playButton = document.querySelector(".play-button");
const muteButton = document.querySelector(".mute-button");

const player = new MediaPlayer(
    {
        element: video,
        plugins: [new AutoPlay(), new AutoPause()],
    });

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();