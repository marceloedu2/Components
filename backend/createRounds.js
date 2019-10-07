function createRounds(players) {
  const qtdPlayers = players.length;
  const qtdRound = Math.ceil(qtdPlayers / 8);
  const rounds = Array.from({ length: qtdRound }, () => []);

  for (let i = 0, indexToInsert = 0; i < players.length; i++) {
    rounds[indexToInsert].push(players[i]);
    if (rounds[indexToInsert + 1]) {
      indexToInsert++;
    } else {
      indexToInsert = 0;
    }
  }
  return rounds;
}
module.exports = { createRounds };
