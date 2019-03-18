import { Injectable } from '@angular/core';
import { SvgService } from './svg.service';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  private svg: SVGSVGElement;

  constructor(private svgService: SvgService) {
    this.svg = svgService.svgElement;
  }

  drawItem(itemDescription: ItemDescription): SVGGElement {
    const g = this.svgService.createElement('g', []);
    this.svg.appendChild(g);
    return null;
  }
}

export interface ItemDescription {

}
