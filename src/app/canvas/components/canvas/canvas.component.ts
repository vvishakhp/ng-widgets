import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { CanvasService } from '../../services/canvas.service';
import { Point } from '../../models';

@Component({
  selector: 'rpa-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  providers: [SvgService, CanvasService]
})
export class CanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('svgContainer')
  svgContainer: ElementRef;

  @ViewChild('svg')
  svg: ElementRef;

  constructor(private svgService: SvgService, private canvasService: CanvasService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.svgService.setSvg(this.svg.nativeElement);
    this.svgService.setSvgSize(new Point(500, 500));
  }

}
