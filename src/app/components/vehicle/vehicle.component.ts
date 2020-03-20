import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { takeWhile } from 'rxjs/operators';

import { IObject } from '../../models';
import { IVehicle } from './models';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VehicleComponent),
      multi: true
    }
  ]
})
export class VehicleComponent implements ControlValueAccessor, OnDestroy {

  @Input() carMake: IObject[];
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();

  isAlive = true;
  vehicleForm: FormGroup = this.fb.group({
    make: [''],
    regoDate: ['']
  });

  constructor(private fb: FormBuilder) {}

  writeValue(value: IVehicle) {
    value && this.vehicleForm.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn) {
    this.vehicleForm.valueChanges.pipe(
      //delay(0), 
      takeWhile(() => this.isAlive)
    )
    .subscribe(fn);
  }

  public onTouched: () => void = () => {};

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

}