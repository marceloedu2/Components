const { createRounds } = require("./createRounds");

function createPool(players, qtdPools) {
  const pools = [];
  for (i = 0; i < qtdPools; i++) {
    let invalidPool = true;
    while (invalidPool) {
      invalidPool = false;
      const createdPool = createRounds(shuffle(players));
      invalidPool = pools.some(
        pool => JSON.stringify(createdPool) === JSON.stringify(pool)
      );
      if (!invalidPool) {
        pools[i] = createdPool;
      }
    }
  }
  return pools;
}

function shuffle(array) {
  var m = array.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function generatePlayers(qtd) {
  const players = [0];
  for (let i = 0; i < qtd; i++) {
    players[i] = `Player ${i + 1}`;
  }
  return players;
}

module.exports = { createPool };
