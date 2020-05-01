function AutoPlay() { }

AutoPlay.prototype.run = (player) => {
    console.log("player:",player);
    if(!player.muted){
        player.muted = true;
    }
    player.play();
}

export default AutoPlay;