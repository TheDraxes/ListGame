import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public readonly gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.startConnection();
  }

  public Test() {
    this.gameService.startGame();
  }
}
