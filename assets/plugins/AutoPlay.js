function AutoPlay() { }

AutoPlay.prototype.run = (player) => {
    player.mute();
    player.play();
}

export default AutoPlay;