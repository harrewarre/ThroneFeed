/// <reference path="util.ts" />

module ThroneFeed {
    export class WidgetGenerator {
        SteamId = ko.observable<string>();
        StreamKey = ko.observable<string>();

        Notifier = new Util.NotificationPopup();

        Generate = () => {

            if (!this.SteamId()) {
                this.Notifier.Show("You forgot your Steam ID!", Util.NotificationType.Error);
                return;
            }

            if (!this.StreamKey()) {
                this.Notifier.Show("You forgot your Stream key!", Util.NotificationType.Error);
                return;
            }

            window.open("/Widget?steamid=" + this.SteamId() + "&key=" + this.StreamKey());
        }
    }
}