var ThroneFeed;
(function (ThroneFeed) {
    var WidgetGenerator = (function () {
        function WidgetGenerator() {
            var _this = this;
            this.DoWork = document.getElementById("widgetGen");
            this.Generate = function () {
                var idField = document.getElementById("steamComId");
                var keyField = document.getElementById("streamKey");
                var id = idField.value;
                var key = keyField.value;
                if (!id || !key) {
                    alert("Whoops! You forgot to complete one of the field!");
                    return;
                }
                _this.ResolveSteamId(id, function (result) {
                    if (result.ConverionFailed) {
                        alert("Oops, something went wrong :-( " + result.Message);
                        return;
                    }
                    window.open("/Widget?steamid=" + result.SteamId64 + "&key=" + key);
                });
            };
            this.ResolveSteamId = function (communityId, done) {
                var xhr = new XMLHttpRequest();
                var url = "/api/steam/resolveid/" + communityId;
                xhr.onreadystatechange = function () {
                    if (xhr.status == 200 && xhr.readyState == 4) {
                        done(JSON.parse(xhr.responseText));
                    }
                };
                xhr.open("GET", url, true);
                xhr.send();
            };
            this.DoWork.onclick = this.Generate;
        }
        return WidgetGenerator;
    })();
    ThroneFeed.WidgetGenerator = WidgetGenerator;
})(ThroneFeed || (ThroneFeed = {}));
new ThroneFeed.WidgetGenerator();
//# sourceMappingURL=WidgetGen.js.map