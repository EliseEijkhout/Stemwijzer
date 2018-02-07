var nr =0;

var subject = document.getElementById('subject');
var statement = document.getElementById('statement');
var next = document.getElementById('skip');
var back = document.getElementById('back');

subject.innerHTML = subjects[nr].title;
statement.innerHTML = subjects[nr].statement;

var next = function(event) {
	nr++;
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
}

var prev = function(event){
	nr--;
	subject.innerHTML = subject[nr].title;
	statement.innerHTML = subjects[nr].statement;
}


