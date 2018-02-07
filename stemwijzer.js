

document.getElementById('subject').innerHTML = 'Stemwijzer tweede kamer 2017';
document.getElementById('statement').innerHTML = 'Test uw politieke voorkeur';


function vraag1() {


 		var nr = 0;
		var text = document.getElementById('subject');

		text.innerHTML = subjects[nr].title;

		var text = document.getElementById('statement');
		text.innerHTML = subjects[nr].statement;

		document.getElementById('option1').innerHTML = 'Eens';
		document.getElementById('option2').innerHTML = 'Geen van beide';
		document.getElementById('option3').innerHTML = 'Oneens'

		document.getElementById('option1').style.display = "block";
		document.getElementById('option2').style.display = "block";
		document.getElementById('option3').style.display = "block";

}
