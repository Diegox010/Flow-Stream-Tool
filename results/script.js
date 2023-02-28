document.addEventListener('DOMContentLoaded', function () {
  async function getPlayers() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'players.json');
      xhr.onload = () => {
        if (xhr.status === 200) {
          const players = JSON.parse(xhr.responseText);
          resolve(players);
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => reject('Error fetching players.json');
      xhr.send();
    });
  }

  getPlayers()
    .then((players) => {
      console.log(players);
      players.map((player, index) => {
        const playerElement = document.getElementById(`top-${index + 1}`);
        playerElement.style.backgroundImage = `url('${player.url}')`;
        playerElement.nextElementSibling.children[0].innerHTML = player.player;
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
