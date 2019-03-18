import { Point, Box } from '../models';
import { ShapeGroup, RectangleShape, TextShape } from '../shapes';

export class SvgService {
  private svg: SVGSVGElement;

  constructor() {
  }

  setSvg(svg: SVGSVGElement) {
    this.svg = svg;
    this.svg.setAttributeNS(null, 'shape-rendering', 'crispEdges');
  }

  public get svgElement(): SVGSVGElement { return this.svg; }

  setSvgSize(size: Point) {
    this.svg.setAttributeNS(null, 'height', size.y.toString());
    this.svg.setAttributeNS(null, 'width', size.x.toString());
  }
  
}
