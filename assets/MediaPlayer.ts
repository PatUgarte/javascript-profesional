class MediaPlayer {

    media: HTMLMediaElement;
    private plugins: any[];
    container: HTMLElement;

    constructor(config) {
        this.media = config.element;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    // PLAYER
    private initPlayer() {
        this.container = document.createElement("div");
        this.container.style.position = "relative";
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }


    // PLUGINS
    private initPlugins() {
        this.plugins.forEach(onePlugin => {
            onePlugin.run(this);
        });
    }

    // PLAYING
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        this.media.paused
            ? this.play()
            : this.pause();
    }

    // MUTTING
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        this.media.muted
            ? this.unmute()
            : this.mute();
    }
}

export default MediaPlayer;