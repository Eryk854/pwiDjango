window.addEventListener("load", gra)
var portrety = []
var elportrety = document.getElementsByClassName("karta");
var flaga = true; //Czy pierwsza karta
var index_pierwsza_karta = 0;
var pary=6;
var klucz=true;

function wylosuj(){
    pola=12;
    var wszyscy = ["arya", "cersei", "drogo", "jaime", "jon", "tywin"];

    var portrety = [];
    var zduplikowane = wszyscy.slice();

    for(var i=wszyscy.length; i<pola;i++)
        zduplikowane.push(wszyscy[i-wszyscy.length])

    z = zduplikowane.length
    for(var i = 0 ; i<zduplikowane.length ; i++)
        {
            var r = Math.floor(Math.random()*z);
            portrety[i]=zduplikowane[r]+".png";
            zduplikowane[r]=zduplikowane[z-1];
            z--;
        }
    return portrety
}


function gra(){
    portrety = wylosuj().slice()
    for(let i= 0; i<elportrety.length;i++)
            elportrety[i].addEventListener('click',OdslonKarte.bind(this,i), false);

    i=0
    console.log(portrety)
}

function OdslonKarte(nr)
{
console.log(nr)
    if(klucz)
    {
        var karta = document.getElementById("karta"+nr);
        var wartoscOpac = window.getComputedStyle(karta).getPropertyValue('opacity');
        if(flaga && wartoscOpac!=0)
        {
            index_pierwsza_karta = nr;
            flaga=false;

            var obrazek = "url(../static/app/images/"+portrety[nr]+")";
            console.log(obrazek);
            karta.style.backgroundImage=obrazek;
            karta.removeAttribute('class',"karta");
            karta.setAttribute('class',"kartaWlaczona");

            }
        else if(index_pierwsza_karta!=nr && wartoscOpac!=0)
        {
            klucz = false;
            var obrazek = "url(../static/app/images/"+portrety[nr]+")";

            karta.style.backgroundImage=obrazek;
            karta.removeAttribute('class',"karta");
            karta.setAttribute('class',"kartaWlaczona");
            if(portrety[index_pierwsza_karta]==portrety[nr])
            {
                setTimeout(function(){TrafioneKarty(index_pierwsza_karta, nr)},1000);
                pary--
                console.log("pary",pary)
                if(pary==0)
                    {
                        var elPlansza = document.getElementById("plansza")
                        elPlansza.innerHTML = " ";
                        elPlansza.innerHTML = "Wygrałeś grę <br/> <a href=''>Rozpocznij nową grę </a>";
                        elPlansza.setAttribute('class', 'wygrane')
                    }
            }
            else
            {
                setTimeout(function(){NieTrafioneKarty(index_pierwsza_karta, nr)},1000);
            }
            flaga=true;
        }
    }
}
function NieTrafioneKarty(nr1,nr2){
	var karta1 =  document.getElementById("karta"+nr1);
	var karta2 =  document.getElementById("karta"+nr2);
	var tron = "url(../static/app/images/tron"+".png)"


	karta1.removeAttribute('class',"kartaWlaczona");
	karta1.setAttribute('class',"karta");
	karta1.style.backgroundImage = tron;

	karta2.removeAttribute('class',"kartaWlaczona");
	karta2.setAttribute('class',"karta");
	karta2.style.backgroundImage = tron;

	index_pierwsza_karta = null;
	klucz=true;
}

function TrafioneKarty(nr1,nr2){
	var karta1 =  document.getElementById("karta"+nr1);
	var karta2 =  document.getElementById("karta"+nr2);

	karta1.style.opacity = 0;
	karta2.style.opacity = 0;

    karta2.setAttribute('class',"kartaWlaczona");
	index_pierwsza_karta = null;
	klucz=true;
}



