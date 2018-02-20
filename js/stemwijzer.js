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

var partyResults = document.getElementById('parties');

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
   			console.log(nr);
   			
   			
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

	console.log(nr);

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
   				console.log(nr);
   			
   			
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
	subject.innerHTML = "Resultaten";
	var partyResultsHtml = "";

		statement.innerHTML = "";

	for (i = 0; i < punten.length; i++) { 
    	partyResultsHtml += punten[i].name + "-" + punten[i].points + "<br>";
	}
	
	partyResults.innerHTML = partyResultsHtml;
	//console.log(partyResultsHtml);

	var nextBtn = document.getElementById('skip').style.display = "none";
	var eensBtn = document.getElementById('eens').style.display = "none";
	var oneensBtn = document.getElementById('oneens').style.display = "none";
	var geenBtn = document.getElementById('geen').style.display = "none";
};

