import { Box, Point } from './models';

export abstract class Shape {

    protected el: SVGElement;


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
            if (this.el && this.el.parentElement) {
                this.el.remove();
            }
            this.parent.appendChild(this.el);
        }
    }

    constructor(elType: string, position: Point, parentElemet: SVGElement) {
        this.el = document.createElementNS('http://www.w3.org/2000/svg', elType);
        this.position = position;
        this.parentElement = parentElemet;
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

    constructor(parent: SVGElement) {
        super('g', new Point(0, 0), parent);
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

    constructor(parent: SVGElement, start: Point) {
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


