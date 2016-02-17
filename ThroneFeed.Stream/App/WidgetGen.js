/// <reference path="util.ts" />
var ThroneFeed;
(function (ThroneFeed) {
    var WidgetGenerator = (function () {
        function WidgetGenerator() {
            var _this = this;
            this.SteamId = ko.observable();
            this.StreamKey = ko.observable();
            this.Notifier = new Util.NotificationPopup();
            this.Generate = function () {
                if (!_this.SteamId()) {
                    _this.Notifier.Show("You forgot your Steam ID!", Util.NotificationType.Error);
                    return;
                }
                if (!_this.StreamKey()) {
                    _this.Notifier.Show("You forgot your Stream key!", Util.NotificationType.Error);
                    return;
                }
                window.open("/Widget?steamid=" + _this.SteamId() + "&key=" + _this.StreamKey());
            };
        }
        return WidgetGenerator;
    })();
    ThroneFeed.WidgetGenerator = WidgetGenerator;
})(ThroneFeed || (ThroneFeed = {}));
//# sourceMappingURL=WidgetGen.js.map