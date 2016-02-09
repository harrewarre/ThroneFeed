using Newtonsoft.Json;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ThroneFeed.Stream.Controllers
{
    [RoutePrefix("api/status/daily")]
    public class DailyStatusController : ApiController
    {
        [HttpGet]
        [Route("{steamid}/{streamkey}")]
        public HttpResponseMessage IsDaily(string steamid, string streamkey)
        {
            if (string.IsNullOrWhiteSpace(steamid))
            {
                throw new Exception("SteamID missing!");
            }

            if (string.IsNullOrWhiteSpace(streamkey))
            {
                throw new Exception("StreamKey missing!");
            }

            var endpoint = string.Format("https://tb-api.xyz/stream/get?s={0}&key={1}", steamid, streamkey);
            var responseText = "No, this is not the daily.";

            using (var client = new WebClient())
            {
                var result = client.DownloadString(endpoint);
                var streamData = (dynamic)JsonConvert.DeserializeObject(result);

                if (streamData != null && streamData.current != null && streamData.current.type != null)
                {
                    var type = streamData.current.type;

                    if (type == "daily")
                    {
                        responseText = "Yes, this is the daily";
                    }
                }
            }

            var resp = new HttpResponseMessage(HttpStatusCode.OK);
            resp.Content = new StringContent(responseText, System.Text.Encoding.UTF8, "text/plain");
            return resp;
        }

        [HttpGet]
        [Route("bigtam/{steamid}/{streamkey}")]
        public HttpResponseMessage IsTamDaily(string steamid, string streamkey)
        {
            if(string.IsNullOrWhiteSpace(steamid))
            {
                throw new Exception("SteamID missing!");
            }

            if (string.IsNullOrWhiteSpace(streamkey))
            {
                throw new Exception("StreamKey missing!");
            }

            var endpoint = string.Format("https://tb-api.xyz/stream/get?s={0}&key={1}", steamid, streamkey);
            var responseText = "NAW IT SNAE!";

            using (var client = new WebClient())
            {
                var result = client.DownloadString(endpoint);
                var streamData = (dynamic)JsonConvert.DeserializeObject(result);

                if (streamData != null && streamData.current != null && streamData.current.type != null)
                {
                    var type = streamData.current.type;

                    if (type == "daily")
                    {
                        responseText = "Yes, this is the daily";
                    }
                }
                else
                {
                    responseText = "NAW IT SNAE!";
                }
            }

            var resp = new HttpResponseMessage(HttpStatusCode.OK);
            resp.Content = new StringContent(responseText, System.Text.Encoding.UTF8, "text/plain");
            return resp;
        }
    }
}
