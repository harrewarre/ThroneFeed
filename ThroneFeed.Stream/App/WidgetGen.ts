module ThroneFeed {
    export class WidgetGenerator {
        DoWork = <HTMLButtonElement>document.getElementById("widgetGen");

        constructor() {
            this.DoWork.onclick = this.Generate;
        }

        SteamId = ko.observable<string>();
        StreamKey = ko.observable<string>();

        Generate = () => {
            if (!this.SteamId() || !this.StreamKey()) {
                alert("Whoops! You forgot to complete one of the field!");
                return;
            }

            window.open("/Widget?steamid=" + this.SteamId() + "&key=" + this.StreamKey());
        }
    }
}