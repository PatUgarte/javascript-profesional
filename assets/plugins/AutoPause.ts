import MediaPlayer from "../MediaPlayer";

class AutoPause {

    private threshold: number;
    private player: MediaPlayer;

    constructor() {
        this.threshold = 0.5;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
        this.handlePlayStatus = this.handlePlayStatus.bind(this);
    }

    run(player: MediaPlayer) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });
        observer.observe(player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }

    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];
        this.handlePlayStatus(entry.intersectionRatio >= this.threshold);
    }

    private handleVisibilityChange() {
        this.handlePlayStatus(document.visibilityState === "visible");
    }

    private handlePlayStatus(booleanValue: boolean) {
        booleanValue
            ? this.player.play()
            : this.player.pause();
    }
}

export default AutoPause;