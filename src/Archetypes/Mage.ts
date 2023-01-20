import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static createdInstances = 0;

  constructor(name: string) {
    super(name);
    Mage.createdInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return Mage.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}