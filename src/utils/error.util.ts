export const catchError = (err: any) => {
  if (err.response) {
    console.log(err.response);
    throw new Error(err.response.data.error.message);
  }
  throw new Error(err.message);
};
