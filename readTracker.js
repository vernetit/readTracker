console.log("puto el que lee")

var canvas = document.getElementById("my_canvas");
var c = canvas.getContext("2d");

 var abc1  =  {

  'a' : 'rgb(0,0,180)','A' : 'rgb(0,0,180)','á' : 'rgb(0,0,180)','Á' : 'rgb(0,0,180)','b' : 'rgb(175,13,102)','B' : 'rgb(175,13,102)','c' : 'rgb(146,248,70)','C' : 'rgb(146,248,70)','d' : 'rgb(255,200,47)','D' : 'rgb(255,200,47)','e' : 'rgb(255,118,0)','E' : 'rgb(255,118,0)','é' : 'rgb(255,118,0)','É' : 'rgb(255,118,0)','f' : 'rgb(255,152,213)','F' : 'rgb(255,152,213)','g' : 'rgb(235,235,222)','G' : 'rgb(235,235,222)','h' : 'rgb(100,100,100)','H' : 'rgb(100,100,100)','i' : 'rgb(255,255,0)','I' : 'rgb(255,255,0)','í' : 'rgb(255,255,0)','Í' : 'rgb(255,255,0)','j' : 'rgb(255,255,150)','J' : 'rgb(255,255,150)','k' : 'rgb(55,19,112) ','K' : 'rgb(55,19,112) ','l' : 'rgb(202,62,94)','L' : 'rgb(202,62,94)','m' : 'rgb(205,145,63)','M' : 'rgb(205,145,63)','n' : 'rgb(12,75,100)','N' : 'rgb(12,75,100)','ñ' : 'rgb(12,75,100)','ñ' : 'rgb(12,75,100)','o' : 'rgb(255,0,0)','O' : 'rgb(255,0,0)','ó' : 'rgb(255,0,0)','Ó' : 'rgb(255,0,0)','p' : 'rgb(175,155,50)','P' : 'rgb(175,155,50)','q' : 'rgb(185,185,185)','Q' : 'rgb(185,185,185)','r' : 'rgb(37,70,25)','R' : 'rgb(37,70,25)','s' : 'rgb(121,33,135)','S' : 'rgb(121,33,135)','t' : 'rgb(83,140,208)','T' : 'rgb(83,140,208)','u' : 'rgb(0,154,37)','U' : 'rgb(0,154,37)','ú' : 'rgb(0,154,37)','Ú' : 'rgb(0,154,37)','v' : 'rgb(178,220,205)','V' : 'rgb(178,220,205)','w' : 'rgb(169,34,0)','W' : 'rgb(169,34,0)','x' : 'rgb(0,0,74)','X' : 'rgb(0,0,74)','y' : 'rgb(175,200,74)','Y' : 'rgb(175,200,74)','z' : 'rgb(63,25,12)','Z' : 'rgb(63,25,12)','0' : 'rgb(0,0,180)','0' : 'rgb(0,0,180)','1' : 'rgb(175,13,102)','1' : 'rgb(175,13,102)','2' : 'rgb(146,248,70)','2' : 'rgb(146,248,70)','3' : 'rgb(255,200,47)','3' : 'rgb(255,200,47)','4' : 'rgb(255,118,0)','4' : 'rgb(255,118,0)','5' : 'rgb(255,152,213)','5' : 'rgb(255,152,213)','6' : 'rgb(235,235,222)','6' : 'rgb(235,235,222)','7' : 'rgb(100,100,100)','7' : 'rgb(100,100,100)','8' : 'rgb(255,255,0)','8' : 'rgb(255,255,0)','9' : 'rgb(255,255,150)','9' : 'rgb(255,255,150)'

  };

myAbc="abcdefghijklmnopqrstuvwxyz"; //mitad 2 comienza en i (12)

console.log(myAbc.length)
myAbcArray=myAbc.split("");

_p=`<center><!--<table border="1" onclick="/*$('#result').show();*/"><tr>`

nums=[];
cantidadNumeros=4;
cantidadNumerosTotal=cantidadNumeros*2;

debug=0;


for(i=0;i<cantidadNumerosTotal;i++){ nums[i]=_.random(1,9); }


if(cantidadNumeros==4){ masXY=3;  numA=parseInt(nums[3]+""+nums[2]+""+nums[1]+""+nums[0]); numB=parseInt(nums[7]+""+nums[6]+""+nums[5]+""+nums[4]); } 
if(cantidadNumeros==5){ masXY=2;  numA=parseInt(nums[4]+""+nums[3]+""+nums[2]+""+nums[1]+""+nums[0]); numB=parseInt(nums[9]+""+nums[8]+""+nums[7]+""+nums[6]+""+nums[5]); } 
if(cantidadNumeros==6){ masXY=1;  numA=parseInt(nums[5]+""+nums[4]+""+nums[3]+""+nums[2]+""+nums[1]+""+nums[0]); numB=parseInt(nums[11]+""+nums[10]+""+nums[9]+""+nums[8]+""+nums[7]+""+nums[6]); } 
if(cantidadNumeros==7){ masXY=0;  numA=parseInt(nums[6]+""+nums[5]+""+nums[4]+""+nums[3]+""+nums[2]+""+nums[1]+""+nums[0]); numB=parseInt(nums[5]+""+nums[12]+""+nums[11]+""+nums[10]+""+nums[9]+""+nums[8]+""+nums[7]); }  
if(cantidadNumeros==8){ masXY=-1;  numA=parseInt(nums[7]+""+nums[6]+""+nums[5]+""+nums[4]+""+nums[3]+""+nums[2]+""+nums[1]+""+nums[0]); numB=parseInt(nums[15]+""+nums[14]+""+nums[13]+""+nums[12]+""+nums[11]+""+nums[10]+""+nums[9]+""+nums[8]); } 

result=numA*numB;

// // if(masXY<0){
//   x=cantidadNumeros+masXY-(masXY<0?0:1); y=cantidadNumeros+masXY-(masXY<0?0:1);
//   for(i=0;i<cantidadNumeros;i++){ _p+=`<td class="myTd" style="color: ${abc1[myAbcArray[y]]}; background-color: ${abc1[myAbcArray[y]]}; width: 40px;  height: 40px;"> <center> ${nums[x]} </center>  </td> `;  x--; y--; }
//   _p+=`</tr>`;
//   x=cantidadNumerosTotal+masXY-(masXY<0?0:1); y=14-cantidadNumeros+masXY-(masXY<0?0:1);
//   for(i=0;i<cantidadNumeros;i++){ _p+=`<td class="myTd" style="color: ${abc1[myAbcArray[y]]}; background-color: ${abc1[myAbcArray[y]]}; width: 40px;  height: 40px;"> <center> ${nums[x]} </center>  </td> `; nums[x]; x--; y--; }

// }else{
  x=cantidadNumeros-1; y=cantidadNumeros-1;
  for(i=0;i<cantidadNumeros;i++){ _p+=`<td class="myTd" style="color: ${abc1[myAbcArray[y]]}; background-color: ${abc1[myAbcArray[y]]}; width: 40px;  height: 40px;"> <center> ${nums[x]} </center> </td> `;  x--; y--; }
  _p+=`</tr>`;
  x=cantidadNumerosTotal-1; y=cantidadNumerosTotal+masXY;
  for(i=0;i<cantidadNumeros;i++){ _p+=`<td class="myTd" style="color: ${abc1[myAbcArray[y]]}; background-color: ${abc1[myAbcArray[y]]}; width: 40px;  height: 40px;"> <center> ${nums[x]} </center>  </td> `; nums[x]; x--; y--; }

// }

_p+=`

  </tr></table> -->
  <div id="helpDiv" style="width: 50%;">
  
  <div id="output1" style="/*background-color:rgb(174,183,175)*/"><span style=" font-size: 30px;  color: transparent"><b> </b></span><span style=" font-size: 30px;  color: transparent"><b>&nbsp;</b></span><span style=" font-size: 30px;  color: transparent"><b>&nbsp;</b></span><span style=" font-size: 30px;  color: transparent"><b>&nbsp;</b></span><span style=" font-size: 30px;  color: rgb(0,0,180)"><b>A</b></span><span style=" font-size: 30px;  color: rgb(0,0,180)"><b>á</b></span><span style=" font-size: 30px;  color: rgb(175,13,102)"><b>B</b></span><span style=" font-size: 30px;  color: rgb(146,248,70)"><b>C</b></span><span style=" font-size: 30px;  color: rgb(255,200,47)"><b>D</b></span><span style=" font-size: 30px;  color: rgb(255,118,0)"><b>E</b></span><span style=" font-size: 30px;  color: rgb(255,118,0)"><b>é</b></span><span style=" font-size: 30px;  color: rgb(255,152,213)"><b>F</b></span><span style=" font-size: 30px;  color: rgb(235,235,222)"><b>G</b></span><span style=" font-size: 30px;  color: rgb(100,100,100)"><b>H</b></span><span style=" font-size: 30px;  color: rgb(255,255,0)"><b>I</b></span><span style=" font-size: 30px;  color: rgb(255,255,0)"><b>í</b></span><span style=" font-size: 30px;  color: rgb(255,255,150)"><b>J</b></span><span style=" font-size: 30px;  color: rgb(55,19,112) "><b>K</b></span><span style=" font-size: 30px;  color: rgb(202,62,94)"><b>L</b></span><span style=" font-size: 30px;  color: rgb(205,145,63)"><b>M</b></span><span style=" font-size: 30px;  color: rgb(12,75,100)"><b>N</b></span><span style=" font-size: 30px;  color: rgb(12,75,100)"><b>ñ</b></span><span style=" font-size: 30px;  color: rgb(255,0,0)"><b>O</b></span><span style=" font-size: 30px;  color: rgb(255,0,0)"><b>ó</b></span><span style=" font-size: 30px;  color: rgb(175,155,50)"><b>P</b></span><span style=" font-size: 30px;  color: rgb(185,185,185)"><b>Q</b></span><span style=" font-size: 30px;  color: rgb(37,70,25)"><b>R</b></span><span style=" font-size: 30px;  color: rgb(121,33,135)"><b>S</b></span><span style=" font-size: 30px;  color: rgb(83,140,208)"><b>T</b></span><span style=" font-size: 30px;  color: rgb(0,154,37)"><b>U</b></span><span style=" font-size: 30px;  color: rgb(0,154,37)"><b>ú</b></span><span style=" font-size: 30px;  color: rgb(178,220,205)"><b>V</b></span><span style=" font-size: 30px;  color: rgb(169,34,0)"><b>W</b></span><span style=" font-size: 30px;  color: rgb(0,0,74)"><b>X</b></span><span style=" font-size: 30px;  color: rgb(175,200,74)"><b>Y</b></span><span style=" font-size: 30px;  color: rgb(63,25,12)"><b>Z</b></span><span style=" font-size: 30px;  color: rgb(0,0,180)"><b>0</b></span><span style=" font-size: 30px;  color: rgb(175,13,102)"><b>1</b></span><span style=" font-size: 30px;  color: rgb(146,248,70)"><b>2</b></span><span style=" font-size: 30px;  color: rgb(255,200,47)"><b>3</b></span><span style=" font-size: 30px;  color: rgb(255,118,0)"><b>4</b></span><span style=" font-size: 30px;  color: rgb(255,152,213)"><b>5</b></span><span style=" font-size: 30px;  color: rgb(235,235,222)"><b>6</b></span><span style=" font-size: 30px;  color: rgb(100,100,100)"><b>7</b></span><span style=" font-size: 30px;  color: rgb(255,255,0)"><b>8</b></span><span style=" font-size: 30px;  color: rgb(255,255,150)"><b>9</b></span><span style=" font-size: 30px;  color: transparent"><b>
    </b></span><span style=" font-size: 30px;  color: transparent"><b>  </b></span></div>
  </div>

  <!--
  <br> <input type="text" value="" id="myInput" style="width:200px; text-align:right;unicode-bidi:bidi-override; direction:rtl;"> 
  <input type="button" value="show table nums" onclick="$('.myTd').css('color','black');">
  <input type="button" value="show result" onclick="$('#result').show();">
  <input type="button" value="New Game" onclick="newGame();">
  <select id="mySelect" onchange="actualizaNumeros();">
    <option value="4" selected>4 digits</option>
    <option value="5">5 digits</option>
    <option value="6">6 digits</option>
    <option value="7">7 digits</option>
    <option value="8">8 digits</option>
  </select>
  <input type="button" value="Hide table" onclick="$('table').hide();">
  <br> <span id="result" style="display:none;">${result}</span>
  
  -->
  <br>
  <textarea id="input1" rows="4" cols="100" style="font-family: monospace; background-color: rgb(174,183,175);">Para Sherlock Holmes ella es siempre la mujer. Rara vez he oído que la mencione por otro nombre. A sus ojos, ella eclipsa al resto del sexo débil. No es que haya sentido por Irene Adler una emoción que pueda compararse al amor. Todas las emociones, y ésa particularmente, son opuestas a su mente fría, precisa, pero admirablemente equilibrada. Es, puedo asegurarlo, la máquina de observación y razonamiento más perfecta que el mundo ha visto; pero como amante, como enamorado, Sherlock Holmes había estado en una posición completamente falsa. Jamás hablaba de las pasiones, aun de las más suaves, sin un dejo de burla y desprecio. Eran cosas admirables para el observador... excelentes para recorrer el velo de los motivos y acciones de los hombres. Pero para el razonador preparado, admitir tales intromisiones en su propio temperamento, cuidadosamente ajustado, era introducir un factor que distraería y descompensaría todos los delicados resultados mentales. Una basura en un instrumento sensitivo o una grieta en un lente finísimo, no habría sido más perjudicial que una emoción intensa en una naturaleza como la suya. Y, sin embargo, para él no hubo más que una mujer, y esa mujer fue la difunta Irene Adler, de dudosa y turbia memoria.
Había visto poco a Holmes últimamente. Mi matrimonio nos había alejado. Mi propia felicidad y los intereses domésticos que surgén alrededor del hombre que se encuentra por primera vez convertido en amo y señor de su casa, eran suficientes para absorber toda mi atención; mientras que Holmes, que odiaba cualquier forma de sociedad con toda su alma de bohemio, permaneció en nuestras habitaciones de Baker Street, sumergido entre sus viejos libros y alternando, de semana en semana, entre la cocaína con la ambición, la somnolencia de la droga con la feroz energía de su propia naturaleza inquieta. Continuaba, como siempre, profundamente interesado en el estudio del crimen y ocupando sus inmensas facultades y sus extraordinarios poderes de observación en seguir las pistas y aclarar los misterios que habían sido abandonados por la policía oficial, como casos desesperados. De vez en cuando escuchaba algún vago relato de sus hazañas: su intervención en el caso del asesinato Trepoff, en Odessa; su solución en la singular tragedia de los hermanos Atkinson, en Trincomalee, y, finalmente, en la misión que había realizado, con tanto éxito, para la familia reinante de Holanda. Sin embargo, más allá de estas muestras de actividad, que me concretaba a compartir con todos los lectores de la prensa diaria, sabía muy poco de mi antiguo amigo y compañero.
Una noche -fue el 20 de marzo de 1888- volvía de visitar a un paciente (había vuelto al ejercicio de mi profesión como médico civil), cuando mi recorrido de regreso a casa me obligó a pasar por Baker Street. Al pasar por aquella puerta tan familiar para mí, que siempre estará asociada en mi mente a la época de mi noviazgo y a los oscuros incidentes del Estudio en escarlata, me sentí invadido por un intenso deseo de ver a Holmes y de saber cómo estaba empleando, ahora, sus extraordinarias facultades. Sus habitaciones estaban brillantemente iluminadas. Al levantar la mirada hacia ellas, noté su figura alta y esbelta pasar dos veces, convertida en negra silueta, cerca de la cortina. Estaba recorriendo la habitación rápida, ansiosamente, con la cabeza sumida en el pecho y las manos unidas a la espalda. Para mí, que conocía a fondo cada uno de sus hábitos y de sus estados de ánimo, su actitud y su comportamiento eran reveladores. Estaba trabajando de nuevo. Se había sacudido de sus ensueños toxicómanos y estaba sobre la pista candente de algún nuevo caso. Toqué la campanilla y fui conducido a la sala que por tanto tiempo compartí con Sherlock.
No fue muy efusivo. Rara vez lo era; pero creo que se alegró de verme. Casi sin decir palabra, aunque con los ojos brillándole bondadosamente, me indicó un sillón, me arrojó su cajetilla de cigarrillos y señaló hacia una botella de whisky y un sifón que había encima de una cómoda. Entonces se puso de pie frente al fuego y me miró con el detenimiento tan peculiar de él.
</textarea>
  <br>
  <input type="button" value="load" onclick="loadText();">
  <input type="button" value="clearTxt" onclick="$('#input1').val('')">
  <select id="tamano" onchange="loadText();">
    <option value="3">3</option>
    <option value="4" selected>4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
  </select>&nbsp; words
  <span style="font-size:15px;"> | Key: N: next words P: previous words | robertchalean@gmail.com </span>
  </center>



`;

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}



$("#screen").html(_p)

$("#myInput").focus();
$("#mySelect").val(cantidadNumeros);
if(debug) $('.myTd').css('color','black');


 if(findGetParameter("en")==1){

 

textoEn = `To Sherlock Holmes she is always THE woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer--excellent for drawing the veil from mens motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory.
I had seen little of Holmes lately. My marriage had drifted us away from each other. My own complete happiness, and the home-centred interests which rise up around the man who first finds himself master of his own establishment, were sufficient to absorb all my attention, while Holmes, who loathed every form of society with his whole Bohemian soul, remained in our lodgings in Baker Street, buried among his old books, and alternating from week to week between cocaine and ambition, the drowsiness of the drug, and the fierce energy of his own keen nature. He was still, as ever, deeply attracted by the study of crime, and occupied his immense faculties and extraordinary powers of observation in following out those clues, and clearing up those mysteries which had been abandoned as hopeless by the official police. From time to time I heard some vague account of his doings: of his summons to Odessa in the case of the Trepoff murder, of his clearing up of the singular tragedy of the Atkinson brothers at Trincomalee, and finally of the mission which he had accomplished so delicately and successfully for the reigning family of Holland.
Beyond these signs of his activity, however, which I merely shared with all the readers of the daily press, I knew little of my former friend and companion.
One night--it was on the twentieth of March, 1888--I was returning from a journey to a patient (for I had now returned to civil practice), when my way led me through Baker Street. As I passed the
well-remembered door, which must always be associated in my mind with my wooing, and with the dark incidents of the Study in Scarlet, I was seized with a keen desire to see Holmes again, and to
know how he was employing his extraordinary powers.
His rooms were brilliantly lit, and, even as I looked up, I saw his tall, spare figure pass twice in a dark silhouette against the blind. He was pacing the room swiftly, eagerly, with his head sunk
upon his chest and his hands clasped behind him. To me, who knew his every mood and habit, his attitude and manner told their own story. He was at work again. He had risen out of his drug-created
dreams and was hot upon the scent of some new problem. I rang the bell and was shown up to the chamber which had formerly been in part my own.
His manner was not effusive. It seldom was; but he was glad, I think, to see me. With hardly a word spoken, but with a kindly eye, he waved me to an armchair, threw across his case of cigars, and
indicated a spirit case and a gasogene in the corner. Then he stood before the fire and looked me over in his singular introspective fashion.
`;
$("#input1").val(textoEn);
}



function goNextPhrase(){
    for( i=0;i<tamano;i++){
        //console.log(e.which)

        if(myIndex>=cantidad){
          circles[i].number=".";
          
        }else{
          circles[i].number=arrPalabra[myIndex];
        }
       
        
        

        //circles[i]={};

        // circles[i].x=100;
        // circles[i].y=100;
        // circles[i].r=18;
        // circles[i].vx=8;
        // circles[i].vy=10;

        
        circles[i].color=abc1[myAbcArray[i]];

        // if(y==0){ x=cantidadNumerosTotal/*-(masXY<0?0:1)*/; y=cantidadNumerosTotal+1+masXY/*-(masXY<0?0:1)*/; } 
        // // if(y==0){ y=15-cantidadNumeros+masXY-(masXY<0?0:1); x=cantidadNumerosTotal+1+masXY-(masXY<0?0:1); } 
        // y--; x--;

        myIndex++;

      }

      noMover=1;
      start();


}



$(window).keypress(function(e) {
  
    console.log(e.keyCode);
    /*
    if(e.keyCode == 32){
      event.preventDefault();

      if(estado==0){ start(); }
      if(estado==1){ answer(); } 
       
    }

    if(e.keyCode == 78){
      vMin=parseFloat($("#vMin").val());
      vMax=parseFloat($("#vMax").val());

      vMin+=0.25;
      vMax+=0.25;

      $("#vMin").val(vMin);
      $("#vMax").val(vMax);


      start();


    }
     if(e.keyCode == 80){
      vMin=parseFloat($("#vMin").val());
      vMax=parseFloat($("#vMax").val());

      vMin-=0.25;
      vMax-=0.25;

      $("#vMin").val(vMin);
      $("#vMax").val(vMax);

      start();

    }*/
     if (e.keyCode == 120) { //next
       
     
      

      for( i=0;i<tamano;i++){
        //console.log(e.which)

        if(myIndex>=cantidad){
          circles[i].number=".";
          
        }else{
          circles[i].number=arrPalabra[myIndex];
        }
       
        
        

        //circles[i]={};

        // circles[i].x=100;
        // circles[i].y=100;
        // circles[i].r=18;
        // circles[i].vx=8;
        // circles[i].vy=10;

        
        circles[i].color=abc1[myAbcArray[i]];

        // if(y==0){ x=cantidadNumerosTotal/*-(masXY<0?0:1)*/; y=cantidadNumerosTotal+1+masXY/*-(masXY<0?0:1)*/; } 
        // // if(y==0){ y=15-cantidadNumeros+masXY-(masXY<0?0:1); x=cantidadNumerosTotal+1+masXY-(masXY<0?0:1); } 
        // y--; x--;

        myIndex++;


        
        
      }

    

    }
    if (e.keyCode == 122) { //prev
        myIndex-=tamano;

       for(let i=0;i<tamano;i++){
        myIndex++;
        
        //circles[i]={};

        // circles[i].x=100;
        // circles[i].y=100;
        // circles[i].r=18;
        // circles[i].vx=8;
        // circles[i].vy=10;

        circles[i].number=arrPalabra[myIndex];
        circles[i].color=abc1[myAbcArray[i]];

        // if(y==0){ x=cantidadNumerosTotal/*-(masXY<0?0:1)*/; y=cantidadNumerosTotal+1+masXY/*-(masXY<0?0:1)*/; } 
        // // if(y==0){ y=15-cantidadNumeros+masXY-(masXY<0?0:1); x=cantidadNumerosTotal+1+masXY-(masXY<0?0:1); } 
        // y--; x--;

        
        
      }
    }
    noMover=1;
    start();
});


var myIndex=0;
var arrPalabra=[], cantidad=0, tamano; noMover=0;

function loadText(){
  
  noMover=0;
  myIndex=0; 
  txt = $("#input1").val()+" ";
  str = txt;

  limpia = str.split("\n").join(". ");
  //limpia = limpia.split("\t").join(". ");
  //limpia = limpia.split("\r").join(". ");
  //limpia = limpia.split(",").join(". ");
  //limpia = limpia.split(".").join(". ");
  //limpia = limpia.split(")").join(". ");
  //limpia = limpia.split("?").join(". ");
  //limpia = limpia.split(";").join(". ");
  //limpia = limpia.split("-").join(". ");
  //limpia = limpia.split(". . .").join(". ");
  //limpia = limpia.split(". . ").join(". ");
  limpia = limpia.split(". .").join(". ");

  txt = limpia;

  //alert(txt);
 
  arrPalabra = txt.split(" ");
  cantidad= arrPalabra.length;

  tamano = parseInt($("#tamano").val());
  cantidadNumerosTotal=tamano;

  for(i=0;i<tamano;i++){
    //circles[i]={};

    circles[i].x=100;
    circles[i].y=100;
    circles[i].r=18;
    circles[i].vx=8;
    circles[i].vy=10;

    circles[i].number=arrPalabra[myIndex];
    circles[i].color=abc1[myAbcArray[i]];

    // if(y==0){ x=cantidadNumerosTotal/*-(masXY<0?0:1)*/; y=cantidadNumerosTotal+1+masXY/*-(masXY<0?0:1)*/; } 
    // // if(y==0){ y=15-cantidadNumeros+masXY-(masXY<0?0:1); x=cantidadNumerosTotal+1+masXY-(masXY<0?0:1); } 
    // y--; x--;

    myIndex++;
    
  }

  start();


}






_cantidadNumerosTotal=cantidadNumerosTotal;

function actualizaNumeros(){

  //cantidadNumerosBack=cantidadNumeros;
  cantidadNumeros=$('#mySelect').val();

  _cantidadNumerosTotal=cantidadNumeros*2;
  //if(cantidadNumerosBack>cantidadNumeros) cantidadNumerosTotal=cantidadNumeros*2;


  if(cantidadNumeros==4){ masXY=3;   } 
  if(cantidadNumeros==5){ masXY=2;   } 
  if(cantidadNumeros==6){ masXY=1;   } 
  if(cantidadNumeros==7){ masXY=0;   }  
  if(cantidadNumeros==8){ masXY=-1;  } 

 // throw new Error("Something went badly wrong!")
 
  /*
   x=cantidadNumeros-1; y=cantidadNumeros-1;
  for(i=0;i<_cantidadNumerosTotal;i++){
    
    //if(!circles[i]==undefined) continue;

    if(i>cantidadNumerosTotal){
      circles[i]={};

      circles[i].x=100;
      circles[i].y=100;
      circles[i].r=18;
      circles[i].vx=8;
      circles[i].vy=10;

      circles[i].number=nums[x];
      circles[i].color=abc1[myAbcArray[y]];

    }
    

    
    y--; x--;
    
  }*/
  
  cantidadNumerosTotal=_cantidadNumerosTotal;
  newGame();


}


function newGame(){

  cantidadNumerosTotal=_cantidadNumerosTotal;
  console.log(cantidadNumeros)

  _p=`<center><table border="1" onclick="/*$('#result').show();*/"><tr>`

  nums=[];


  for(i=0;i<cantidadNumerosTotal;i++){ nums[i]=_.random(1,9); }


  if(cantidadNumeros==4){ masXY=3;  numA=parseInt(nums[3]+""+nums[2]+""+nums[1]+""+nums[0]); numB=parseInt(nums[7]+""+nums[6]+""+nums[5]+""+nums[4]); } 
  if(cantidadNumeros==5){ masXY=2;  numA=parseInt(nums[4]+""+nums[3]+""+nums[2]+""+nums[1]+""+nums[0]); numB=parseInt(nums[9]+""+nums[8]+""+nums[7]+""+nums[6]+""+nums[5]); } 
  if(cantidadNumeros==6){ masXY=1;  numA=parseInt(nums[5]+""+nums[4]+""+nums[3]+""+nums[2]+""+nums[1]+""+nums[0]); numB=parseInt(nums[11]+""+nums[10]+""+nums[9]+""+nums[8]+""+nums[7]+""+nums[6]); } 
  if(cantidadNumeros==7){ masXY=0;  numA=parseInt(nums[6]+""+nums[5]+""+nums[4]+""+nums[3]+""+nums[2]+""+nums[1]+""+nums[0]); numB=parseInt(nums[5]+""+nums[12]+""+nums[11]+""+nums[10]+""+nums[9]+""+nums[8]+""+nums[7]); }  
  if(cantidadNumeros==8){ masXY=-1;  numA=parseInt(nums[7]+""+nums[6]+""+nums[5]+""+nums[4]+""+nums[3]+""+nums[2]+""+nums[1]+""+nums[0]); numB=parseInt(nums[15]+""+nums[14]+""+nums[13]+""+nums[12]+""+nums[11]+""+nums[10]+""+nums[9]+""+nums[8]); } 

  result=numA*numB;

  
   x=cantidadNumeros-1; y=cantidadNumeros-1;
  for(i=0;i<cantidadNumeros;i++){ _p+=`<td class="myTd" style="color: ${abc1[myAbcArray[y]]}; background-color: ${abc1[myAbcArray[y]]}; width: 40px;  height: 40px;"> <center> ${nums[x]} </center> </td> `;  x--; y--; }
  _p+=`</tr>`;
  x=cantidadNumerosTotal-1; y=cantidadNumerosTotal+masXY;
  for(i=0;i<cantidadNumeros;i++){ _p+=`<td class="myTd" style="color: ${abc1[myAbcArray[y]]}; background-color: ${abc1[myAbcArray[y]]}; width: 40px;  height: 40px;"> <center> ${nums[x]} </center>  </td> `; nums[x]; x--; y--; }

  _p+=`

    </tr></table>
    <br> <input type="text" value=""  id="myInput" style="width:200px; text-align:right;unicode-bidi:bidi-override; direction:rtl;"> 
    <input type="button" value="show table nums" onclick="$('.myTd').css('color','black');">
    <input type="button" value="show result" onclick="$('#result').show();">
    <input type="button" value="New Game" onclick="newGame();">
    <select id="mySelect" onchange="actualizaNumeros();">
      <option value="4" selected>4 digits</option>
      <option value="5">5 digits</option>
      <option value="6">6 digits</option>
      <option value="7">7 digits</option>
      <option value="8">8 digits</option>
    </select>
    <input type="button" value="Hide table" onclick="$('table').hide();">
    <br> <span id="result" style="display:none;">${result}</span>
    </center>
  `;



  $("#screen").html(_p)

  $("#myInput").focus();

  $("#mySelect").val(cantidadNumeros);

  if(debug) $('.myTd').css('color','black');

  

  x=cantidadNumeros-1/*-(masXY<0?0:1)*/; y=cantidadNumeros-1/*-(masXY<0?0:1)*/;
  console.log(nums)
  // x=3+masXY-(masXY<0?0:1); y=3+masXY-(masXY<0?0:1);
  for(i=0;i<cantidadNumerosTotal;i++){
    //circles[i]={};

    circles[i].x=100;
    circles[i].y=100;
    circles[i].r=18;
    circles[i].vx=8;
    circles[i].vy=10;

    circles[i].number=nums[x];
    circles[i].color=abc1[myAbcArray[y]];

    if(y==0){ x=cantidadNumerosTotal/*-(masXY<0?0:1)*/; y=cantidadNumerosTotal+1+masXY/*-(masXY<0?0:1)*/; } 
    // if(y==0){ y=15-cantidadNumeros+masXY-(masXY<0?0:1); x=cantidadNumerosTotal+1+masXY-(masXY<0?0:1); } 
    y--; x--;
    
  }

  start();


}

//create te container that will hold the boincing balls.
var container = {
  x: 0,
  y: 0,
  width: 700,
  height: 400
};
//create the array of circles that will be animated
var circles = [{
  x: 50,
  y: 100,
  r: 20,
  vx: 10,
  vy: 9,
  color: 125
}, {
  x: 150,
  y: 80,
  r: 20,
  vx: 15,
  vy: 8,
  color: 205
}, {
  x: 90,
  y: 150,
  r: 20,
  vx: 5,
  vy: 15,
  color: 25
}, {
  x: 100,
  y: 50,
  r: 20,
  vx: 8,
  vy: 10,
  color: 100
}, {
  x: 200,
  y: 50,
  r: 20,
  vx: 8,
  vy: 10,
  color: 100
}, {
  x: 500,
  y: 50,
  r: 20,
  vx: 8,
  vy: 10,
  color: 100
}, {
  x: 500,
  y: 50,
  r: 18,
  vx: 8,
  vy: 10,
  color: 100
}, {
  x: 500,
  y: 50,
  r: 18,
  vx: 8,
  vy: 10,
  color: 100
}];

x=cantidadNumeros-1/*-(masXY<0?0:1)*/; y=cantidadNumeros-1/*-(masXY<0?0:1)*/;
console.log(nums)
// x=3+masXY-(masXY<0?0:1); y=3+masXY-(masXY<0?0:1);
for(i=0;i<cantidadNumerosTotal;i++){
  circles[i]={};

  circles[i].x=100;
  circles[i].y=100;
  circles[i].r=18;
  circles[i].vx=8;
  circles[i].vy=10;

  circles[i].number=nums[x];
  circles[i].color=abc1[myAbcArray[y]];

  if(y==0){ x=cantidadNumerosTotal/*-(masXY<0?0:1)*/; y=cantidadNumerosTotal+1+masXY/*-(masXY<0?0:1)*/; } 
  // if(y==0){ y=15-cantidadNumeros+masXY-(masXY<0?0:1); x=cantidadNumerosTotal+1+masXY-(masXY<0?0:1); } 
  y--; x--;
  
}

for(i=cantidadNumerosTotal;i<20;i++){
  circles[i]={};

  circles[i].x=100;
  circles[i].y=100;
  circles[i].r=18;
  circles[i].vx=8;
  circles[i].vy=10;

  circles[i].number=1;
  circles[i].color="red";

  if(y==0){ x=cantidadNumerosTotal/*-(masXY<0?0:1)*/; y=cantidadNumerosTotal+1+masXY/*-(masXY<0?0:1)*/; } 
  // if(y==0){ y=15-cantidadNumeros+masXY-(masXY<0?0:1); x=cantidadNumerosTotal+1+masXY-(masXY<0?0:1); } 
  y--; x--;
  
}

var vX=0;
var vY=0;

var kill, kill1;

var estado=0;
var bPause=0;

var collision=1; //$('#coll-ch').attr('checked', false);


for(i=0;i<cantidadNumerosTotal;i++){ 
  //circles[i].color="orange";

  circles[i].vx=_.random(4,6); 
  circles[i].vy=_.random(4,7);  

  circles[i].vxBase=circles[i].vx; 
  circles[i].vyBase=circles[i].vy;

  circles[i].iVx=circles[i].vx;
  circles[i].iVy=circles[i].vy;

  circles[i].canCollision=1;
  circles[i].collisionWith=1;

  if(_.random(0,1)){
    circles[i].vx*=-1; 
 

  }
   if(_.random(0,1)){
   
    circles[i].vy*=-1; 

  }



  if(_.random(0,1)){

    circles[i].direccion=1;

  }else{
    circles[i].direccion=-1;
  }

}

function answer(){
  for(i=0;i<cantidadNumerosTotal;i++){
    
    if(myArray.indexOf(i)!=-1){ circles[i].color="white"; }

  }
  estado=0;

  if(autoplay){
      setTimeout(function(){ start(); }, 2000);
  }
}

var myArray=[];

var vMin,vMax;

var autoplay=1;

var autoCorrect=1;

function start(){
  

  vMin=parseFloat($("#vMin").val());
  vMax=parseFloat($("#vMax").val());

  for(i=0;i<cantidadNumerosTotal;i++){ 
    //circles[i].color="orange";

    // circles[i].vx=_.random(vMin,vMax); 
    // circles[i].vy=_.random(vMin,vMax); 

    if(noMover==0){

      circles[i].vx=generateRandomNumber(vMin,vMax); 
      circles[i].vy=generateRandomNumber(vMin,vMax); 

      circles[i].vxBase=circles[i].vx; 
      circles[i].vyBase=circles[i].vy; 



       if(_.random(0,1)){
          circles[i].vx*=-1; 

        }

        if(_.random(0,1)){
          
          circles[i].vy*=-1; 

        }

    }

  }

  clearTimeout(kill); clearTimeout(kill1);

  cantidadBolas=parseInt($("#cantidadBolas").val());

  //console.log(cantidadBolas);

  // myArray=

  myArray=_.range(0,7);
  myArray=_.shuffle(myArray);
  myArray=_.first(myArray,cantidadBolas);

  bPause=1;


  for(i=0;i<cantidadNumerosTotal;i++){


    x=0;

    for(;;){

      bBreak=0;

      if(noMover==0){
        circles[i].x=_.random(50,650);
        circles[i].y=_.random(50,350);

      }
      

      if(i==0) break;

      for(j=i-1;j>=0;j--){
        // if(i==0){
        //   bBreak=1;
        //   break;
        // }

        // console.log(i);

        // console.log( Math.sqrt( Math.pow( circles[i].x - circles[j].x, 2) + Math.pow( circles[i].y - circles[j].y, 2) ) );


        if( ( Math.sqrt( Math.pow( circles[i].x - circles[j].x, 2) + Math.pow( circles[i].y - circles[j].y, 2) ) >=40 ) || noMover==1 ){
          bBreak=1;

        }else{
          bBreak=0; break;
        }

      }

      // for(j=i;j>0;j--){
      //   if(Math.abs(circles[j].x-circles[i].x)>50 || Math.abs(circles[j].y-circles[i].y)>50){
      //     bBreak=1;
      //   }else{
      //     bBreak=0;
      //   }

      // if(x==1000) break;
      x++;

      if(bBreak){ console.log("break");  break; } 
    }
    

    if(myArray.indexOf(i)!=-1){
      //circles[i].color="white";

    }


  }
  kill=setTimeout(function(){
    for(i=0;i<cantidadNumerosTotal;i++){/* circles[i].color="orange"; */}

    // vX=8;
    // vY=10; 
    bPause=0;


  },000);
   
  kill1=setTimeout(function(){
    // vX=0;
    // vY=0;  
   /* bPause=1;*/
    estado=1;

    if(autoplay){
      //setTimeout(function(){ answer(); },500);
      return;
    }

    if(autoCorrect){

      setTimeout(function(){/* answer(); */},500);

    }


  },parseInt($("#time").val())*1000+1000);
}

function animate() {
  //draw the container
  c.fillStyle = relleno;
  // c.fillStyle = "#000000";
  c.fillRect(container.x, container.y, container.width, container.height);

  //loop throughj the circles array
  for (var i = 0; i < cantidadNumerosTotal; i++) {
    //draw the circles
    // c.fillStyle = 'hsl(' + circles[i].color++ + ', 100%, 50%)';
    // c.fillStyle = circles[i].color;
    // c.beginPath();
    // c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
    // c.fill()

    c.font = '26pt Calibri';
    c.fillStyle = circles[i].color;
    circles.r=c.measureText(circles[i].number).width
    c.textAlign="center"; 
    c.fillText( circles[i].number, circles[i].x, circles[i].y);


    if(bPause) continue;

    // if(circles[circles[i].collisionWith].vy<circles[circles[i].collisionWith].vyBase) circles[circles[i].collisionWith].vy+=0.5;
    // if(circles[circles[i].collisionWith].vy<circles[circles[i].collisionWith].vyBase) circles[circles[i].collisionWith].vy+=0.5;

    //important
    // if(Math.abs(circles[i].vx)<Math.abs(circles[i].vxBase)){ if(circles[i].vx>0) circles[i].vx+=0.5; else circles[i].vx-=0.5; }
    // if(Math.abs(circles[i].vy)<Math.abs(circles[i].vyBase)){ if(circles[i].vx>0) circles[i].vy+=0.5; else circles[i].vy-=0.5; } 

    //time to animate our circles ladies and gentlemen.
    if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
      circles[i].vx = -circles[i].vx;
      //circles[i].vx = vX;
    }

    if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
      circles[i].vy = -circles[i].vy;
      // circles[i].vy = vY;
    }

    for(j=0;j<+masXY;j++){
      if(circles[j].canCollision==1) continue;

      if( Math.sqrt( Math.pow( circles[j].x - circles[circles[j].collisionWith].x, 2) + Math.pow( circles[j].y - circles[circles[j].collisionWith].y, 2) ) >= 200 ){
        // console.log("hola")

        circles[j].canCollision=1;
        circles[circles[j].collisionWith].canCollision=1;

        // circles[circles[i].collisionWith].vy+=0.5;
        // circles[circles[i].collisionWith].vy+=0.5;

       // circles[circles[i].collisionWith].vy+=0.5;
       // circles[circles[i].collisionWith].vy+=0.5;

        // circles[i].vx=circles[i].vxBase * circles[i].vx>0?1:-1 ;
        // circles[i].vy=circles[i].vyBase *  circles[i].vy>0?1:1 ;

        // circles[i].vx=circles[i].vxBase * circles[i].vx>0?1:-1 ;
        // circles[i].vy=circles[i].vyBase *  circles[i].vy>0?1:1 ;


       // console.log(circles[i].vxBase)




      }else{
        //recupero velocidad

        // if(circles[circles[i].collisionWith].vy<circles[circles[i].collisionWith].vyBase) circles[circles[i].collisionWith].vy+=0.5;
        // if(circles[circles[i].collisionWith].vy<circles[circles[i].collisionWith].vyBase) circles[circles[i].collisionWith].vy+=0.5;

        // if(circles[i].xy<circles[i].vxBase) circles[i].vx+=0.5;
        // if(circles[i].vy<circles[i].vyBase) circles[i].vy+=0.5;

      }
    }

    if(collision){
       for(j=0;j<cantidadNumerosTotal;j++){
        // if(i==0){
        //   bBreak=1;
        //   break;
        // }

        // console.log(i);

        // console.log( Math.sqrt( Math.pow( circles[i].x - circles[j].x, 2) + Math.pow( circles[i].y - circles[j].y, 2) ) );

        if(j!=i){
          if( Math.sqrt( Math.pow( circles[i].x - circles[j].x, 2) + Math.pow( circles[i].y - circles[j].y, 2) ) <= 20 ){

            if(circles[i].canCollision==0 || circles[j].canCollision==0) continue;

            circles[i].canCollision=0;
            circles[j].canCollision=0;
            
            circles[i].collisionWith=j;
            circles[j].canCollision=i;

            //if(_.random(0,13)<13) continue;
            // if(_.random(0,5)<4) continue;
            if(_.random(0,15)<10) continue;

            // if(circles[i].vx>0) circles[i].vx = circles[i].vxBase * 0.75; else circles[i].vx = circles[i].vxBase *  -0.75;
            // if(circles[j].vx>0) circles[j].vx = circles[j].vxBase * 0.75; else circles[j].vx = circles[j].vxBase *  -0.75;

            // if(circles[i].vy>0) circles[i].vy = circles[i].vyBase * 0.75; else circles[i].vy = circles[i].vyBase *  -0.75;
            // if(circles[j].vy>0) circles[j].vy = circles[j].vyBase * 0.75; else circles[j].vy = circles[j].vyBase *  -0.75;

            // circles[i].vy *= 0.9;
            // circles[j].vx *= 0.9;



            // if( Math.pow( circles[i].x - circles[j].x, 2) > Math.pow( circles[i].y - circles[j].y, 2) ){
            //   circles[i].vx = -circles[i].vx;
            //   circles[j].vx = -circles[i].vx;

            // }else{

            //   circles[i].vy = -circles[i].vy;
            //   circles[j].vy = -circles[i].vy;


            // }

             circles[i].vx = -circles[i].vx;
            circles[j].vx = -circles[i].vx;

            circles[i].vy = -circles[i].vy;
            circles[j].vy = -circles[i].vy;
            
            // circles[i].vx = -circles[i].vx;
            // circles[j].vx = -circles[i].vx;

            // circles[i].canCollision=0;
            // circles[j].canCollision=0;
            
            // circles[i].collisionWith=j;
            // circles[j].canCollision=i;     

          }

        }
       }//for collision


    }

   

    circles[i].x += circles[i].vx;
    circles[i].y += circles[i].vy;

    //controversial

    // if(_.random(0,1000)<10){

    //   //console.log("flash");
    //   if(_.random(0,1))
    //     circles[i].vx+=0.25;
    //   else
    //     circles[i].vy+=0.25;
    // }

    // console.log(circles[i].vy);

    //circles[i].x += vX
    //circles[i].y += vY
  }

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

document.body.onkeyup = function(e){
  /*
    console.log(e.keyCode);

    if(e.keyCode == 32){
      event.preventDefault();

      if(estado==0){ start(); }
      if(estado==1){ answer(); } 
       
    }

    if(e.keyCode == 78){
      vMin=parseFloat($("#vMin").val());
      vMax=parseFloat($("#vMax").val());

      vMin+=0.25;
      vMax+=0.25;

      $("#vMin").val(vMin);
      $("#vMax").val(vMax);


      start();


    }
     if(e.keyCode == 80){
      vMin=parseFloat($("#vMin").val());
      vMax=parseFloat($("#vMax").val());

      vMin-=0.25;
      vMax-=0.25;

      $("#vMin").val(vMin);
      $("#vMax").val(vMax);

      start();

    }*/
}

function aumenta(){
  vMin=parseFloat($("#vMin").val());
  vMax=parseFloat($("#vMax").val());

  vMin+=0.25;
  vMax+=0.25;

  $("#vMin").val(vMin);
  $("#vMax").val(vMax);


  start();

}

function disminuye(){
  vMin=parseFloat($("#vMin").val());
  vMax=parseFloat($("#vMax").val());

  vMin-=0.25;
  vMax-=0.25;

  $("#vMin").val(vMin);
  $("#vMax").val(vMax);

  start();



}

function getParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

relleno="black";

if(getParameter("video")!=null){
  relleno="rgba(255, 255, 255, 0.5)";
  
  // setInterval(function(){
  //   $("#myVideo").css("z-index","900 !important");
  //   $("#container").css("overflow","scroll");

  // },100);
  
}

function generateRandomNumber(min,max) {
    // var min = 0.0200,
    //     max = 0.120,
        var highlightedNumber = Math.random() * (max - min) + min;
        return highlightedNumber;
    // alert(highlightedNumber);
}

_ww=$(window).width();


if(_ww<=1000){

  $("#container").css("zoom","1.35");
  $("#controles").css("zoom","3.5");
  $("#controles").prepend("<br><br><br>");
  // alert();
}else{
  $("#container").css("zoom","1.5");


}


loadText();
//start();