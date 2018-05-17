import { ICanvas } from './ICanvas';
import { IPoint } from './Point';

const toRadians = (angle: number): number => (-angle * Math.PI / 180);

const toDegrees = (angle: number): number => -(angle * 180 / Math.PI);

class Canvas2D implements ICanvas {
  private ctx: CanvasRenderingContext2D;
  private angle: number = 0;
  private lastpos: IPoint = { x: 0, y: 0 };
  private parent: HTMLElement;
  private opacity: number;

  constructor(
    width: number,
    height: number,
    parent: HTMLElement = document.body,
    id: string = 'canvas',
    opacity: number = 1,
  ) {
    const canvas = document.createElement('canvas');
    canvas.id = id;
    canvas.width = width;
    canvas.height = height;
    parent.appendChild(canvas);
    this.parent = parent;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.resize = this.resize.bind(this);
    this.opacity = opacity;
  }
  public moveTo(x: number, y: number) {
    this.ctx.moveTo(x, y);
    this.lastpos = { x, y };
  }

  public drawLine(length: number, opacity: number = this.opacity, color: string = 'rgb(0,0,0)') {
    this.ctx.strokeStyle = `rgba(${color.slice(4, -1)}, ${opacity})`;
    const xPos = length * Math.cos(this.angle);
    const yPos = length * Math.sin(this.angle);
    const point = { x: this.lastpos.x + xPos, y: this.lastpos.y + yPos };
    this.ctx.beginPath();
    this.moveTo(this.lastpos.x, this.lastpos.y);
    this.ctx.lineTo(point.x, point.y);
    this.ctx.stroke();
    this.ctx.closePath();
    this.lastpos = point;
  }

  public getAngle(): number {
    return toDegrees(this.angle);
  }

  public setAngle(angle: number) {
    this.angle = toRadians(angle);
  }

  public rotate(angle: number) {
    this.setAngle(toDegrees(this.angle) + angle);
  }

  public clear() {
    this.ctx.fillStyle = '#e6e6e6';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  public getLastPoint(): IPoint {
    return { ...this.lastpos };
  }

  public setLastPoint(point: IPoint) {
    this.lastpos = { ...point };
  }

  public getSize() {
    return {
      height: this.ctx.canvas.height,
      width: this.ctx.canvas.width,
    };
  }

  public setLineWidth(width: number) {
    this.ctx.lineWidth = width;
  }

  public reset() {
    this.clear();
    this.setLastPoint(
      {
        x: this.ctx.canvas.width / 2,
        y: this.ctx.canvas.height / 2,
      },
    );
    this.angle = 0;
  }

  private resize() {
    const canvas = this.ctx.canvas;
    this.ctx.canvas.width = this.parent.clientWidth;
    this.ctx.canvas.height = this.parent.clientHeight;
    this.ctx.drawImage(canvas, 0, 0);
  }

}

export { Canvas2D };
