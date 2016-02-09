module ThroneFeed {
    export class WidgetGenerator {
        DoWork = <HTMLButtonElement>document.getElementById("widgetGen");

        constructor() {
            this.DoWork.onclick = this.Generate;
        }

        Generate = () => {
            var idField = <HTMLInputElement>document.getElementById("steamComId");
            var keyField = <HTMLInputElement>document.getElementById("streamKey");

            var id = idField.value;
            var key = keyField.value;

            if (!id || !key) {
                alert("Whoops! You forgot to complete one of the field!");
                return;
            }

            this.ResolveSteamId(id, (result: ApiSteamIdResolutionResponse) => {
                if (result.ConverionFailed) {
                    alert("Oops, something went wrong :-( " + result.Message);
                    return;
                }

                window.open("/Widget?steamid=" + result.SteamId64 + "&key=" + key);
            });
        }

        ResolveSteamId = (communityId: string, done: (result: ApiSteamIdResolutionResponse) => void) => {
            var xhr = new XMLHttpRequest();
            var url = "/api/steam/resolveid/" + communityId;

            xhr.onreadystatechange = () => {
                if (xhr.status == 200 && xhr.readyState == 4) {
                    done(JSON.parse(xhr.responseText));
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
    }

    interface ApiSteamIdResolutionResponse {
        SteamId: string;
        ConverionFailed: boolean;
        SteamId64: string;
        Message: string;
    }
}

new ThroneFeed.WidgetGenerator();