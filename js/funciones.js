function borrarTxt() {
  var x = document.getElementsByName("txtSearch");
  if(x[0].value == "Search...") x[0].value = "";
}

function fueraFoc(){
  var x = document.getElementsByName("txtSearch");
  if(!x[0].value) x[0].value = "Search...";
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

function cargarHTML() {
  var body = document.body,
      html = document.documentElement;

  var width = Math.max( body.scrollWidth, body.offsetWidth,
                       html.clientWidth, html.scrollWidth, html.offsetWidth );

  if (width > 940) {
  } else {
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
  document.write(fecha.getFullYear() + "ko " + hila + "k " + fecha.getDate());
}
