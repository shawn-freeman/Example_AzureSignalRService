using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;
using System;
using System.Threading.Tasks;

[assembly: OwinStartup(typeof(AzureSignalRServiceDotNet48Api.Startup))]

namespace AzureSignalRServiceDotNet48Api
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888

            app.Map("/signalr", map =>
            {
                // Setup the CORS middleware to run before SignalR.
                // By default this will allow all origins. You can 
                // configure the set of origins and/or http verbs by
                // providing a cors options with a different policy.
                map.UseCors(CorsOptions.AllowAll);
                var hubConfiguration = new HubConfiguration
                {
                    // You can enable JSONP by uncommenting line below.
                    // JSONP requests are insecure but some older browsers (and some
                    // versions of IE) require JSONP to work cross domain
                    // EnableJSONP = true
                };

                //map.MapAzureSignalR(this.GetType().FullName);
                map.RunAzureSignalR(this.GetType().FullName,
                    "",
                    hubConfiguration);


                //map.UseCors(_corsOptions.Value);
                // Run the SignalR pipeline. We're not using MapSignalR
                // since this branch already runs under the "/signalr"
                // path.
                //map.RunSignalR(hubConfiguration);
            });
            //app.MapAzureSignalR(this.GetType().FullName);
        }
    }
}
