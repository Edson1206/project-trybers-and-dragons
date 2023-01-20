import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static createdInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior.createdInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    return Warrior.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}