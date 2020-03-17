import dateData from './data/date.json';

export const parser = (): string => {
  const date = new Date();
  const today = `${date.getMonth() + 1}-${date.getDate()}`;

  return (<any> dateData)[today] || null;
};