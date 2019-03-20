import { Point, Box } from '../models';
import { ShapeGroup, RectangleShape, TextShape } from '../shapes';

export class SvgService {
  private svg: SVGSVGElement;

  constructor() {
  }

  setSvg(svg: SVGSVGElement) {
    this.svg = svg;
    this.svg.setAttributeNS(null, 'shape-rendering', 'crispEdges');
    this.svg.appendChild(this.inflateTemplate(`<rect x="100" y="100" width="100" height="100">`));
  }

  public get svgElement(): SVGSVGElement { return this.svg; }

  setSvgSize(size: Point) {
    this.svg.setAttributeNS(null, 'height', size.y.toString());
    this.svg.setAttributeNS(null, 'width', size.x.toString());
  }

  inflateTemplate(template: string): SVGGElement {
    const parser = new DOMParser();
    const obj = parser.parseFromString(`<g xmlns="http://www.w3.org/2000/svg">${template}</g> `, 'image/svg+xml') as XMLDocument;
    return obj.children[0] as SVGGElement;
  }
}
