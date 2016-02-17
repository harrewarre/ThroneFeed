module Util {
    export class NotificationPopup {
        Show = (message: string, type: NotificationType) => {
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
            close.onclick = () => {
                document.body.removeChild(popup);
            };

            content.appendChild(close);
            document.body.appendChild(popup);
        }
    }

    export enum NotificationType {
        Info,
        Error
    }
}