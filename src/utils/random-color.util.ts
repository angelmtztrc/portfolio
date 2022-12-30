const colors = ['lime', 'emerald', 'cyan', 'sky', 'indigo', 'violet', 'red', 'pink'];

export const randomColor = () => {
  const random = Math.floor(Math.random() * colors.length - 1);

  return colors[random];
};
