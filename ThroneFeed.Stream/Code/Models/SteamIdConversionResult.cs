namespace ThroneFeed.Stream.Code.Models
{
    public class SteamIdConversionResult
    {
        public string SteamId { get; set; }

        public bool ConverionFailed { get; set; }

        public string SteamId64 { get; set; }

        public string Message { get; set; }
    }
}