export interface IRule {
  from: string;
  to: string;
}

export const isIRule = (obj: any) => {
  if (!(obj instanceof Object)) {
    return false;
  }
  const keys = Object.keys(obj);
  if (keys.length !== 2) {
    return false;
  }
  return keys.indexOf('from') + keys.indexOf('to') === 1;
};
