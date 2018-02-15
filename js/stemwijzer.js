var nr = 0;
var choices = [];

var startBtn = document.getElementById('start');
var subject = document.getElementById('subject');
var statement = document.getElementById('statement');
var nextBtn = document.getElementById('skip');
var backBtn = document.getElementById('back');
var eensBtn = document.getElementById('eens');
var oneensBtn = document.getElementById('oneens');
var geenBtn = document.getElementById('geen');
var main = document.getElementById('main');
var parties = document.getElementById('parties');
var punten = [
	{name: "VVD", points: 0},
	{name: "CDA", points: 0},
	{name: "PVV", points: 0},
	{name: "D66", points: 0},
	{name: "GroenLinks", points: 0},
	{name: "SP", points: 0},
	{name: "PvdA", points: 0},
	{name: "ChristenUnie", points: 0},
	{name: "Partij voor de Dieren", points: 0},
	{name: "SGP", points: 0},
	{name: "DENK", points: 0},
	{name: "Forum voor Democratie", points: 0},
	{name: "Lokaal in de kamer", points: 0},
	{name: "OndernemersPartij", points: 0},
	{name: "VNL", points: 0},
	{name: "Nieuwe Wegen", points: 0},
	{name: "De Burger Beweging", points: 0},
	{name: "Piratenpartij", points: 0},
	{name: "Artikel 1", points: 0},
	{name: "Libertarische Partij", points: 0}
];

var parties = [
	{name: "VVD", secular: true, size: 33, long: "Volkspartij voor Vrijheid en Democratie"},
	{name: "CDA", secular: false, size: 19, long: "Christen Democratisch Appel"},
	{name: "PVV", secular: true, size: 20, long: "Partij voor de Vrijheid"},
	{name: "D66", secular: true, size: 19, long: "Democratie 66"},
	{name: "GroenLinks", secular: true, size: 14},
	{name: "SP", secular: true, size: 14, long: "Socialistische Partij"},
	{name: "PvdA", secular: true, size: 9, long: "Partij van de Arbeid"},
	{name: "ChristenUnie", secular: false, size: 5},
	{name: "Partij voor de Dieren", secular: true, size: 33},
	{name: "SGP", secular: false, size: 33, long: "Staatkundig Gerefomeerde Partij"},
	{name: "DENK", secular: true, size: 3},
	{name: "Forum voor Democratie", secular: true, size: 2},
	{name: "Lokaal in de kamer", secular: true, size: 0},
	{name: "OndernemersPartij", secular: true, size: 0},
	{name: "VNL", secular: true, size: 0},
	{name: "Nieuwe Wegen", secular: true, size: 0},
	{name: "De Burger Beweging", secular: true, size: 0},
	{name: "Piratenpartij", secular: true, size: 0},
	{name: "Artikel 1", secular: true, size: 0},
	{name: "Libertarische Partij", secular: true, size: 0}
];
var results = document.getElementById('Resultaten');

startBtn.addEventListener("click", start);

function start() {
 console.log("start()");

var start = document.getElementById('start').style.display = "none";
main.style.display = "block";


 	
 var start = document.getElementById('start');
 nr++;
 start.innerHTML = 'start';
 

}

nextBtn.addEventListener("click", function() {
	
	choices.push("skip");
	console.log(choices);
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	if (nr == 7) {
		results();
	}	
});

eensBtn.addEventListener("click", function() {
		
	choices.push("pro");
	console.log(choices);
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;	

	
    var positions = subjects[nr].parties;
    for (i = 0; i < 20; i++) { 
   		if (positions[i].position == "pro") {
   			punten[i].points++
   			console.log(punten);
   			
   			
   		}
	}	
	nr++;
	if (nr == 7) {
		results();
	}	
});

oneensBtn.addEventListener("click", function() {
	
	choices.push("contra");
	console.log(choices);
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;	

	console.log(punten);

    var positions = subjects[nr].parties;
	for (i = 0; i < 20; i++) { 
		if (positions[i].position == "contra") {
			console.log(i);
			punten[i].points++
		}
	}	
	nr++;
	if (nr == 7) {
		results();
	}
});

geenBtn.addEventListener("click", function() {
	
	choices.push("ambivalent");
	console.log(choices);
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;	

	    var positions = subjects[nr].parties;
    	for (i = 0; i < 20; i++) { 
   			if (positions[i].position == "ambivalent") {
   				punten[i].points++
   				console.log(punten);
   			
   			
   		}
	}	
	nr++;
	if (nr == 7) {
		results();
	}	
});

backBtn.addEventListener("click", function() {
	nr--;
	choices.pop();
	console.log(choices);
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;	

	parties.innerHTML = "";	
});




subject.innerHTML = subjects[nr].title;
statement.innerHTML = subjects[nr].statement;

main.style.display = "none";




function results(){

	title.innerHTML = "Resultaten";
	subject.innerHTML = "";
	party = "";
for (i = 0; i < 20; i++) { 
    party += punten[i].name + "-" + punten[i].points + "<br>";
}
	parties.innerHTML = party;
	console.log(party);

var nextBtn = document.getElementById('skip').style.display = "none";
var backBtn = document.getElementById('back').style.display = "none";
var eensBtn = document.getElementById('eens').style.display = "none";
var oneensBtn = document.getElementById('oneens').style.display = "none";
var geenBtn = document.getElementById('geen').style.display = "none";


};

