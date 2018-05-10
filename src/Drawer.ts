import { Canvas2D } from './Canvas';
import { IPoint } from './Point';
class Drawer {
  public static draw(lsystemString: string, angle: number, canvas: Canvas2D, length: number = 50, width: number = 1) {
    const stack: Array<{ point: IPoint, angle: number }> = [];
    canvas.setLineWidth(width);
    lsystemString.split('').forEach((letter: string) => {
      switch (letter) {
        case 'F':
        case 'G':
          canvas.drawLine(length);
          return;
        case '+':
          canvas.rotate(angle);
          return;
        case '-':
          canvas.rotate(-angle);
          return;
        case '[':
          stack.push({ point: canvas.getLastPoint(), angle: canvas.getAngle() });
          return;
        case ']':
          const savedData = stack.pop();
          if (savedData) {
            canvas.setAngle(savedData.angle);
            canvas.setLastPoint(savedData.point);
          }
          return;
      }
    });
  }
}

export { Drawer };
