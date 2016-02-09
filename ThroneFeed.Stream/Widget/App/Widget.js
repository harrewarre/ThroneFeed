/// <reference path="../../scripts/typings/knockout/knockout.d.ts" />
/// <reference path="streamdatamapper.ts" />
var ThroneButt;
(function (ThroneButt) {
    var Widget = (function () {
        function Widget(steamId, streamKey) {
            var _this = this;
            this.TimerInterval = 15 * 1000;
            this.StreamData = ko.observable();
            this.DataMapper = new ThroneButt.StreamDataMapper();
            this.Update = function () {
                var xhr = new XMLHttpRequest();
                var url = "https://tb-api.xyz/stream/get?s=" + _this.SteamId + "&key=" + _this.StreamKey;
                xhr.onreadystatechange = function () {
                    if (xhr.status == 200 && xhr.readyState == 4) {
                        _this.StreamData(JSON.parse(xhr.responseText));
                    }
                };
                xhr.open("GET", url, true);
                xhr.send();
            };
            this.SteamId = steamId;
            this.StreamKey = streamKey;
            this.TimerHandle = setInterval(this.Update, this.TimerInterval);
            this.Update();
        }
        return Widget;
    })();
    ThroneButt.Widget = Widget;
})(ThroneButt || (ThroneButt = {}));
//# sourceMappingURL=Widget.js.map