import { IRule } from './Rule';

class LSystem {
  public static mapRules(rules: IRule[]) {
    return rules.reduce((rulesObj: object, rule: IRule) => {
      rulesObj[rule.from] = rule.to;
      return rulesObj;
    }, Object());
  }

  private axiom: string;
  private rules: IRule[];

  constructor(axiom: string, rules: IRule[]) {
    this.axiom = axiom;
    this.rules = LSystem.mapRules(rules);
  }

  public generate(iterations: number): string {
    let output: string = this.axiom;
    for (let i = 0; i < iterations; ++i) {
      output = this.map(output);
    }
    return output;
  }

  public getAxiom(): string {
    return this.axiom;
  }

  public getRules(): IRule[] {
    return this.rules;
  }

  private map(axiom: string): string {
    let output: string[] = axiom.split('');
    output = output.map((letter) => {
      const mapping: string = this.rules[letter];
      return mapping || letter;
    });
    return output.join('');
  }
}

export { LSystem };
