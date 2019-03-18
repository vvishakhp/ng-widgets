import { Injectable } from '@angular/core';
import { Key } from 'protractor';
import { Box } from '../models';

export class SvgService {
  private svg: SVGSVGElement;

  private readonly defaultRectangle: RectangleOptions;

  constructor() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.initDeafults();
  }

  public get svgElement(): SVGSVGElement { return this.svg };

  public createElement(type: string, props: { key: string, value: string }[]) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', type);
    props.forEach(prop => el[prop.key] = prop.value);
    return el;
  }

  public createRectangle(options: RectangleOptions) {

  }

  private initDeafults() {

  }
}

export interface RectangleOptions {
  box: Box;
  parent: SVGElement;
  addToParent: boolean;
  cornerRadius: number;
  stroke: number;
  strokeColor: string;
  fillColor: string;
}