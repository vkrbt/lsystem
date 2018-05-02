import { Canvas2D } from './Canvas';
import { Drawer } from './Drawer';
import { LSystem } from './LSystem';

const lsystem = new LSystem('F--F--F', [
  { from: 'F', to: 'F+F--F+F' },
]);

console.log(lsystem.generate(2));

const canvas = new Canvas2D(window.innerWidth, window.innerHeight);

canvas.moveTo(0, 0);

Drawer.draw(lsystem.generate(3), 60, canvas, 50);
