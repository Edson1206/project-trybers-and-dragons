import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static createdInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.createdInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return Necromancer.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}