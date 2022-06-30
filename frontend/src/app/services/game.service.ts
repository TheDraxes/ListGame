import { Injectable, OnInit } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class GameService  {

  private hubConnection!: signalR.HubConnection;

  constructor() { }

  public startConnection() {

    if (this.hubConnection) {
      return;
    }

    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('http://localhost:59970/Game')
                            .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public startGame () {
    let player: Player = { name: "Test", connectionId: "Test" };
    let test = this.hubConnection.invoke('CreateRoom', player)
  }
}
