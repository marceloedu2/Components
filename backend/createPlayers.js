//preecher array
function createPlayers(qtd) {
  const players = [0];
  for (let i = 0; i < qtd; i++) {
    players[i] = `Player ${i + 1}`;
  }
  return players;
}
module.exports = { createPlayers };
