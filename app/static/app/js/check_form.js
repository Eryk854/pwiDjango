var imieEl = document.getElementById('imie');
var nazwiskoEl = document.getElementById('nazwisko');
var miejscowoscEl = document.getElementById('miejscowosc');
var ulicaEl = document.getElementById('ulica');
var nrDomuEl = document.getElementById('nrDomu');
var nrTelefonuEl = document.getElementById('nrTelefonu');
var dataUrodzeniaEl = document.getElementById('dataUrodzenia');
var emailEl = document.getElementById('email');
var przycisk = document.getElementById('przycisk');

imieEl.addEventListener('blur',SprawdzImie,false);
nazwiskoEl.addEventListener('blur',SprawdzNazwisko,false);
miejscowoscEl.addEventListener('blur',SprawdzMiejscowosc,false);
ulicaEl.addEventListener('blur',SprawdzUlica,false);
nrDomuEl.addEventListener('blur',SprawdzNrDomu,false);
nrTelefonuEl.addEventListener('blur',SprawdzNrTelefonu,false);
dataUrodzeniaEl.addEventListener('blur',SprawdzUrodziny,false);
emailEl.addEventListener('blur',SprawdzEmail,false);
przycisk.addEventListener('click', SendForm, false);

function SprawdzImie(){
	const reg =new RegExp(/^([A-ZŁŚĆĄŻŹÓĆŃĘ]){1}([a-zążźśęćńół]){2,30}$/);
	var imie = imieEl.value;
	var flaga = true
	if(!imie.match(reg))
		flaga = false;

	if(flaga){
		imieEl.classList.remove('error');
		document.getElementById("imie_error").style.visibility="hidden";
		return true;
	}
	else{
		imieEl.classList.add('error');
		document.getElementById("imie_error").style.visibility="visible";
		document.getElementById("imie_error").innerHTML="Imię powinno mieć pierwszą literę dużą a resztę małe";
		return false;
	}
		
}

function SprawdzNazwisko (){
	const reg =new RegExp(/^([A-ZŁŚĆĄŻŹÓĆŃĘ]{1}[a-zążźśęćńół]{2,30}(\-|\ ){0,1}){1,3}$/);
	var nazwisko = nazwiskoEl.value;
	
	if(!nazwisko.match(reg)){
		nazwiskoEl.classList.add('error');
		document.getElementById("nazwisko_error").style.visibility="visible";
		document.getElementById("nazwisko_error").innerHTML="Nazwisko powinno zaczyna się wielką literą i składać się tylko z liter.";
		return false;
	}
	else{
		nazwiskoEl.classList.remove('error');
		document.getElementById("nazwisko_error").style.visibility="hidden";
		return true;
	}
		
}
function SprawdzMiejscowosc (){
	const reg =new RegExp(/^([A-ZŁŚĆĄŻŹÓĆŃĘ]{1}[a-zążźśęćńół]{1,20}(\-|\ ){0,1}){1,4}$/);
	var miejscowosc = miejscowoscEl.value;
	
	if(!miejscowosc.match(reg)){
		miejscowoscEl.classList.add('error');
		document.getElementById("miejscowosc_error").style.visibility="visible";
		document.getElementById("miejscowosc_error").innerHTML="Miejscowosc powinna się zaczynać wielką literą składać tylko z liter.";
		return false;
	}
	else{
		miejscowoscEl.classList.remove('error');
		document.getElementById("miejscowosc_error").style.visibility="hidden";
		return true;
	}
		
}

function SprawdzUlica (){
	const reg =new RegExp(/^([a-zA-Z1-9,\ .]){1,50}$/);
	var ulica = ulicaEl.value;
	
	if(!ulica.match(reg)){
		document.getElementById("ulica_error").style.visibility="visible";
		document.getElementById("ulica_error").innerHTML="Ulica składa się tylko z liter, cyfr lub z kilku znaków specjalnych (-.,). Maksymanie 50znaków.";
		ulicaEl.classList.add('error');
		return false;
	}
	else{
		ulicaEl.classList.remove('error');
		document.getElementById("ulica_error").style.visibility="hidden";
		return true;
	}
	
}

function SprawdzNrDomu (){
	const reg =new RegExp(/^(([0-9]{1,8}([A-Z]|[a-z]){1})|([0-9]{1,8}))$/);
	var nrDomu = nrDomuEl.value;
	
	if(!nrDomu.match(reg)){
		nrDomuEl.classList.add('error');
		document.getElementById("nr_domu_error").style.visibility="visible";
		document.getElementById("nr_domu_error").innerHTML="Numer domu powinien składa się tylko z cyfr i jednej litery lub samych cyfr";
		return false;
	}
	else{
		nrDomuEl.classList.remove('error');
		document.getElementById("nr_domu_error").style.visibility="hidden";
		return true;
	}
	
}
function SprawdzNrTelefonu (){
	const reg =new RegExp(/^[0-9]{9}$/);
	var nrTelefonu = nrTelefonuEl.value;
	if(!nrTelefonu.match(reg)){
		nrTelefonuEl.classList.add('error');
		document.getElementById("telefon_error").style.visibility="visible";
		document.getElementById("telefon_error").innerHTML="Nr telefonu powinien składać się z 9 cyfr";
		return false;
		
	}
	else{
		nrTelefonuEl.classList.remove('error');
		document.getElementById("telefon_error").style.visibility="hidden";
		return true;
	}
	
}
function SprawdzEmail (){
	const reg =new RegExp(/^([a-zA-Z1-9,.]){1,30}@([a-zA-Z1-9]){1,10}\.[a-zA-Z]{1,5}$/);
	var email = emailEl.value;
	
	if(!email.match(reg)){
		emailEl.classList.add('error');
		document.getElementById("email_error").style.visibility="visible";
		document.getElementById("email_error").innerHTML="Wprowadź poprawny adres email.";
		return false;
	}
	else{
		emailEl.classList.remove('error');
		document.getElementById("email_error").style.visibility="hidden";
		return true;
	}
		
}
function SprawdzUrodziny (){
	const reg =new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
	var dataUrodzenia = dataUrodzeniaEl.value;
	if(!dataUrodzenia.match(reg)){
		dataUrodzeniaEl.classList.add('error');
		document.getElementById("data_error").style.visibility="visible";
		document.getElementById("data_error").innerHTML="Data powinna być w formacie yyyy-mm-dd . Tylko cyfry";
		return false;
	}
	else{
		dataUrodzeniaEl.classList.remove('error');
		document.getElementById("data_error").style.visibility="hidden";
		return true;
	}
	
}


function SendForm(){
	
	result = SprawdzImie();
	result2 = SprawdzNazwisko();
	result3 = SprawdzMiejscowosc();
	result4 = SprawdzUlica();
	result5 = SprawdzNrDomu();
	result6 = SprawdzEmail();
	result7 = SprawdzUrodziny();
	
	if(result && result2 && result3 && result4 && result5 && result6 && result7){
		window.alert("Formularz wypełniony poprawnie!");
	}
	else{
		window.alert("Źle wypełniłeś formularz spróbuj ponownie!");
	}
	
}