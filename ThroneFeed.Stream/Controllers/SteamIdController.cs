using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Xml.Linq;
using ThroneFeed.Stream.Code.Models;

namespace ThroneFeed.Stream.Api
{
    [RoutePrefix("api/steam")]
    public class SteamIdController : ApiController
    {
        [HttpGet]
        [Route("resolveid/{communityname}")]
        public SteamIdConversionResult ConvertToId64(string communityname)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(communityname))
                {
                    return new SteamIdConversionResult() { ConverionFailed = true, SteamId = communityname };
                }

                var endpoint = string.Format("http://steamcommunity.com/id/{0}?xml=1", communityname);

                using (var client = new WebClient())
                {
                    var result = client.DownloadString(endpoint);
                    var profile = XDocument.Parse(result);

                    var steamId64 = profile.Descendants("profile").Descendants().FirstOrDefault(n => n.Name == "steamID64");

                    if (steamId64 != null)
                    {
                        return new SteamIdConversionResult()
                        {
                            ConverionFailed = false,
                            Message = "Conversion complete!",
                            SteamId = communityname,
                            SteamId64 = steamId64.Value
                        };
                    }

                    return new SteamIdConversionResult()
                    {
                        ConverionFailed = true,
                        Message = "Unable to find your 64-bit Steam ID! Is your profile private?",
                        SteamId = communityname,
                    };
                }
            }
            catch (Exception ex)
            {
                return new SteamIdConversionResult()
                {
                    ConverionFailed = true,
                    SteamId = communityname,
                    Message = "An error occured while converting your steamid to your 64-bit steamid! Message: " + ex.Message };
            }
        }
    }
}
