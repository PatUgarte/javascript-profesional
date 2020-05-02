import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video: HTMLMediaElement = document.querySelector("video");
const playButton: HTMLElement = document.querySelector(".play-button");
const muteButton: HTMLElement = document.querySelector(".mute-button");

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay(), new AutoPause()] });

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../sw.js").catch(error => {
        console.log(error.message);
    });
}