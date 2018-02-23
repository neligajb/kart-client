import { Pipe, PipeTransform } from '@angular/core';
/*
 * Filters the currently selected player's score from an array of scores
*/
@Pipe({name: 'playerScore'})
export class PlayerScorePipe implements PipeTransform {
  transform(scores: any, player_id: string): number {
    for (const score of scores) {
      if (score.player_id === player_id) {
        return score.average;
      }
    }
    return 0;
  }
}
