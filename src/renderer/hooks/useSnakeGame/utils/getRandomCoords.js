export const getRandomCoords = (snake) => {
    let min = 5;
    let max = 95;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 5) * 5;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 5) * 5;
    while(snake.includes([x,y])){
      getRandomCoords(snake)
    }
    return [x, y];
  };