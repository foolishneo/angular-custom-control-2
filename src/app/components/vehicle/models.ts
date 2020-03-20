export interface IVehicle {
  make: string;
  regoDate: Date;
}

export class Vehicle implements IVehicle {
  make: string;
  regoDate: Date;

  constructor() {
    this.make = null;
    this.regoDate = null;
  }

}