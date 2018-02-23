import { Injectable } from '@angular/core';
import { Player } from '../entities/player';

@Injectable()
export class PlayerNameService {

  constructor() { }

  buildPlayerNameDictionary(players: Player[]) {
    const playerNameDict = {};
    for (const player of players) {
      playerNameDict[player.id] = player.name;
    }
    window.localStorage['playerNameDict'] = JSON.stringify(playerNameDict);
  }

  getPlayerNameFromId(player_id: string) {
    const playerNameDict = JSON.parse(window.localStorage['playerNameDict']);
    if (playerNameDict && playerNameDict[player_id] && playerNameDict[player_id] !== '<Unknown>') {
      return playerNameDict[player_id];
    }
    else {
      return 'Computah';
    }
  }
}
