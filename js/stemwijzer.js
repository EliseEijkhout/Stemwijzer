var nr =0;

var subject = document.getElementById('subject');
var statement = document.getElementById('statement');
var next = document.getElementById('skip');
var back = document.getElementById('back');

subject.innerHTML = subjects[nr].title;

var next = function(event) {
	nr++;
	subject.innerHTML = subjects[nr].title;
}

var prev = function(event){
	nr--;
	subject.innerHTML = subject[nr].title;
}

