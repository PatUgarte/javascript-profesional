class AutoPause {

    constructor() {
        this.threshold = 0.5;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
        this.playStatus = this.handlePlayStatus.bind(this);
    }

    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });
        observer.observe(player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }

    handleIntersection(entries) {
        const entry = entries[0];
        this.handlePlayStatus(entry.intersectionRatio >= this.threshold);
    }

    handleVisibilityChange() {
        this.handlePlayStatus(document.visibilityState === "visible");
    }

    handlePlayStatus(booleanValue) {
        booleanValue
            ? this.player.play()
            : this.player.pause();
    }
}

export default AutoPause;