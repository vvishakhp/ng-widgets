import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { CanvasService } from '../../services/canvas.service';

@Component({
  selector: 'rpa-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  providers: [SvgService, CanvasService]
})
export class CanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('svgContainer')
  svgContainer: ElementRef;

  constructor(private svgService: SvgService, private canvasService: CanvasService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    (this.svgContainer.nativeElement as HTMLDivElement).appendChild(this.svgService.svgElement);
    this.canvasService.drawItem(null);
  }

}
