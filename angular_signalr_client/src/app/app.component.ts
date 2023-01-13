import { Component, OnInit } from '@angular/core';

const microsoftSignalR = require("@microsoft/signalr");
const aspnetSignalR = require("@aspnet/signalr");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular_signalr_client';

  

  constructor(){

  }

  ngOnInit(): void {
    //this.initSignalRCoreApi();

    this.initSignalRDotNet48Api();
  }

  initSignalRCoreApi(){
    let connection = new microsoftSignalR.HubConnectionBuilder()
        .withUrl("https://localhost:7168/dashboardHub")
        .build();

    connection.on("ReceiveMessage", data => {
        console.log('connection.on ->', data);
    });

    connection.start()
        .then(() => connection.invoke("SendMessage", "User", "Hello"));
  }

  initSignalRDotNet48Api(){
    let connection = new aspnetSignalR.HubConnectionBuilder()
        .withUrl("https://localhost:44359/signalr/dashboardHub")
        .build();

    connection.on("ReceiveMessage", data => {
        console.log('connection.on ->', data);
    });

    connection.start()
        .then(() => connection.invoke("SendMessage", "User", "Hello"))
        .catch((error) => {
          console.log('connection.start error ->', error);
        });
  }


}
