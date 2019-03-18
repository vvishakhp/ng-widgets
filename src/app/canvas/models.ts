
export interface Shape {
    move(x?: number | Point, y?: number);
    moveBy(x?: number | Point, y?: number);
    scale(x?: number, y?: number);
}


export class Point {

    public constructor(public x = 0, public y = 0) { }

    public clone(): Point {
        return new Point(this.x, this.y);
    }

    public move(x: number | Point = 0, y: number = 0) {
        if (typeof x === 'number') {
            this.x = x;
            this.y = y;
        } else {
            this.x = x.x;
            this.y = x.y;
        }
    }

    public moveBy(x: Point | number = 0, y: number = 0) {
        if (typeof x === 'number') {
            this.x += x;
            this.y += y;
        } else {
            this.x += x.x;
            this.y += x.y;
        }
    }
}

export class Box extends Point {

    public constructor(public x = 0, public y = 0, public h = 0, public w = 0) {
        super(x, y);
    }

    public clone(): Box {
        return new Box(this.x, this.y, this.h, this.w);
    }

    public scale(w: number = 1, h: number = null) {
        const newW = this.w * w;
        const newH = this.h *= (h === null) ? 1 : h;
        const dh = this.h - newH;
        const dw = this.w - newW;

        this.moveBy(dw / 2, dh / 2);
    }
}

export class Circle extends Point implements Shape {
    constructor(public x: number = 0, public y: number = 0, public r: number = 0) {
        super(x, y);
    }

    public scale(factor: number = 1) {
        this.r *= factor
    }
}