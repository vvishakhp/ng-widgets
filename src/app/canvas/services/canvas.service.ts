import { Injectable } from '@angular/core';
import { SvgService } from './svg.service';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  private svg: SVGSVGElement;

  constructor() {
  }

}