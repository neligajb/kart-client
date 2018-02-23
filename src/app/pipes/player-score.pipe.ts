import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
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
