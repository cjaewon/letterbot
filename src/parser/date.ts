import dateData from './data/date.json';

export const parser = (): string => {
  const date = new Date();
  const today = `${date.getMonth() + 1}-${date.getDate()}`;

  console.log('✅ 날짜 파싱 완료');

  return (<any> dateData)[today] || null;
};