import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements AfterViewInit {

  @ViewChild('canvas1') canvas!: ElementRef;

  public context!: CanvasRenderingContext2D;

  image: HTMLImageElement = new Image();
  constructor() {}

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
   
    console.log('The context is: ' + this.context);
    console.log('The canvas is: ' + this.canvas);

    this.draw(this.context);
    this.context.drawImage(this.image, 625, 468);

  }

  private draw(context: CanvasRenderingContext2D) {
    this.image.src = './src/assets/images/profile.png';
    console.log("Draw's context is:" + this.image.src);
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.font = '40px ';
    const x = (this.canvas.nativeElement as HTMLCanvasElement).width / 2;
    const y = (this.canvas.nativeElement as HTMLCanvasElement).height / 2;
    context.fillText('test', x, y);
    context.drawImage(this.image, x, y);
  }

}
