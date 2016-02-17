var Util;
(function (Util) {
    var NotificationPopup = (function () {
        function NotificationPopup() {
            this.Show = function (message, type) {
                var popup = document.createElement("div");
                popup.classList.add("popup");
                var content = document.createElement("div");
                content.innerText = message;
                var style = type === NotificationType.Info
                    ? "info"
                    : "error";
                content.classList.add(style);
                popup.appendChild(content);
                var close = document.createElement("button");
                close.innerText = "close";
                close.onclick = function () {
                    document.body.removeChild(popup);
                };
                content.appendChild(close);
                document.body.appendChild(popup);
            };
        }
        return NotificationPopup;
    })();
    Util.NotificationPopup = NotificationPopup;
    (function (NotificationType) {
        NotificationType[NotificationType["Info"] = 0] = "Info";
        NotificationType[NotificationType["Error"] = 1] = "Error";
    })(Util.NotificationType || (Util.NotificationType = {}));
    var NotificationType = Util.NotificationType;
})(Util || (Util = {}));
//# sourceMappingURL=Util.js.map