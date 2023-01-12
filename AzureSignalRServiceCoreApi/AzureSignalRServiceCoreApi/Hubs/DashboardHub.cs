﻿using Microsoft.AspNetCore.SignalR;

namespace AzureSignalRServiceCoreApi.Hubs
{
    public class DashboardHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
