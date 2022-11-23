// window.onload = init;

// function init() {
// 	async function mainLoop() {
// 		const scInfo = await getInfo();
// 		getData(scInfo);
// 	}

// 	mainLoop();
// 	setInterval( () => { mainLoop(); }, 500); //update interval
// }

// async function getData(scInfo) {
// 	let winner1 = scInfo['winner1.nombre'];
// 	let p1Team = scInfo['p1Team'];
// 	let p1Score = scInfo['p1Score'];
// 	let p1Color = scInfo['p1Color'];
// 	let p1Character = scInfo['p1Character'];
// 	let p1Skin = scInfo['p1Skin'];
// 	let p1WL = scInfo['p1WL'];
	
// 	let p2Name = scInfo['p2Name'];
// 	let p2Team = scInfo['p2Team'];
// 	let p2Score = scInfo['p2Score'];
// 	let p2Color = scInfo['p2Color'];
// 	let p2Character = scInfo['p2Character'];
// 	let p2Skin = scInfo['p2Skin'];
// 	let p2WL = scInfo['p2WL'];

// 	let round = scInfo['round'];
// 	let bestOf = scInfo['bestOf'];

// 	let caster1 = scInfo['caster1Name'];
// 	twitter1 = scInfo['caster1Twitter'];
// 	twitch1 = scInfo['caster1Twitch'];
// 	let caster2 = scInfo['caster2Name'];
// 	twitter2 = scInfo['caster2Twitter'];
// 	twitch2 = scInfo['caster2Twitch'];;

//     setPlayers(winner1);
// }

// function setPlayers(winner1) {
// 	document.getElementById("#winner-1").innerText = winner1;
// }


// //searches for the main json file
// function getInfo() {
// 	return new Promise(function (resolve) {
// 		const oReq = new XMLHttpRequest();
// 		oReq.addEventListener("load", reqListener);
// 		oReq.open("GET", 'Resources/Texts/Top-8.json');
// 		oReq.send();

// 		//will trigger when file loads
// 		function reqListener () {
// 			resolve(JSON.parse(oReq.responseText))
// 		}
// 	})
// 	//i would gladly have used fetch, but OBS local files wont support that :(
// }

const logosPath = './Resources/TeamLogos/';
const charPath = './Resources/Characters/Stock Icons/';


fetch("Top-8.json")
	.then(response => response.json())
	.then(players => {
		console.log(players);
		// Winners Semifinals 1
		setPlayer("winner-1", players.winner1);
		setPlayer("winner-2", players.winner2);
		setScores(document.querySelector("#wsscore-1"), document.querySelector("#wsscore-2"), players.winner1, players.winner2);

		// Winners Semifinals 2
		setPlayer("winner-3", players.winner3);
		setPlayer("winner-4", players.winner4);
		setScores(document.querySelector("#wsscore-3"), document.querySelector("#wsscore-4"), players.winner3, players.winner4);
		
		// Winners Finals
		setPlayer("wfinals-1", players.wFinals1);
		setPlayer("wfinals-2", players.wFinals2);
		setScores(document.querySelector("#wfscore-1"), document.querySelector("#wfscore-2"), players.wFinals1, players.wFinals2);
		
		// Grand Finals
		setPlayer("grands-1", players.grands1);
		setPlayer("grands-2", players.grands2);
		setScores(document.querySelector("#gfscore-1"), document.querySelector("#gfscore-2"), players.grands1, players.grands2);


		// Top 8 LR1 1
		setPlayer("loser-1", players.loser1);
		setPlayer("loser-2", players.loser2);
		setScores(document.querySelector("#lr1score-1"), document.querySelector("#lr1score-2"), players.loser1, players.loser2);

		// Top 8 LR1 2
		setPlayer("loser-3", players.loser3);
		setPlayer("loser-4", players.loser4);
		setScores(document.querySelector("#lr1score-3"), document.querySelector("#lr1score-4"), players.loser3, players.loser4);

		// Losers Quarterfinals 1
		setPlayer("quarters-1", players.quarters1);
		setPlayer("quarters-2", players.quarters2);
		setScores(document.querySelector("#qscore-1"), document.querySelector("#qscore-2"), players.quarters1, players.quarters2);

		// Losers Quarterfinals 2
		setPlayer("quarters-3", players.quarters3);
		setPlayer("quarters-4", players.quarters4);
		setScores(document.querySelector("#qscore-3"), document.querySelector("#qscore-4"), players.quarters3, players.quarters4);

		// Losers Semifinals
		setPlayer("lsemis-1", players.lSemis1);
		setPlayer("lsemis-2", players.lSemis2);
		setScores(document.querySelector("#lsscore-1"), document.querySelector("#lsscore-2"), players.lSemis1, players.lSemis2);

		// Losers Semifinals
		setPlayer("lfinals-1", players.lFinals1);
		setPlayer("lfinals-2", players.lFinals2);
		setScores(document.querySelector("#lfscore-1"), document.querySelector("#lfscore-2"), players.lFinals1, players.lFinals2);

		function advanceWinner(player1, player2, pround1, pround2) {
			if (pround1.winOrLose) {
				
			}
		}

		function setPlayer(player, pround) {
			document.querySelector(`#${player}`).innerText = pround.nombre;
			document.querySelector(`#${player}-logo`).src = logosPath + pround.sponsor + ".png";
			document.querySelector(`#${player}-char`).src = charPath + pround.personaje + "/" + pround.color + ".png";
		}
		
		function setScores(player1, player2, pround1, pround2) {
		player1.classList.toggle("score");
		player2.classList.toggle("score");
		if (pround1.winOrLose || pround2.winOrLose) {
			player1.classList.toggle("score");
			player2.classList.toggle("score");
			if (pround1.score > pround2.score) {
				player1.innerText = pround1.score;
				player1.classList.add("score-win");
				player2.innerText = pround2.score;
				player2.classList.add("score-lose");
			} else {
				player2.innerText = pround2.score;
				player2.classList.add("score-win");
				player1.innerText = pround1.score;
				player1.classList.add("score-lose");
			}
		}

	}
});
