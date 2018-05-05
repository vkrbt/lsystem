import { Canvas2D } from './Canvas';
import { Drawer } from './Drawer';
import { LSystem } from './LSystem';
import { IRule, isIRule } from './Rule';

const presets = [
  {
    angle: 60,
    axiom: 'F--F--F',
    name: 'Koch Snowflake',
    rules: 'F > F+F--F+F',
  }, {
    angle: 90,
    axiom: 'F',
    name: 'Koch Curve',
    rules: 'F > F+F-F-F+F',
  }, {
    angle: 60,
    axiom: 'F+F+F+F+F+F',
    name: 'Hexa flake',
    rules: 'F > F+F+F--F--F+F+F',
  }, {
    angle: 90,
    axiom: 'X',
    name: 'Lindenmayer curve',
    rules: 'X > XFYFX+F+YFXFY-F-XFYFX\nY > YFXFY-F-XFYFX+F+YFXFY',
  }, {
    angle: 60,
    axiom: 'F',
    name: 'Gosper curve',
    rules: 'F > F-G--G+F++FF+G-\nG > +F-GG--G-F++F+G',
  }, {
    angle: 120,
    axiom: 'F-G-G',
    name: 'Sierpinski triangle',
    rules: 'F => F-G+F+G-F\nG => GG',
  }, {
    angle: 60,
    axiom: 'F',
    name: 'Sierpinski arrow head triangle',
    rules: 'F => G-F-G\nG => F+G+F',
  }, {
    angle: 90,
    axiom: 'FX',
    name: 'Dragon curve',
    rules: 'X => X+YF+\nY => -FX-Y',
  }, {
    angle: 25,
    axiom: '+++X',
    name: 'Plant',
    rules: 'X => F[-X][X]F[-X]+FX\nF => FF',
  }, {
    angle: 90,
    axiom: 'A',
    name: 'Hilbert Curve',
    rules: 'A => -BF+AFA+FB-\nB => +AF-BFB-FA+',
  },
];

const parseRules = (rulesString: string): IRule[] => rulesString.split('\n').map((line) => {
  const ruleArray: string[] = line.split('>');
  return {
    from: ruleArray[0] && ruleArray[0].trim(),
    to: ruleArray[1] && ruleArray[1].trim(),
  };
}).filter((rule: IRule) => isIRule(rule));

export const setup = () => {

  let rootElement = document.getElementById('root');
  if (!rootElement) {
    const elem = document.createElement('div');
    elem.id = 'root';
    rootElement = elem;
  }

  const canvas = new Canvas2D(window.innerWidth * 0.7, window.innerHeight, rootElement);
  const canvasSize = canvas.getSize();
  canvas.setLastPoint(
    {
      x: canvasSize.width / 2,
      y: canvasSize.height / 2,
    },
  );

  const axiomElem = document.getElementById('axiom') as HTMLInputElement;
  const iterationsElem = document.getElementById('iterations') as HTMLInputElement;
  const angleElem = document.getElementById('angle') as HTMLInputElement;
  const lineElem = document.getElementById('line') as HTMLInputElement;
  const rulesElem = document.getElementById('rules') as HTMLTextAreaElement;

  const presetsElem = document.getElementById('presets') as HTMLSelectElement;

  presets.forEach((preset) => {
    const option = document.createElement('option');
    option.innerHTML = preset.name;
    presetsElem.appendChild(option);
  });

  const rules = parseRules(rulesElem.value);

  let lsystem = new LSystem('F-G-G', rules);

  const draw = (iterations: number, angle: number, lineLength: number) => {
    canvas.reset();
    Drawer.draw(lsystem.generate(iterations), angle, canvas, lineLength);
  };

  draw(+iterationsElem.value, +angleElem.value, +lineElem.value);

  presetsElem.addEventListener('change', (e: any) => {
    const preset = presets.find((currentPreset: any) => currentPreset.name === e.target.value);
    if (preset) {
      lsystem = new LSystem(preset.axiom, parseRules(preset.rules));
      angleElem.value = `${preset.angle}`;
      rulesElem.value = `${preset.rules}`;
    }
    draw(+iterationsElem.value, +angleElem.value, +lineElem.value);
  });

  axiomElem.addEventListener('input', (e: any) => {
    if (e.currentTarget) {
      lsystem = new LSystem(e.currentTarget.value, rules);
    }
    draw(+iterationsElem.value, +angleElem.value, +lineElem.value);
  });

  iterationsElem.addEventListener('input', (e: any) => {
    draw(+e.currentTarget.value, +angleElem.value, +lineElem.value);
  });
  angleElem.addEventListener('input', (e: any) => {
    draw(+iterationsElem.value, +e.currentTarget.value, +lineElem.value);
  });
  lineElem.addEventListener('input', (e: any) => {
    draw(+iterationsElem.value, +angleElem.value, +e.currentTarget.value);
  });
  rulesElem.addEventListener('input', (e: any) => {
    if (e.currentTarget) {
      lsystem = new LSystem(axiomElem.value, parseRules(e.target.value));
    }
    draw(+iterationsElem.value, +angleElem.value, +lineElem.value);
  });
};
