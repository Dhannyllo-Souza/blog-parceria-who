<script src="js/myscript.js"></script>
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
   navMenu.classList.toggle("nav-menu_visible");
});

const navChat = document.getElementById("all");
const chatFot = document.getElementById("fot");

function chatOpen() {
  if (navChat.className == "all-chat1");
    navChat.className = "all-chat2";
}
    navChat.className = "all-chat1";
    chatFot.src = "https://lh3.googleusercontent.com/FmASpNSNWKw1BINX9kYJIms_m00vbX3duuSSGSUdZfoMqGKrS1VXkqX3TjLeld0l9dbeyj6D8pH7wRtEEacoUSxt_FRgiJRlKkEm=w600";
    setTimeout(function(){
      chatFot.src = "http://24.media.tumblr.com/13c59c10b7d2cf727b80b62ad728652f/tumblr_mwz64cRGaZ1sx5gozo1_500.gif";
     },7000);



function openDoors() {
var doors = document.getElementById("doors");
var offAll = document.getElementById("tardisdoors");
offAll.src = "https://thumbs.gfycat.com/HelpfulTinyArkshell-size_restricted.gif";
setTimeout(function(){
          doors.className = "hidenDoors";
          setTimeout(function(){
            var offAll = document.querySelector(".hidenDoors");
              offAll.style.display = "none";
          }, 1500);
      }, 1500);
}


var titulo = document.getElementById("topo");

var vid = document.getElementById("vd");
var sm = document.getElementById("sumir"); 

function tvOn() {
  frameTv = document.getElementById("tvOn");
  frameTv.scrollTop += 40;
}



var nome = "Mundial Player";
var arqvd = "";

var onPlay = false;

var player = "normal";
var vide;
function playVide(){
  var vide = document.getElementById("player");
  if(player == "normal"){
   vide.play();
  }else if(player == "youtube"){
    titulo.innerHTML = nome; 
    vide.src = "https://www.youtube.com/embed/"+arqvd+"?controls=1&autoplay=1";
  }else if(player == "okru"){
    titulo.innerHTML = nome; 
    vide.src = "https://ok.ru/videoembed/"+arqvd+"?autoplay=1";
  }else if(player == "gdrive"){
    titulo.innerHTML = "<b class='pisc'>Falha na execução automática do vídeo.</b>";
        setTimeout(function(){
          titulo.innerHTML = nome;
        },7500);
  }else if(player == "facebook"){
    titulo.innerHTML = nome; 
    vide.src = "https://www.facebook.com/v2.3/plugins/video.php?&autoplay=true&href=https://www.facebook.com/redbull/videos/"+arqvd+"/&locale=pt_BR&sdk=joey";
  }
}
function pauseVide(){
   vide.pause();
}


function openPlayer(){
  var p = document.getElementById("allplayer");
  if (p.className == "allplayerOff"){
    p.className = "allplayerOn";
     onPlay = true;
  }else{
    playerReload();
    p.className = "allplayerOff";
    onPlay = false;
  }
}


function playerReload(){
  nome = "Mundial Player";
  titulo.innerHTML = nome;
  var x1 = `<p id="p">Este player integrado reproduz e incorpora links de download, youtube, google drive, MEGA, ok.ru, facebook e outos.</p><br>
<button onclick="siteLink('link');" class="opcs">Add Link</button>`;
  var x2 = `
    <button class='r1' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
setTimeout(function(){
    vid.innerHTML = x1;
    sm.innerHTML = x2;
    geral = document.getElementById("interPlay");
    geral.className = "interPlay";
   }, 500);  
}


function arq(){
 var show = document.getElementById("p");

show.innerHTML = "";
sm.innerHTML = "";
show.style.marginTop = "5%";
  setTimeout(function(){
   show.innerHTML = "Clique na opção abaixo e selecione em seus <b>arquivos</b> ou <b>galeria</b> o vídeo que deseja reproduzir.";
   sm.innerHTML = "<input id='arquivo' onchange='anexar(this)'  type='file' accept='*/*'><button class='r1' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
  },500);
} 


function anexar(select){ 
var sr = document.getElementById("x");

arqvd = select.value;
//alert(arqvd);
titlevd = arqvd.split('');
arqvdx = [];
vvv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ0123456789.-_()";
validos = vvv.split('');

var okt = 0;
naveg = 0;

for(var i = titlevd.length -1; i >= 0 && okt > -1; i--){
  arqvdx.unshift(titlevd[i]);
  okt = validos.indexOf(titlevd[i]);
  if (arqvdx.length < titlevd.length){
    naveg = 1;
  }else{
    naveg = 0;
  }
}
 
arqvd = "";


for(var f = naveg; f <= arqvdx.length-1; f++){
  arqvd += arqvdx[f];
} 

if(arqvd.indexOf(".mp4") > -1){
   namex = arqvd.split('.');
   nome = namex[0]; 
   titulo.innerHTML = nome; 
   vid.innerHTML = "<video preload='meta' controls='controls' id='player'><source src='"+arqvd+"' type='video/mp4'/>O seu navegador não suporta a tag de vídeo</video>";
   sm.innerHTML = ""; 
   sm.innerHTML = "<a id='local' class='a' title='download' href='"+arqvd+"' download='MD_video1.mp4' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='fullscreen mode' onclick='openFullscreen()'><i class='bi bi-arrows-fullscreen'></i></button>";
 setTimeout(function(){
   //sm.innerHTML = "";
   var x = document.getElementById("local");
   //alert(x.href);
   }, 5000);
   }else if(arqvd.indexOf("c:") > -1){
      alert("Erro: O navegador se recusa a informar o caminho exato até esse vídeo. Informe-o manualmente.");
   }else{
      alert("Arquivo inválido!"); 
   }
}



var notificar = false;
var quartaEpsx = ["<b style='font-size:1rem;color:#'>[4°T ☆ EP 00]: </b>A Viagem dos Condenados https://play.midiaflixhd.com/tv/57243/4/1/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>01</i>]: </b><b class='pisc'> <i class='risc'>Parceiros no Crime</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 01]: </b>Parceiros no Crime https://play.midiaflixhd.com/tv/57243/4/2/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>02</i>]: </b><b class='pisc'> <i class='risc'>Os Fogos de Pompeia</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 02]: </b>Os Fogos de Pompéia https://play.midiaflixhd.com/tv/57243/4/3/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>03</i>]: </b><b class='pisc'> <i class='risc'>Planeta dos Ood</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 03]: </b>Planeta dos Ood https://play.midiaflixhd.com/tv/57243/4/4/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>04</i>]: </b><b class='pisc'> <i class='risc'>O Estratagema Sontaran</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 04]: </b>O Estratagema Sontaran https://play.midiaflixhd.com/tv/57243/4/5/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>05</i>]: </b><b class='pisc'> <i class='risc'>O Céu Envenenado</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 05]: </b>O Céu Envenenado https://play.midiaflixhd.com/tv/57243/4/6/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>06</i>]: </b><b class='pisc'> <i class='risc'>A Filha do Doutor</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 06]: </b>A Filha do Doutor https://play.midiaflixhd.com/tv/57243/4/7/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>07</i>]: </b><b class='pisc'> <i class='risc'>O Unicórnio e a Vespa</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 07]: </b>O Unicórnio e a Vespa https://play.midiaflixhd.com/tv/57243/4/8/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>08</i>]: </b><b class='pisc'> <i class='risc'>Silêncio na Biblioteca</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 08]: </b>Silêncio na Biblioteca https://play.midiaflixhd.com/tv/57243/4/9/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>09</i>]: </b><b class='pisc'> <i class='risc'>Floresta dos Mortos</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 09]: </b>Floresta dos Mortos https://play.midiaflixhd.com/tv/57243/4/10/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>10</i>]: </b><b class='pisc'> <i class='risc'>Meia-Noite</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 10]: </b>Meia-Noite https://play.midiaflixhd.com/tv/57243/4/11/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>11</i>]: </b><b class='pisc'> <i class='risc'>Vire à Esquerda</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 11]: </b>Vire à Esquerda https://play.midiaflixhd.com/tv/57243/4/12/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>12</i>]: </b><b class='pisc'> <i class='risc'>A Terra Roubada</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 12]: </b>A Terra Roubada https://play.midiaflixhd.com/tv/57243/4/13/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>13</i>]: </b><b class='pisc'> <i class='risc'>O Fim da Jornada</i></b>"];
var epx = 0;

function siteLink(x){
  console.log(x);
  var s = x;
  arqvd = s;

  if(arqvd == "link"){
    var s = prompt("Cole seu link aqui");
  }
  
  arqvd = s;

  if(arqvd.indexOf("://") > -1){

    var u = arqvd;
    var v = u.split('\n');
    var d = u.split(' ');

    if(v.length > 1){
       var x = v.length-1;
       nome = v[0];
       arqvd = v[x];
       //alert(arqvd);
     }else if(d.length > 1){ 
       var x = d.length-1;
       arqvd = d[x];
       //alert(arqvd);
       nome = "";
       for(var i = 0; i <= x-1; i++) {
         nome += d[i]+" ";
       }

     }else{
       arqvd = u;
     }


     var yt1 = arqvd.indexOf("youtube.com/");
     var yt2 = arqvd.indexOf("youtu.be/");
     var yt3 = arqvd.indexOf("youtube.com/watch?v");

     var ytL1 = arqvd.indexOf("youtube.com/playlist?list=PL");

     var vm1 = arqvd.indexOf("https://vimeo.com/");

     var pp1 = arqvd.indexOf("https://kingricardo1");

     var fm1 = arqvd.indexOf("filmeseries.top/embed/");
     var fm2 = arqvd.indexOf("https://play.midiaflixhd.com/");
     var fm3 = arqvd.indexOf("https://servedk.xyz/");
     var fm4 = arqvd.indexOf("https://feurl.com/");
     var fm5 = arqvd.indexOf("https://mixdrop.to/");
     var fm6 = arqvd.indexOf("https://gofilmes.me/play/");
     //https://seriesgratis.site/eps.html?serie=assistir-two-and-a-half-man-dois-homens-e-meio


     var am1 = arqvd.indexOf("tudogostoso.blog/make/check/?list=");

     var gd1 = arqvd.indexOf("https://drive.google.com/open?id");
     var gd2 = arqvd.indexOf("https://drive.google.com/file/d");

     var mg1 = arqvd.indexOf("https://mega.nz/file/");

     var ru1 = arqvd.indexOf("ok.ru/videoembed/");
     var ru2 = arqvd.indexOf("ok.ru/video/");

     var mru1 = arqvd.indexOf("my.mail.ru/video/");

     var vk1 = arqvd.indexOf("vk.com/video_ext.php?");

     var fb1 = arqvd.indexOf("facebook.com/");


     var loadingx = true;



      if(yt1 > -1 && ytL1 == -1 || yt2 > -1 && ytL1 == -1){
        player = "youtube";
        var three = false;
        if(yt3 > -1){
          three = true;
          var codes = arqvd.split('youtube.com/watch?v');
          var codex = codes[1].split('=');
          arqvd = codex[1];
        }
        if(yt1 > -1 && three == false){
          var codes = arqvd.split('youtube.com/');
          var codex = codes[1].split('/');
          arqvd = codex[0];
        }
        if(yt2 > -1 && three == false){
          var codes = arqvd.split('youtu.be/');
          var codex = codes[1].split('/');
          arqvd = codex[0];
        }
        if(nome == "Mundial Player"){
          nome = "YouTube";
        }

        var pulo = "";
        var hunterP = nome.indexOf("Episódio");
        if(hunterP > -1){
          pulo = "&start=64";
        }
        var parametros = "?rel=0&controls=2&color=white&iv_load_policy=3&showinfo=0&modestbranding=1&hl=pt-BR"+pulo;

           titulo.innerHTML = nome; 

           if(nome.indexOf("hidden>") == -1){
           vid.innerHTML = "<iframe id='player' src='https://www.youtube-nocookie.com/embed/"+arqvd+parametros+"' allow='accelerometer; autoplay; gyroscope; picture-in-picture' frameborder='0' scrolling='no' sandbox='allow-scripts allow-same-origin' referrerpolicy='no-referrer' allowfullscreen></iframe>";
            }

           if(nome.indexOf("hidden>") > -1){
            vid.innerHTML = "<iframe id='player' src='https://riservato-xyz.frama.io/watch/?v="+arqvd+"' allow='accelerometer; autoplay; gyroscope; picture-in-picture' frameborder='0' scrolling='no' sandbox='allow-scripts allow-same-origin' referrerpolicy='no-referrer' allowfullscreen></iframe>";
           }
           //https://riservato-xyz.frama.io/watch/?v=
           sm.innerHTML = "";
           sm.innerHTML = `<a id='local' class='a' title='download' href='https://invidious.namazso.eu/watch?v="+arqvd+"&dark_mode=true&hl=pt-BR&iv_load_policy=3&quality=medium&related_videos=false&region=3166&controls=1&player_style=youtube' target='_blank'><i class='bi bi-download'></i></a><a href='https://youtu.be/`+arqvd+`' target='_blank' class='externo'><button class='comb'>Ver no Youtube</button></a><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(ytL1 > -1){
          player = "youtubePlaylist";
          if(ytL1 > -1){
            var codes = arqvd.split('youtube.com/playlist?list=PL');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Playlist do YouTube";
          }
           titulo.innerHTML = nome;
           var parametros = "&controls=3&color=white&iv_load_policy=3&showinfo=0&modestbranding=1&rel=0";

           vid.innerHTML = "<iframe id='player' src='http://www.youtube-nocookie.com/embed?listType=playlist&list=PL"+arqvd+parametros+"' frameborder='0' scrolling='no' allow='accelerometer; autoplay; gyroscope; picture-in-picture' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://invidious.namazso.eu/playlist?list=PL"+arqvd+"&dark_mode=true&hl=pt-BR&iv_load_policy=3&quality=medium&related_videos=false&region=3166&controls=1&player_style=youtube' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>"
        }else if(vm1 > -1){
          player = "vimeo1";
          if(vm1 > -1){
            var codes = arqvd.split('https://vimeo.com/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Vimeo";
          }
           titulo.innerHTML = nome; 
           vid.innerHTML = "<iframe id='player' src='https://player.vimeo.com/video/"+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://www.savethevideo.com/pt/vimeo-downloader?url=https://vimeo.com/"+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(fm1 > -1){
          player = "filmes1";
          if(fm1 > -1){
            var codes = arqvd.split('https://filmeseries.top/embed/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Filme";
          }
           titulo.innerHTML = nome; 
           vid.innerHTML = "<iframe id='player' src='https://filmeseries.top/embed/"+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(fm2 > -1){
          player = "midiaflixhd";
          if(fm2 > -1){
            var codes = arqvd.split('https://play.midiaflixhd.com/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }
          titulo.innerHTML = nome;
          if(notificar == true){
            titulo.innerHTML = quartaEpsx[epx+1];
            setTimeout(function(){
              titulo.innerHTML = nome;
              notificar = false;
            },7500);
          }
 

           vid.innerHTML = "<iframe id='player' class='externop' src='https://play.midiaflixhd.com/"+arqvd+"' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen=''  sandbox='allow-scripts allow-same-origin allow-forms' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";

           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a'><i class='bi bi-download'></i></a><a href='https://play.midiaflixhd.com/"+arqvd+"' target='_blank' class='externo'><button class='comb'>Abrir no Site</button></a><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(fm3 > -1){
          player = "midiaflixhd";
          if(fm3 > -1){
            var codes = arqvd.split('https://servedk.xyz/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }

          titulo.innerHTML = "<b class='pisc'>Basta clicar três vezes para o vídeo abrir.</b>";
          setTimeout(function(){
            titulo.innerHTML = nome;
          },7500); 
           vid.innerHTML = "<iframe id='player' src='https://servedk.xyz/"+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(fm4 > -1){
          player = "midiaflixhd";
          if(fm4 > -1){
            var codes = arqvd.split('https://feurl.com/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }
           titulo.innerHTML = nome;
           vid.innerHTML = "<iframe id='player' src='https://feurl.com/"+arqvd+"' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen='' sandbox='allow-scripts allow-same-origin allow-forms' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a'><i class='bi bi-download'></i></a><a href='https://feurl.com/"+arqvd+"' target='_blank' class='externo'><button class='comb'>Abrir no Site</button></a><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(fm5 > -1){
          player = "midiaflixhd";
          if(fm5 > -1){
            var codes = arqvd.split('https://mixdrop.to/e/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }
          titulo.innerHTML = "<b class='pisc'>Basta clicar três vezes para o vídeo abrir.</b>";
          setTimeout(function(){
            titulo.innerHTML = nome;
          },7500);
           vid.innerHTML = "<iframe id='player' src='https://mixdrop.to/e/"+arqvd+"' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen='' sandbox='allow-scripts allow-same-origin allow-forms' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://mixdrop.co/f/"+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(fm6 > -1){
          player = "midiaflixhd";
          if(fm6 > -1){
            var codes = arqvd.split('https://gofilmes.me/play/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }
            titulo.innerHTML = nome;
           vid.innerHTML = "<iframe id='player' class='gmplayer' src='https://gofilmes.me/play/"+arqvd+"' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen='' sandbox='allow-scripts allow-same-origin' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://mixdrop.co/f/"+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(am1 > -1){
          player = "tudogostoso";
          if(am1 > -1){
            var codes = arqvd.split('tudogostoso.blog/make/check/?list=');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Arquivo Externo";
          }
           titulo.innerHTML = nome; 
           vid.innerHTML = "<iframe id='player' src='https://tudogostoso.blog/make/check/?list="+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://tudogostoso.blog/make/check/?list="+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(gd1 > -1 || gd2 > -1){
          player = "gdrive";
          if(gd1 > -1){
            var codes = arqvd.split('https://drive.google.com/open?id');
            var codex = codes[1].split('=');
            arqvd = codex[1];
          }
          if(gd2 > -1){
            var codes = arqvd.split('https://drive.google.com/file/d');
            var codex = codes[1].split('/');
            arqvd = codex[1];
          }
          if(nome == "Mundial Player"){
            nome = "Arquivo Google Drive";
          }
           titulo.innerHTML = nome; 
           vid.innerHTML = "<iframe id='player' src='https://drive.google.com/file/d/"+arqvd+"/preview?foo=bar' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://drive.google.com/uc?export=download&id="+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(mg1 > -1){
          player = "mega";
          if(mg1 > -1){
            var codes = arqvd.split('https://mega.nz/file/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "MEGA";
          }
           titulo.innerHTML = nome; 
           vid.innerHTML = "<iframe id='player' src='https://mega.nz/embed/"+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://mega.nz/file/"+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(ru1 > -1 || ru2 > -1){
          if(ru1 > -1){ 
          var codes = arqvd.split('ok.ru/videoembed/');
          var codex = codes[1].split('/');
          arqvd = codex[0];
          }
          if(ru2 > -1){
            var codes = arqvd.split('ok.ru/video/');
            var codex = codes[1].split('/');
            arqvd = codex[0];
          }
          if(nome == "Mundial Player"){
            nome = "importado de: ok.ru/video";
          }
           titulo.innerHTML = nome; 
           player = "okru";
           vid.innerHTML = "<iframe id='player' src='https://ok.ru/videoembed/"+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allow='autoplay' allowfullscreen></iframe>";
           sm.innerHTML = "";
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://okvid.download/' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";

        }else if(mru1 > -1){
          player = "my.mail";
          if(mru1 > -1){
            var codes = arqvd.split('my.mail.ru/video/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Importado de my.mail.ru";
          }
           titulo.innerHTML = "<b class='pisc'>Caso fique com algo sobre o vídeo, clique em pause e depois em play.</b>";
            setTimeout(function(){
              titulo.innerHTML = nome;
            },8500); 
           vid.innerHTML = "<iframe id='player' src='https://my.mail.ru/video/"+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(vk1 > -1){
          player = "vk.com";
          if(vk1 > -1){
            var codes = arqvd.split('vk.com/video_ext.php?');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Importado de vk.com";
          }
           titulo.innerHTML = nome;
           
           vid.innerHTML = "<iframe id='player' src='https://vk.com/video_ext.php?"+arqvd+"' frameborder='0' sandbox='allow-same-origin allow-scripts' allow='accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(fb1 > -1){
          var arqvdOriginal = arqvd;
          var xfb = "facebook.com/";
          var fb2 = arqvd.indexOf("/videos/");
          var fb3 = arqvd.indexOf("/posts/");
          var fb4 = arqvd.indexOf("/permalink/");
          
          if(fb2 > -1){
            xfb = "/videos/";
          }
          if(fb3 > -1){
            xfb = "/posts/";
          }
          if(fb4 > -1){
            xfb = "/permalink/";
          }
          if(nome == "Mundial Player"){
            nome = "Facebook";
          }

          var codes = arqvd.split(xfb);
          var codex = codes[1].split('/');
          arqvd = codex[0];
          console.log(arqvd);

           titulo.innerHTML = nome; 
           player = "facebook";
           vid.innerHTML = "<iframe id='player' style='max-width: 390px; min-height: 285px' src='https://www.facebook.com/v2.3/plugins/video.php?&container_height=340&href=https://www.facebook.com/redbull/videos/"+arqvd+"/&locale=pt_BR&sdk=joey' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen='' sandbox='allow-scripts allow-same-origin allow-forms' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";
           sm.innerHTML = "";
           sm.innerHTML = `<a id='local' class='a' title='download' href='https://ssyoutube.com/pt/how-to-download-facebook-video' target='_blank'><i class='bi bi-download'></i></a><a href='`+arqvdOriginal+`/?app=fbl' target='_blank' class='externo'><button class='comb'>Ver no Facebook</button></a><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(pp1 > -1){
          loadingx = false;
          if(nome == "Mundial Player"){
            nome = "Sem Título";
          }
           player = "normal";
           titulo.innerHTML = nome; 
           vid.innerHTML = `
                <form class="video-container" action="" method="GET">
                    <!-- Chamar elemento vídeo com class jlplayer-video -->
                    <video id="player" poster="https://thumbs.gfycat.com/BleakPlayfulAlabamamapturtle-max-1mb.gif" preload="auto" class="jlplayer-video">
                        <source src="`+arqvd+`" type="video/mp4">
                        <!-- <track kind="captions" src="legenda.vtt" default> -->
                    </video>
                </form>
            `;

            playerExecute();

           //vid.innerHTML = "<video preload='auto' preload='meta' controls='controls' id='player'><source src='"+arqvd+"' type='video/mp4'/>O seu navegador não suporta a tag de vídeo</video>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='"+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else{
          if(nome == "Mundial Player"){
            nome = "Sem Título";
          }
           player = "normal";
           titulo.innerHTML = nome; 
           vid.innerHTML = "<video preload='meta' controls='controls' id='player' class='video'><source src='"+arqvd+"' type='video/mp4'/>O seu navegador não suporta a tag de vídeo</video>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='"+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }
       if(onPlay == false){
             openPlayer();
             onPlay = true;
         }

         if(loadingx == true){
           geral = document.getElementById("interPlay");
           geral.className = "interPlay";

           var vidFrame = document.getElementById("player");
           vidFrame.style.backgroundImage = "url(https://i.pinimg.com/originals/cf/ce/2f/cfce2fa4cc0ccdc49cf1482c355a50b8.gif)";
          setTimeout(function(){
            var vidFrame = document.getElementById("player");
            vidFrame.style.backgroundImage = "url()";
          }, 12500);
        }

        geral = document.getElementById("allWho");
        geral.scrollTop = 0;

    }else{
      alert("Link inválido!");
   }
}



function down() {
  setTimeout(function(){
     geral = document.getElementById("interPlay");
     //console.log(geral.scrollHeight);
     var x = geral.scrollHeight;
     var y = 100 * x;
     var descer = y / x;
     var porcentagem = x / descer;
     geral.scrollTop += porcentagem+65;
     //console.log(porcentagem+50);
     //geral.style.marginTop = 0;
  }, 200);
}




function sincronizar(){
  sm.innerHTML = "";
  setTimeout(function(){ 
  sm.innerHTML = "<button id='t'><b>Loading...</b></button><button onclick='stop();' class='r'>&#10003;</button><button onclick='back();' class='r'>&#10007;</button>";
  time(); 
  },500);
}

var countr = new Number();
var countr = 60;

var sincronia = "";

var mtt = 0;

function relogio(){
var sincron = document.getElementById("t");

 var data = new Date ();
 var horas = data.getHours();
 var minutos = data.getMinutes();
 var segundos = data.getSeconds();


   if(horas < 10){
    horas = "0"+horas;
    }
   if(minutos < 10){
    minutos = "0"+minutos;
   }
   if(segundos < 10){
   segundos = "0"+segundos;
   } 
 titulo.innerHTML="<b style='font-size:1rem;color:#c7c7c7'>Horário Local:</b> "+horas+"h "+minutos+":"+segundos;
 minutos++;
 var m = minutos;
 mtt = segundos;
 if(minutos < 10){
    minutos = "0"+minutos;
   }
 sincronia = horas+":"+minutos;
 sincron.innerHTML = "Play às <b>"+horas+"h e "+m+" minutos</b> ?";
}

var cron;
function time(){
  cron = setInterval("relogio()", 1000);
} 

function stop(){
  clearInterval(cron);
  countr = 60-mtt;
  titulo.innerHTML = "Start às "+sincronia+", aguarde..."; 
  starte(); 
}


function starte(){
var sincron = document.getElementById("t");

    if ((countr - 1) >= 0){
      countr -= 1;
      sincron.innerHTML = "Contagem: "+countr;
      if (countr == 0){
        countr = "";
        sincron.innerHTML = "Sincronizado";
        titulo.innerHTML = nome;
        playVide();
      setTimeout(function(){ 
          sm.innerHTML = "";
          sm.innerHTML = "<button style='float: none; border: none; color: #494fa7;' onclick='back();' class='r'><i class='bi bi-bullseye'></i></button>";
        },2000);
      }else if(countr < 10){
       countr = "0"+countr;
       sincron.innerHTML = "Contagem: "+countr;
      }
      //alert(t);
      setTimeout('starte();', 1000);
    }
  }

function back(){
clearInterval(cron); 
  titulo.innerHTML = nome; 
  sm.innerHTML = "";
 setTimeout(function(){
    if(player == "normal"){
      sm.innerHTML = "<a id='local' class='a' title='download' href='"+arqvd+"' download='MD_video1.mp4'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
    }else if(player == "youtube"){
      sm.innerHTML = "<a id='local' class='a' title='download' href='https://invidious.namazso.eu/watch?v="+arqvd+"&dark_mode=true&hl=pt-BR&iv_load_policy=3&quality=medium&related_videos=false&region=3166&controls=1&player_style=youtube' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
    }else if(player == "okru"){
      sm.innerHTML = "<a id='local' class='a' title='download' href='https://okvid.download/' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
    }else if(player == "gdrive"){
      sm.innerHTML = "<a id='local' class='a' title='download' href='https://drive.google.com/uc?export=download&id="+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
    }else if(player == "facebook"){
      sm.innerHTML = "<a id='local' class='a' title='download' href='https://ssyoutube.com/pt/how-to-download-facebook-video' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
    }
   }, 500);
}

function goplay(){
   sm.innerHTML = "";
  setTimeout(function(){ 
      sm.innerHTML = "<button style='float: none; border: none; color: #494fa7;' onclick='back();' class='r'><i class='bi bi-bullseye'></i></button>";
    },2000);
}



function notifica(x){
  epx = x;
  console.log(epx);
  notificar = true;
  if(epx == 0){
    alert("_____ OBSERVAÇÃO _____\nA numeração dos episódios neste domínio está com um pequeno erro para esta temporada. Apesar dele dizer que é o 1, o mesmo se trata do episódio zero: Viagem dos Condenados. (Por consequência, isto ocorrerá com todos os outros linkados à seguir).");
  }else if(epx == 1){
    epx++;
  }else{
    epx = epx*2;
  }
  console.log(epx);
  siteLink(quartaEpsx[epx]);
}

/**
 * JLPlayer - Reprodutor de vídeos
 * @author Jeterson Lordano  -  jetersonlordano.com.br
 */

function playerExecute(){

    "use strict";

    var totalJLPlayer, idElement;

    // Criar um novo player de vídeo
    function jlPlayer(jlPlayerID) {

        // Elementos do player
        var videoTarget, jlPlayerElem, jlPlayerVideo, jlPlayerLegends, jlPlayerLoader, jlPlayerControls, volTarget, rangeVol, sliderVol, sliderDrag, rangeSeeker, progressBuffer, progressVideo, currentTimeTooltip, trackCaption, activeCaption, cuesTrack, cuesText, activityMouseFull, activityMouseTime, systemTime, isTouch, elementFullScreen, played;

        // Ações da barra de controles
        var jlPlayerBtnPlay, jlPlayerProgress, jlPlayerTotalTime, jlPlayerBtnVol, jlPlayerSliderVol, jlPlayerBtnCC, jlPlayerBtnScreen, jlPlayerBtnPlayCenter;

        // Contents
        var svgIcos, icoVol, jlPlayerContent;

        isTouch = ('ontouchstart' in document.documentElement === true);
        sliderDrag = false;
        cuesText = '';
        activeCaption = 'disabled';
        activityMouseFull = false;
        played = false;

        // Icones em SVG dos botões
        svgIcos = {
            play: '<svg viewBox="0 0 12 18"><path d="M13.6,8.1L1.9,0.2C1.1-0.3,0,0.2,0,1.1v15.7c0,0.9,1.1,1.5,1.9,0.9l11.7-7.9C14.1,9.4,14.1,8.6,13.6,8.1L13.6,8.1z"/></svg>',
            pause: '<svg viewBox="0 0 18 18"><path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM12 1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"/></svg>',
            restart: '<svg viewBox="0 0 18 18"><path d="M9.7 1.2l.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7z"/></svg>',
            playc: '<svg viewBox="0 0 12 18"><path d="M13.6,8.1L1.9,0.2C1.1-0.3,0,0.2,0,1.1v15.7c0,0.9,1.1,1.5,1.9,0.9l11.7-7.9C14.1,9.4,14.1,8.6,13.6,8.1L13.6,8.1z"/></svg>',
            pausec: '<svg viewBox="0 0 18 18"><path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM12 1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"/></svg>',
            volhigh: '<svg viewBox="0 0 18 18"><path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"></path><path d="M11.282 5.282a.909.909 0 0 0 0 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 0 0 0 1.316c.145.145.636.262 1.018.156a.725.725 0 0 0 .298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 0 0-1.316 0zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></svg>',
            vollow: '<svg viewBox="0 0 18 18"></path><path d="M11.282 5.282a.909.909 0 0 0 0 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 0 0 0 1.316c.145.145.636.262 1.018.156a.725.725 0 0 0 .298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 0 0-1.316 0zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></svg>',
            volmute: '<svg viewBox="0 0 18 18"><path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"/></svg>',
            cc: '<svg viewBox="0 0 18 18"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fill-rule="evenodd"/></svg>',
            fullscreen: '<svg viewBox="0 0 18 18"><path d="M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z"/></svg>',
            restore: '<svg viewBox="0 0 18 18"><path d="M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z"/></svg>'
        };

        jlPlayerContent = `<div class="jlplayer-loader"><div class="jlplayer-loader-box"><div class="jlplayer-gif"><div class="jlplayer-spinner"><div class="jlplayer-bounce1"></div><div class="jlplayer-bounce2"></div><div class="jlplayer-bounce3"></div></div></div></div></div><button type="button" class="jlplayer-play-center"><svg viewBox="0 0 18 18"></svg></button><div class="jlplayer-legends"><span></span></div><div class="jlplayer-controls jlplayer-controls-show"><button type="button" class="jlplayer-play"><svg viewBox="0 0 18 18"></svg></button><div class="jlplayer-presentation"><input class="jlplayer-rangeprog" type="range" min="0" max="100" step="0.1" value="0"><div class="jlplayer-progress"><span class="jlplayer-pbuffer"></span><span class="jlplayer-pplayed"></span></div><span class="jlplayer-tooltip">00:00</span></div><span class="jlplayer-time"><b class="spinner"><i class="ball"></i></b></span><button type="button" class="jlplayer-vol"><svg viewBox="0 0 18 18"></svg></button><div class="jlplayer-volume"><input class="jlplayer-rangevol" type="range" min="0" max="1" value="1" step="0.01"><div class="jlplayer-progress"><span class="jlplayer-setvolume" style="width: 100%;"></span></div></div>
            
          <button type="button" class="jlplayer-vol"><span>1x</span></button>

        <button type="button" class="jlplayer-captions disabled"><svg viewBox="0 0 18 18"></svg></button><button type="button" class="jlplayer-screen"><svg viewBox="0 0 18 18"></svg></button></div>`;

        // Cria os elementos do player
        function construct() {
            console.log("CONTRUTOR ATIVADO");
            // Cria div container do player
            videoTarget = get(document, jlPlayerID);
            videoTarget.insertAdjacentHTML('afterend', '<div id="' + jlPlayerID + '"></div>');
            document.getElementById(jlPlayerID).remove();
            jlPlayerElem = get(document, jlPlayerID);
            //videoTarget.removeAttribute('id');
            videoTarget.id = "playerPrincipal";
            videoTarget.className = "playerPcp";
            videoTarget.removeAttribute('class');
            jlPlayerElem.appendChild(videoTarget);
            jlPlayerElem.setAttribute('class', 'jlplayer-video jlplayer-cursor-show jlplayer-fullscreen-off');
            jlPlayerElem.innerHTML += jlPlayerContent;

            /**
             * Elementos do player
             */

            // Elemento vídeo do player
            jlPlayerVideo = get(jlPlayerElem, 'video', 'tag');
            // Loader
            jlPlayerLoader = get(jlPlayerElem, 'jlplayer-loader', 'class');

            // Play Center
            jlPlayerBtnPlayCenter = get(jlPlayerElem, 'jlplayer-play-center', 'class');
            jlPlayerBtnPlayCenter.innerHTML = svgIcos.playc;

            // Lengenda
            jlPlayerLegends = get(jlPlayerElem, 'jlplayer-legends', 'class');

            // Controls
            jlPlayerControls = get(jlPlayerElem, 'jlplayer-controls', 'class');

            // Botão Play Pause e Restart
            jlPlayerBtnPlay = get(jlPlayerControls, 'jlplayer-play', 'class');
            jlPlayerBtnPlay.innerHTML = svgIcos.play;

            // Progress
            jlPlayerProgress = get(jlPlayerControls, 'jlplayer-presentation', 'class');

            // Range Seeker
            rangeSeeker = get(jlPlayerProgress, 'input', 'tag');

            // Buffer
            progressBuffer = get(jlPlayerProgress, 'jlplayer-pbuffer', 'class');

            // Tooltip progress
            currentTimeTooltip = get(jlPlayerProgress, 'jlplayer-tooltip', 'class');

            // Progress
            progressVideo = get(jlPlayerProgress, 'jlplayer-pplayed', 'class');

            // Time total
            jlPlayerTotalTime = get(jlPlayerControls, 'jlplayer-time', 'class');

            // Volume button
            jlPlayerBtnVol = get(jlPlayerControls, 'jlplayer-vol', 'class');
            jlPlayerBtnVol.innerHTML = svgIcos.volhigh;
            icoVol = 'volhigh';

            // Volume Controls
            jlPlayerSliderVol = get(jlPlayerControls, 'jlplayer-volume', 'class');

            // Range volume
            rangeVol = get(jlPlayerSliderVol, 'input', 'tag');

            // Slider Volume
            sliderVol = get(jlPlayerSliderVol, 'jlplayer-setvolume', 'class');

            // Caption button
            jlPlayerBtnCC = get(jlPlayerControls, 'jlplayer-captions', 'class');
            jlPlayerBtnCC.innerHTML = svgIcos.cc;
            handler(jlPlayerBtnCC, 'click', setTrack, !0);

            // Fullscreen button
            jlPlayerBtnScreen = get(jlPlayerControls, 'jlplayer-screen', 'class');
            jlPlayerBtnScreen.innerHTML = svgIcos.fullscreen;

            // Eventos de seeker
            handler(jlPlayerProgress, 'mousedown', startDrag, !0);
            handler(jlPlayerSliderVol, 'mousedown', startDrag, !0);

            // eventos de audio
            handler(jlPlayerBtnVol, 'click', muteVideo, !0);
            handler(jlPlayerSliderVol, 'mousedown click mousewheel touchstart touchmove touchend', setVolume, !0);

            // Eventos de tela
            handler(jlPlayerBtnScreen, 'click', expandPlayer, !0);

            // Eventos do document
            handler(document, 'mouseup', startDrag, !0);
            handler(document, 'webkitfullscreenchange mozfullscreenchange fullscreenchange', checkFullscren, !0);

            // Eventos do vídeo
            handler(jlPlayerVideo, 'canplay', canplay, !0);
            handler(jlPlayerVideo, 'timeupdate', updateTimer, !0);
            handler(jlPlayerVideo, 'waiting canplay playing play loadstart seeked', videoLoader, !0);
            handler(jlPlayerVideo, 'ended', restartVideo, !0);

            autoCorretor();

            // Dispara se ouver erro
            handler(jlPlayerVideo, 'error', videoError, !0);

            // Atividade do mouse
            handler(jlPlayerElem, 'mousemove', checkMouseActivity, !0);
            activityMouseFull = false;

            handler(jlPlayerVideo, 'progress', progressBuffering, !0);
        }

        // Verifica a atividade do mouse em fullscreen para esconder a barra de controles
        function checkMouseActivity(evt) {

            if (!activityMouseFull) {
                activityMouseFull = true;
                var e = jlPlayerElem.className;
                jlPlayerElem.className = e.replace("jlplayer-cursor-hidden", "jlplayer-cursor-show");
            }

            var d = new Date();
            activityMouseTime = d.getTime();
        }

        function progressBuffering() {

            var d = jlPlayerVideo.duration,
                c = jlPlayerVideo.currentTime,
                buffer = jlPlayerVideo.buffered,
                bufferW = 0;

            if (d > 0) {
                for (var i = 0; i < buffer.length; i++) {
                    if (buffer.start(buffer.length - 1 - i) < c) {
                        progressBuffer.style.width = (buffer.end(buffer.length - 1 - i) / d) * 100 + "%";
                        break;
                    }
                }
            }
        }

        // Atualiza o time, progress e o buffer do vídeo
        function updateTimer(evt) {

            //Duração total do video
            var h = Math.floor(jlPlayerVideo.currentTime / 3600),
                m = Math.floor(jlPlayerVideo.currentTime / 60),
                s = Math.floor(((jlPlayerVideo.currentTime / 60) % 1) * 60);

            // Usa o metodo convertTimer para setar a duração do vídeo
            jlPlayerTotalTime.textContent = convertTimer(h, m, s);


            var pctSeek = (jlPlayerVideo.currentTime / jlPlayerVideo.duration) * 100;

            if (!sliderDrag) {
                progressVideo.style.width = pctSeek + '%';
                rangeSeeker.value = pctSeek;
            }

            // Sistema de legenda
            if (trackCaption) {
                // Seta modo da legenda para 'hidden' quando for 'showing'
                if (trackCaption.mode == 'showing') {
                    trackCaption.mode = 'hidden';
                    activeCaption = 'hidden';
                }

                // Se a legenda estiver ativada chama metodo de controle de legenda
                if (trackCaption.mode != 'disabled') {
                    cuesControls();
                }

            }


            // Controle de atividade do mouse para esconder o menu
            var ms = new Date();
            if (activityMouseFull) {
                if (ms.getTime() > (activityMouseTime + 3000)) {
                    activityMouseFull = false;

                    var e = jlPlayerElem.className;
                    jlPlayerElem.className = e.replace("jlplayer-cursor-show", "jlplayer-cursor-hidden");
                }
            }
        }

        // Verifica o estado do Fullscreen para trocar do icone do botão e a class jlplayer-video-fullscreen 
        function checkFullscren() {
            var df = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

            var c = jlPlayerElem.className;

            if (!df) {
                jlPlayerElem.className = c.replace('jlplayer-fullscreen-on', 'jlplayer-fullscreen-off');
                jlPlayerBtnScreen.innerHTML = svgIcos.fullscreen;
            } else {
                jlPlayerElem.className = c.replace('jlplayer-fullscreen-off', 'jlplayer-fullscreen-on');
                jlPlayerBtnScreen.innerHTML = svgIcos.restore;
            }
        }

        // Ação de reiniciar o vídeo quando acabar
        function restartVideo(evt) {
            jlPlayerBtnPlay.innerHTML = svgIcos.restart;
            var e = jlPlayerElem.className;
            jlPlayerElem.className = e.replace("jlplayer-cursor-hidden", "jlplayer-cursor-show");
            jlPlayerBtnPlayCenter.innerHTML = svgIcos.playc;
            jlPlayerBtnPlayCenter.style.display = 'block';
        }

        // Faz a correção dos elementos obrigatórios
        function autoCorretor() {
            jlPlayerElem.setAttribute('oncontextmenu', 'return false');
            jlPlayerVideo.controls = false;
            //jlPlayerVideo.setAttribute('crossorigin', '');

            /*
            if (!jlPlayerVideo.getAttribute('preload')) {
                jlPlayerVideo.preload = 'none';
            }*/

            // Remove botão de legenda se não encontrar nenhuma track...
            if (!jlPlayerElem.getElementsByTagName('track')[0]) {
                jlPlayerBtnCC.remove();
            }

            if (jlPlayerVideo.preload == 'none') {
                // Eventos de player e pause
                handler(jlPlayerBtnPlay, 'click', playVideo, !0);
                handler(jlPlayerBtnPlayCenter, 'click', playVideo, !0);
                handler(jlPlayerVideo, 'click', playVideo, !0);
                if (isTouch) {
                    handler(jlPlayerVideo, 'click', playVideo, !1);
                }
            }
        }

        // Converte o tempo e retorna no formato de hh:mm:ss
        function convertTimer(hours, minutes, seconds) {
            hours = (hours < 10 && hours > 0 ? '0' + hours + ":" : '');
            minutes = ((minutes < 10) ? '0' + minutes : minutes);
            minutes = ((minutes > 59) ? (minutes - (Math.floor(minutes / 60) * 60)) : minutes);
            seconds = ((seconds < 10) ? '0' + seconds : seconds);
            return String(hours) + String(minutes) + ':' + String(seconds);
        }

        // Chamado quando ouve erro no vídeo
        function videoError() {
            jlPlayerTotalTime.textContent = '00:00';
            currentTimeTooltip.textContent = '00:00';
        }

        // Libera o arrastar dos inputs range
        function startDrag(evt) {
            if (evt.type == "mousedown") {
                sliderDrag = true;
                if (String(evt.target.className) === 'jlplayer-rangevol') {
                    handler(jlPlayerSliderVol, 'mousemove', setVolume, !0);
                }
            } else {
                sliderDrag = false;
                jlPlayerSliderVol.removeEventListener('mousemove', setVolume);
            }
        }

        // Controla o volume apartir do slider
        function setVolume(evt) {

            var value = rangeVol.value,
                clientX = 0,
                ClientRect = jlPlayerSliderVol.getBoundingClientRect(),
                position = 0,
                deltaWheel = Math.max(-1, Math.min(1, evt.wheelDelta));

            if (String(evt.type) !== 'touchend') {
                clientX = (String(evt.clientX) !== 'undefined' ? evt.clientX : evt.touches[0].clientX);
                clientX = (clientX - ClientRect.left) / rangeVol.clientWidth;
            }

            // Ações e eventos
            switch (evt.type) {

                case 'touchstart':
                    sliderVol.style.width = (clientX * 100) + '%';
                    break;

                case 'mousemove':
                    if (sliderDrag) {
                        updateVolume();
                    }
                    break;

                case 'mousewheel':
                    rangeVol.value -= (-0.1 * deltaWheel);
                    value = rangeVol.value;
                    updateVolume();

                    break;

                default:
                    updateVolume();
            }

            // Atualizar o sistema de volume
            function updateVolume() {
                if (jlPlayerVideo.muted) {
                    jlPlayerVideo.muted = false;
                }

                jlPlayerVideo.volume = value;
                sliderVol.style.width = (value * 100) + '%';

                volTarget = (jlPlayerVideo.volume > 0 ? jlPlayerVideo.volume : 1);
                if (jlPlayerVideo.volume > 0) {
                    if (jlPlayerVideo.volume >= 0.5) {
                        if (icoVol != 'volhigh') {
                            jlPlayerBtnVol.innerHTML = svgIcos.volhigh;
                            icoVol = 'volhigh';
                        }

                    } else {
                        if (icoVol != 'vollow') {
                            jlPlayerBtnVol.innerHTML = svgIcos.vollow;
                            icoVol = 'vollow';
                        }
                    }
                } else {
                    jlPlayerVideo.muted = true;
                    if (icoVol != 'volmute') {
                        jlPlayerBtnVol.innerHTML = svgIcos.volmute;
                        icoVol = 'volmute';
                    }
                }
            }
        }

        // Controla o seeker do vídeo apartir do slider
        function setSeeker(evt) {

            var clientX = (String(evt.clientX) !== 'undefined' ? evt.clientX : evt.touches[0].clientX);

            var ClientRect = jlPlayerProgress.getBoundingClientRect(),
                value = (clientX - ClientRect.left) / rangeSeeker.clientWidth,
                cH = Math.floor((value * jlPlayerVideo.duration) / 3600),
                cM = Math.floor((value * jlPlayerVideo.duration) / 60),
                cS = Math.floor((((value * jlPlayerVideo.duration) / 60) % 1) * 60);

            currentTimeTooltip.textContent = convertTimer(cH, cM, cS);
            currentTimeTooltip.style.left = (value * 100) + '%';

            switch (evt.type) {
                case 'mousemove':
                    if (sliderDrag) {
                        progressVideo.style.width = (value * 100) + '%';
                        updateSeeker();
                    }
                    break;
                case 'touchmove':
                    progressVideo.style.width = (value * 100) + '%';
                    updateSeeker();
                    break;
                default:
                    updateSeeker();
            }

            // Seta a nova posição do seeker
            function updateSeeker() {
                rangeSeeker.value = (value * 100);
                progressVideo.style.width = (value * 100) + '%';
                jlPlayerVideo.currentTime = (value * jlPlayerVideo.duration);
            }
        }

        // Controle do botão de volume
        function muteVideo() {
            if (!jlPlayerVideo.muted) {
                volTarget = (jlPlayerVideo.volume > 0 ? jlPlayerVideo.volume : 1);
                jlPlayerVideo.muted = true;
                jlPlayerVideo.volume = 0;
                jlPlayerBtnVol.innerHTML = svgIcos.volmute;
                icoVol = 'volmute';
                rangeVol.value = 0;
                sliderVol.style.width = 0;
            } else {
                jlPlayerVideo.muted = false;
                jlPlayerVideo.volume = volTarget;
                rangeVol.value = volTarget;
                sliderVol.style.width = (volTarget * 100) + '%';
                if (jlPlayerVideo.volume >= 0.5) {
                    jlPlayerBtnVol.innerHTML = svgIcos.volhigh;
                    icoVol = 'volhigh';
                } else {
                    jlPlayerBtnVol.innerHTML = svgIcos.vollow;
                    icoVol = 'vollow';
                }
            }
        }

        // Ações de play e pause do vídeo
        function playVideo(evt) {

            var e = String(evt.target.tagName);
            if (isTouch && e.toLowerCase() === 'video') {
                return false;
            }

            if (jlPlayerVideo.played.length != 0) {
                if (jlPlayerVideo.paused) {
                    played = true;
                    jlPlayerVideo.play();
                    jlPlayerBtnPlay.innerHTML = svgIcos.pause;
                    jlPlayerBtnPlayCenter.innerHTML = svgIcos.pausec;
                    if (!isTouch) {
                        jlPlayerBtnPlayCenter.style.display = 'none';
                    }
                } else {
                    played = false;
                    jlPlayerVideo.pause();
                    jlPlayerBtnPlay.innerHTML = svgIcos.play;
                    jlPlayerBtnPlayCenter.innerHTML = svgIcos.playc;
                    if (!isTouch) {
                        jlPlayerBtnPlayCenter.style.display = 'block';
                    }

                }
            } else {
                played = true;
                jlPlayerVideo.play();
                jlPlayerBtnPlay.innerHTML = svgIcos.pause;
                jlPlayerBtnPlayCenter.innerHTML = svgIcos.pausec;
                if (!isTouch) {
                    jlPlayerBtnPlayCenter.style.display = 'none';
                }
            }
        }

        // Chamado quando o vídeo pode ser reproduzido
        function canplay(evt) {

            played = true;

            //Duração total do video
            var h = Math.floor(jlPlayerVideo.duration / 3600),
                m = Math.floor(jlPlayerVideo.duration / 60),
                s = Math.floor(((jlPlayerVideo.duration / 60) % 1) * 60);

            // Usa o metodo convertTimer para setar a duração do vídeo
            jlPlayerTotalTime.textContent = convertTimer(h, m, s);

            // CurrentTime
            var cH = Math.floor(jlPlayerVideo.currentTime / 3600),
                cM = Math.floor(jlPlayerVideo.currentTime / 60),
                cS = Math.floor(((jlPlayerVideo.currentTime / 60) % 1) * 60);


            // Usa o metodo convertTimer para setar a o tempo de andamento do vídeo
            currentTimeTooltip.textContent = convertTimer(cH, cM, cS);

            // Eventos de seeker
            handler(jlPlayerProgress, 'mousedown mouseup mousemove touchstart touchmove', setSeeker, !0);

            // Faz a leitura do track da primeira legenda
            trackCaption = jlPlayerVideo.textTracks[0];

            // Verifica se existra track de legenda
            if (trackCaption) {
                trackCaption.mode = activeCaption;
            }


            // Eventos de player e pause
            handler(jlPlayerBtnPlay, 'click', playVideo, !0);
            handler(jlPlayerBtnPlayCenter, 'click', playVideo, !0);
            handler(jlPlayerVideo, 'click touchstart', playVideo, !0);

            // Remove evento click se existir touch
            if (isTouch) {
                handler(jlPlayerVideo, 'click', playVideo, !1);
            }

        }

        // e = Elemento - t = tipos de eventos separados por espaço - f = função chamada - c = capture - r = addEventListener ou removeEventListener
        function handler(e, t, f, r, c) {
            var s = t.split(" ");
            for (var i = 0; i < s.length; i++) {
                e[r ? "addEventListener" : "removeEventListener"](s[i], f, c);
            }
        }

        // getElementBy - e = elemento container - a = qual atributo - v = valor do atributo - i = indice
        function get(e, v, a, i) {
            i = !i ? 0 : i;
            switch (a) {
                case 'class':
                    return e["getElementsByClassName"](v)[i];
                    break;
                case 'tag':
                    return e["getElementsByTagName"](v)[i];
                    break;
                default:
                    return e["getElementById"](v);
            }
        }

        // Loader do player
        function videoLoader(evt) {
            if (played) {
                if (evt.type == 'waiting' || evt.type == 'loadstart') {
                    jlPlayerLoader.style.display = 'block';
                } else {
                    jlPlayerLoader.style.display = 'none';
                }
            }
        }

        // Sistema de fullscreen
        function expandPlayer() {

            var df, rf, ef;

            // fullscreenElement
            df = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

            // requestFullscreen
            rf = jlPlayerElem.requestFullscreen || jlPlayerElem.msRequestFullscreen || jlPlayerElem.mozRequestFullScreen || jlPlayerElem.webkitRequestFullscreen;

            //exitFullscreen
            ef = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;

            if (!df) {
                rf.call(jlPlayerElem);
            } else {
                ef.call(document);
            }
        }

        // Ativa e desativa a legenda
        function setTrack() {

            if (trackCaption) {
                if (trackCaption.mode == 'disabled') {
                    trackCaption.mode = 'hidden';
                    activeCaption = 'hidden';
                    jlPlayerBtnCC.className = 'jlplayer-captions';
                } else {
                    trackCaption.mode = 'disabled';
                    activeCaption = 'disabled';
                    jlPlayerBtnCC.className = 'jlplayer-captions disabled';
                    jlPlayerLegends.innerHTML = '<span></span>';
                }
            }
        }

        // Atualiza o texto da legenda quando disponivel
        function cuesControls() {
            console.log("CONSTRUT DEMO")

            cuesTrack = trackCaption.activeCues;

            if (cuesTrack) {
                if (cuesTrack.length > 0) {
                    if (cuesText !== cuesTrack[0].getCueAsHTML().textContent)
                        cuesText = cuesTrack[0].getCueAsHTML().textContent;
                    jlPlayerLegends.innerHTML = '<span>' + cuesText + '</span>';
                } else {
                    if (cuesText !== '') {
                        cuesText = '';
                        jlPlayerLegends.innerHTML = '<span></span>';
                    }
                }
            }
        }

        // Chama o metodo de construção
        construct();
    }

    totalJLPlayer = document.getElementsByClassName('jlplayer-video').length;
    if (totalJLPlayer > 0) {

        for (var i = 0; i < totalJLPlayer; i++) {
            idElement = 'jlplayer-' + Math.floor(Math.random() * 1000);
            document.getElementsByClassName('jlplayer-video')[i].id = idElement;
            new jlPlayer(idElement);
        }

    }



      var video = document.getElementById("playerPrincipal");

      video.addEventListener('loadedmetadata', function() {
          if (video.buffered.length === 0) return;
          const bufferedSeconds = video.buffered.end(0) - video.buffered.start(0);
          setTimeout(function(){
              document.getElementById('playerPrincipal').setAttribute('poster','https://s3.amazonaws.com/content.newsok.com/newsok/images/mobile/play_button.png');
              console.log("OK");
           }, 3500);
        });

      setTimeout(function(){
              document.getElementById('playerPrincipal').setAttribute('poster','https://s3.amazonaws.com/content.newsok.com/newsok/images/mobile/play_button.png');
              console.log("OK");
           }, 5500);
        }