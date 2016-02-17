var ThroneFeed;
(function (ThroneFeed) {
    var WidgetGenerator = (function () {
        function WidgetGenerator() {
            var _this = this;
            this.DoWork = document.getElementById("widgetGen");
            this.SteamId = ko.observable();
            this.StreamKey = ko.observable();
            this.Generate = function () {
                if (!_this.SteamId() || !_this.StreamKey()) {
                    alert("Whoops! You forgot to complete one of the field!");
                    return;
                }
                window.open("/Widget?steamid=" + _this.SteamId() + "&key=" + _this.StreamKey());
            };
            this.DoWork.onclick = this.Generate;
        }
        return WidgetGenerator;
    })();
    ThroneFeed.WidgetGenerator = WidgetGenerator;
})(ThroneFeed || (ThroneFeed = {}));
//# sourceMappingURL=WidgetGen.js.map