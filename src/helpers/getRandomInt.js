const getRandomInt = () => {
  return new Promise((resolve) => {
    const rndInt = Math.floor(Math.random() * 100 + 1);

    setTimeout(() => {
      resolve(rndInt);
    });
  });
};

export default getRandomInt;
