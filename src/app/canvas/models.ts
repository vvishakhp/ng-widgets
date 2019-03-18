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
        return this;
    }

    public moveBy(x: Point | number = 0, y: number = 0) {
        if (typeof x === 'number') {
            this.x += x;
            this.y += y;
        } else {
            this.x += x.x;
            this.y += x.y;
        }
        return this;
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
        return this;
    }
}