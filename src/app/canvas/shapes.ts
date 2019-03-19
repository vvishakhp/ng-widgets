import { Box, Point } from './models';

export abstract class Shape {

    public el: SVGElement;


    /** Position */
    private pos: Point;
    public get position(): Point {
        return this.pos;
    }
    public set position(pos: Point) {
        this.pos = pos;
        this.el.setAttributeNS(null, 'x', pos.x.toString());
        this.el.setAttributeNS(null, 'y', pos.y.toString());
    }

    /** Parent */
    protected parent: SVGElement;
    public get parentElement(): SVGElement { return this.parent; }
    public set parentElement(p: SVGElement) {
        if (p) {
            this.parent = p;
            p.appendChild(this.el);
        }
    }

    constructor(elType: string, position: Point, parentElemet: SVGElement) {
        this.el = document.createElementNS('http://www.w3.org/2000/svg', elType);
        this.position = position;
        this.parentElement = parentElemet;
    }

    public get fill() {
        return this.el.getAttributeNS(null, 'fill');
    }
    public set fill(fill: string) {
        this.el.setAttributeNS(null, 'fill', fill);
    }

    public get stroke() {
        return this.el.getAttributeNS(null, 'stroke');
    }
    public set stroke(stroke: string) {
        this.el.setAttributeNS(null, 'stroke', stroke);
    }

    public get strokeWidth() {
        return this.el.getAttributeNS(null, 'stroke-width');
    }
    public set strokeWidth(strokW: string) {
        this.el.setAttributeNS(null, 'stroke-width', strokW);
    }
}

export class RectangleShape extends Shape {


    private bbox: Box;

    constructor(bBox: Box, parentElement: SVGElement) {
        super('rect', bBox, parentElement);
        this.bBox = bBox;
    }

    public get bBox() {
        return this.bbox;
    }
    public set bBox(box: Box) {
        this.position = box;
        this.bbox = box;
        this.el.setAttributeNS(null, 'width', box.w.toString());
        this.el.setAttributeNS(null, 'height', box.h.toString());
    }

}

export class IconShape extends Shape {

    private image: HTMLImageElement;
    private bbox: Box;

    constructor(bBox: Box, public parentElement: SVGElement, iconUrl: string) {
        super('foreignObject', bBox, parentElement);
        this.image = document.createElement('img');
        this.el.appendChild(this.image);
        this.iconUrl = iconUrl;
        this.bBox = bBox;

        this.image.style.width = '100%';
        this.image.style.height = '100%';
    }

    public get bBox() {
        return this.bbox;
    }

    public set bBox(box: Box) {
        this.position = box;
        this.bbox = box;
        this.el.setAttributeNS(null, 'width', box.w.toString());
        this.el.setAttributeNS(null, 'height', box.h.toString());
    }

    private icon: string;
    public get iconUrl(): string {
        return this.icon;
    }
    public set iconUrl(i: string) {
        this.icon = i;
        this.image.setAttribute('src', this.icon);
    }
}

export class ShapeGroup extends Shape {

    constructor(pos: Point, parent: SVGElement) {
        super('g', new Point(), parent);
        this.position = pos;
    }

    private _pos: Point;

    public get position() { return this._pos }
    public set position(pos: Point) {
        this._pos = pos;
        this.el.setAttributeNS(null, 'transform', `translate(${pos.x},${pos.y})`);
    }

    public add(item: SVGElement) {
        this.el.appendChild(item);
    }
}

export class TextShape extends Shape {
    private txt = '';
    constructor(position: Point, parent: SVGElement, text: string) {
        super('text', position, parent);
        this.text = text;
        this.el.setAttributeNS(null, 'text-anchor', 'middle');
    }

    public get text() { return this.txt; }
    public set text(text: string) {
        this.txt = text;
        this.el.innerHTML = this.txt;
    }
}

export class PathShape {

    points: Point[] = [];
    path: SVGPathElement;

    private parentEl: SVGElement;

    constructor(parent: SVGElement, start: Point, cornerRadius: number = 0) {
        this.points.push(start);
        this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }

    public set parent(p: SVGElement) {
        this.parentEl = p;
        if (this.path.parentElement) {
            this.path.remove();
        }
        p.appendChild(this.path);
    }
    public get parent(): SVGElement {
        return this.parentEl;
    }

    public push(point: Point) {
        this.points.push(point);
    }

    public pop() {
        this.points.pop();
    }

    public popAll(newStart: Point) {
        this.points = [newStart];
    }

    private calcPath() {

    }
}


