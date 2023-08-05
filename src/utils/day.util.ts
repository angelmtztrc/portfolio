import dayjs from 'dayjs';

export const formattedDate = (date: string | Date) => {
  return dayjs(date).format('MMMM, YYYY');
};

export const yearFormattedDate = (date: string | Date) => {
  return dayjs(date).format('YYYY');
};
