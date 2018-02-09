var nr = 0;

var startBtn = document.getElementById('start');
var subject = document.getElementById('subject');
var statement = document.getElementById('statement');
var nextBtn = document.getElementById('skip');
var backBtn = document.getElementById('back');
var eensBtn = document.getElementById('eens');
var oneensBtn = document.getElementById('oneens');
var geenBtn = document.getElementById('geen');
var main = document.getElementById('main');

startBtn.addEventListener("click", start);
nextBtn.addEventListener("click", function() {
	nr++;
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;	
});

eensBtn.addEventListener("click", function() {
	nr++;
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;	
});

oneensBtn.addEventListener("click", function() {
	nr++;
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;	
});

geenBtn.addEventListener("click", function() {
	nr++;
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;	
});

backBtn.addEventListener("click", function() {
	nr--;
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;	
});




subject.innerHTML = subjects[nr].title;
statement.innerHTML = subjects[nr].statement;

main.style.display = "none";


function start() {
 console.log("start()");

var start = document.getElementById('start').style.display = "none";
main.style.display = "block";


 	
 var start = document.getElementById('start');
 nr++;
 start.innerHTML = 'start';
 



}


