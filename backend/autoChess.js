const { createPlayers } = require("./createPlayers");
const { createPool } = require("./createPool");

const qtdPlayers = 32;
const pools = 4;
const players = createPlayers(qtdPlayers);

const pool = createPool(players, pools);

console.log(pool);
