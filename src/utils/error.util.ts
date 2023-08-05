export const catchError = (err: any) => {
  console.log(err);
  if (err.response) {
    throw new Error(err.response.data.error.message);
  }
  throw new Error(err.message);
};
