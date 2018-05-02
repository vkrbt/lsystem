import { Canvas2D } from './Canvas';

class Drawer {
  public static draw(lsystemString: string, angle: number, canvas: Canvas2D, length: number = 50) {
    lsystemString.split('').forEach((letter: string) => {
      switch (letter) {
        case 'F':
          canvas.drawLine(length);
          return;
        case '+':
          canvas.rotate(angle);
          return;
        case '-':
          canvas.rotate(-angle);
          return;
      }
    });
  }
}

export { Drawer };
