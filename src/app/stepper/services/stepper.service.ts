import { Injectable, ViewContainerRef } from '@angular/core';
import { CreateComponentService } from '../../component-creator/services/create-component.service';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  constructor(private cmpCreator: CreateComponentService) {

  }
}
