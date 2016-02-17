var ThroneButt;
(function (ThroneButt) {
    var StreamDataMapper = (function () {
        function StreamDataMapper() {
        }
        StreamDataMapper.prototype.GetCharacterImage = function (char) {
            var baseUrl = "../Assets/Characters/";
            var characterFile = null;
            switch (char) {
                case 1: {
                    characterFile = "fish";
                    break;
                }
                case 2: {
                    characterFile = "crystal";
                    break;
                }
                case 3: {
                    characterFile = "eyes";
                    break;
                }
                case 4: {
                    characterFile = "melting";
                    break;
                }
                case 5: {
                    characterFile = "plant";
                    break;
                }
                case 6: {
                    characterFile = "yv";
                    break;
                }
                case 7: {
                    characterFile = "steroids";
                    break;
                }
                case 8: {
                    characterFile = "robot";
                    break;
                }
                case 9: {
                    characterFile = "chicken";
                    break;
                }
                case 10: {
                    characterFile = "rebel";
                    break;
                }
                case 11: {
                    characterFile = "horror";
                    break;
                }
                case 12: {
                    characterFile = "rogue";
                    break;
                }
                case 14: {
                    characterFile = "skelly";
                    break;
                }
                case 15: {
                    characterFile = "frog";
                    break;
                }
                default: {
                    characterFile = "crystal";
                    break;
                }
            }
            if (characterFile === null) {
                return null;
            }
            return baseUrl + characterFile + ".png";
        };
        return StreamDataMapper;
    })();
    ThroneButt.StreamDataMapper = StreamDataMapper;
})(ThroneButt || (ThroneButt = {}));
