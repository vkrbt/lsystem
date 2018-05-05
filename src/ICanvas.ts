import { IPoint } from './Point';

interface ICanvas {

  drawLine(length: number, opacity?: number, color?: string): void;

  getAngle(): number;

  setAngle(angle: number): void;

  rotate(angle: number): void;

  clear(): void;

  getLastPoint(): IPoint;

  setLastPoint(point: IPoint): void;
}

export { ICanvas };
