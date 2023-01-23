import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;
  
  constructor(player: Fighter, character2: Fighter) {
    super(player);
    this._player2 = character2;
  }

  public fight(): number {
    while (this.player.lifePoints > -1
      && this._player2.lifePoints > -1) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }
    return super.fight();
  }
}
