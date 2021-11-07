export const sortByDate = (left: Date, right: Date) =>
  new Date(left).getTime() - new Date(right).getTime();
