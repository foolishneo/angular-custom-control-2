import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { CAR_MAKE } from './models';
import { Vehicle } from './components/vehicle/models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  carMakeList = CAR_MAKE;
  vehicleListForm: FormGroup = this.fb.group({
    name: [''],
    //vehicles: this.fb.array([new Vehicle()])
  });

  constructor(private fb: FormBuilder) { }

  changeVehicelList(action) {
    if (action === 'add') {
      this.vehicles.push(new FormControl(new Vehicle()));
    } else if (action > 0) {
      this.vehicles.removeAt(action);
    }
  }

  onSubmit() {
    console.log(this.vehicleListForm.getRawValue());
  }

  get vehicles() {
    return this.vehicleListForm.get('vehicles') as FormArray;
  }
}
