/// <reference path="../../scripts/typings/knockout/knockout.d.ts" />
/// <reference path="streamdatamapper.ts" />

module ThroneButt {
    export class Widget {
        SteamId: string;
        StreamKey: string;

        TimerInterval = 15 * 1000;
        TimerHandle: number;

        StreamData = ko.observable<any>();

        DataMapper = new ThroneButt.StreamDataMapper();

        constructor(steamId: string, streamKey: string) {
            this.SteamId = steamId;
            this.StreamKey = streamKey;

            this.TimerHandle = setInterval(this.Update, this.TimerInterval);
            this.Update();
        }

        Update = () => {
            var xhr = new XMLHttpRequest();
            var url = "https://tb-api.xyz/stream/get?s=" + this.SteamId + "&key=" + this.StreamKey;

            xhr.onreadystatechange = () => {
                if (xhr.status == 200 && xhr.readyState == 4) {
                     this.StreamData(JSON.parse(xhr.responseText));
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
    }
}