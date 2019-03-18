import { Point } from '../models';

export class SvgService {
  private svg: SVGSVGElement;

  constructor() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttributeNS(null, 'shape-rendering', 'crispEdges');
  }

  setSvg(svg: SVGSVGElement) {
    this.svg = svg;
  }

  public get svgElement(): SVGSVGElement { return this.svg; }

  setSvgSize(size: Point) {
    this.svg.setAttributeNS(null, 'height', size.y.toString());
    this.svg.setAttributeNS(null, 'width', size.x.toString());
  }

}
