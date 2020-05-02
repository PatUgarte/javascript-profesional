function MediaPlayer(config) {
    this.media = config.element;
    this.plugins = config.plugins || [];

    this.initPlugins();
}

// PLUGINS
MediaPlayer.prototype.initPlugins = function () {
    const player = {
        media: this.media,
        play: () => this.play(),
        pause: () => this.pause(),
        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value;
        },
    }

    this.plugins.forEach(onePlugin => {
        onePlugin.run(player);
    });
}

// PLAYING
MediaPlayer.prototype.play = function () {
    this.media.play();
}
MediaPlayer.prototype.pause = function () {
    this.media.pause();
}
MediaPlayer.prototype.togglePlay = function () {
    this.media.paused
        ? this.play()
        : this.pause();
}

// MUTTING
MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}
MediaPlayer.prototype.toggleMute = function () {
    this.media.muted
        ? this.unmute()
        : this.mute();
}

export default MediaPlayer;