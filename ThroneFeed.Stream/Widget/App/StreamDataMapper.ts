module ThroneButt {
    export class StreamDataMapper {
        GetCharacterImage(char: number): string {
            var baseUrl = "../Assets/Characters/"
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
        }
        /*
1 Fish
2 Crystal
3 Eyes
4 Melting
5 Plant
6 Y.V.
7 Steroids
8 Robot
9 Chicken
10 Rebel
11 Horror
12 Rogue
14 Skeleton
15 Frog
        */
    }
}