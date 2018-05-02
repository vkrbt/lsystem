import { IPoint } from './Point';

const toRadians = (angle: number): number => (-angle * Math.PI / 180);

const toDegrees = (angle: number): number => -(angle * 180 / Math.PI);

class Canvas2D {
  private ctx: CanvasRenderingContext2D;
  private angle: number = 0;
  private lastpos: IPoint = { x: 0, y: 0 };
  constructor(
    w: number,
    h: number,
    parent: Node = document.body,
    id: string = 'canvas',
  ) {
    const canvas = document.createElement('canvas');
    canvas.id = id;
    canvas.width = w;
    canvas.height = h;
    parent.appendChild(canvas);
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  }
  public moveTo(x: number, y: number) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.lastpos = {x, y};
  }

  public drawLine(length: number, color: string = '#000') {
    const xPos = Math.round(length * Math.cos(this.angle));
    const yPos = Math.round(length * Math.sin(this.angle));
    const point = { x: this.lastpos.x + xPos, y: this.lastpos.y + yPos };
    this.ctx.beginPath();
    this.moveTo(this.lastpos.x, this.lastpos.y);
    this.ctx.lineTo(point.x, point.y);
    this.ctx.stroke();
    this.ctx.closePath();
    this.lastpos = point;
  }

  public setAngle(angle: number) {
    this.angle = toRadians(angle);
  }

  public rotate(angle: number) {
    this.setAngle(toDegrees(this.angle) + angle);
  }

  public clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}

export { Canvas2D };
