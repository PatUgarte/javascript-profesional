import Ads, { Ad } from "./AdsSingleton";
import MediaPlayer from "../../MediaPlayer";

class AdsPlugin {

    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    private adsContainer: HTMLElement;

    constructor() {
        this.ads = Ads.getInstance();
        this.adsContainer = document.createElement("div");
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    run(player: MediaPlayer) {
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        this.media.addEventListener("timeupdate", this.handleTimeUpdate);
    }

    private handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    }

    private renderAd() {
        if (this.currentAd) {
            return;
        }

        const ad = this.ads.getAd();
        this.currentAd = ad;

        this.setAdHTML(true);

        setTimeout(() => {
            this.currentAd = null;
            this.setAdHTML(false);
        },10000);
    }

    private setAdHTML(booleanValue: boolean) {
        this.adsContainer.innerHTML =
            booleanValue ?
                `<div class="ads">
                    <a class="ads__link" href="${this.currentAd.url}" target="__blank">
                        <img class="ads__img" src="${this.currentAd.imageUrl}" alt="${this.currentAd.title}">
                        <div class="ads__info">
                            <h3 class="ads__title">${this.currentAd.title}</h3>
                            <p class="ads__body">${this.currentAd.body}</p>
                        </div>
                    </a>
                </div>`
                : ``;
    }
}

export default AdsPlugin;