var leiho = window.innerWidth;
var panta = window.screen.width;
var aldak = 0;

if (leiho <= panta*0.9){
    console.log('CSSa > erdia.css');
    cssa('erdia.css');
    aldak = 1;
} else {
    console.log('CSSa > osoa.css');
    cssa('osoa.css');
    aldak = 1;
}

if(window.attachEvent) {
    window.attachEvent('onresize', function() {
        alert('attachEvent - resize');
    });
} else if(window.addEventListener) {
    window.addEventListener('resize', function() {
        console.log('addEventListener - resize');

        if (window.innerWidth <= panta*0.9){
            console.log('CSSa > erdia.css');
            cssa('erdia.css');
        } else {
            console.log('CSSa > osoa.css');
            cssa('osoa.css');
        }
    }, true);
}

function borrarTxt() {
  var x = document.getElementsByName("txtSearch");
  if(x[0].value == "Bilatu...") x[0].value = "";
}

function fueraFoc(){
  var x = document.getElementsByName("txtSearch");
  if(!x[0].value) x[0].value = "Bilatu...";
}

function buscarDDG(e) {
  var x = document.getElementsByName("txtSearch");
  var str = x[0].value
  var pala = str.split(" ");

  if (e.keyCode == 13) {
    var busk = "https://duckduckgo.com/?q=";

    for (var i=0; i<pala.length; i++){
      if (i == pala.length-1) {
        busk += pala[i];
      } else {
        busk += pala[i] + "+";
      }
    }

    window.location = busk;
    return true;
  }
}

function getFecha(){
  var fecha = new Date();
  var hila;
  switch (fecha.getMonth()) {
    case 0: hila="urtarrila";
      break;
    case 1: hila="otsaila";
      break;
    case 2: hila="martxoa";
      break;
    case 3: hila="apirila";
      break;
    case 4: hila="maiatza";
      break;
    case 5: hila="ekaina";
      break;
    case 6: hila="uztaila";
      break;
    case 7: hila="abuztua";
      break;
    case 8: hila="iraila";
      break;
    case 9: hila="urria";
      break;
    case 10: hila="azaroa";
      break;
    case 11: hila="abendua";
      break;
    default:
  }
  document.write(fecha.getFullYear() + "eko " + hila + "k " + fecha.getDate());
}

function cssa(artx) {
    var head = document.getElementsByTagName('HEAD')[0];

    if(aldak){
        var azkenCss = document.getElementById('nirezesese');
        azkenCss.remove();
    }

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/' + artx;
    link.id = 'nirezesese'

    head.appendChild(link);
}
