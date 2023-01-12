import { Component, OnInit } from '@angular/core';

const signalR = require("@microsoft/signalr");

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
    let connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:7168/dashboardHub")
        .build();

    connection.on("ReceiveMessage", data => {
        console.log('connection.on ->', data);
    });

    connection.start()
        .then(() => connection.invoke("SendMessage", "User", "Hello"));
  }
}
