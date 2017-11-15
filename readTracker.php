<!DOCTYPE html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<html>
<head>
    <meta charset="UTF-8">

  <title>Read Tracker 2D</title>

  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="js/underscore-min.js" type="text/javascript"></script>

  <style type="text/css">
  body{
    background-color: gray;

  }
/*
   #video, #container {
     position:fixed;
     width: 700px;
     height: 400px;
     
     
     color:red;
  }*/

  #container{
    /*position:fixed;
    top:30px;
    left:10;*/
    /*width:100%;
    height:100%;*/
    /* width: 700px;*/
    /* height: 400px;*/
    /*background-color : transparent;*/
    /*opacity:1;*/
    /*background:rgba(255,255,255,0.8); or just this*/
    /*z-index:50;*/
    /*color:#fff;*/

  }


  .youtube-class{
    z-index: 30;
  }



  #video{
    /*position: absolute; *//*width: 100%; height: 100%;*/
    /* position:fixed;
     top:30px;
    left:10;*/
   /* z-index: 20;*/
   /* width: 700px;
     height: 400px;*/
    /*opacity: 0.2;*/
  }


  </style>
  <script>
    
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-45359665-6', 'auto');
  ga('send', 'pageview');

  </script>

</head>
<body>  
  <b>Read Tracker 2D</b>

  <div id="screen" style="width: 1000px;"></div>

  <br>
  <div id="container">
    <canvas id="my_canvas" width="700px" height="400px" style="z-index: 1001; background-color : transparent;" onclick="goNextPhrase()"></canvas>
  </div>

<br>

  <!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->

  <div id="controles">
    
    <span style="display:none;">
      <input type="button" value="start" onclick="start();">
      <input type="button" value="answer" onclick="answer();">

      follow
      <select id="cantidadBolas">
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      time
      <select id="time">
        <option value="5">5</option>
        <option value="6" selected>6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
      </select>
    </span>
    v min <input type="text" value="6" id="vMin" style="width:35px;">
    v max <input type="text" value="8" id="vMax" style="width:35px;">
    <input type="button" value="+" onclick="aumenta();">
    <input type="button" value="-" onclick="disminuye();">

    <span style="display:none;">
      Autoplay <input type="checkbox" onclick="autoplay=!autoplay;" checked>
      collision <input type="checkbox" onclick="collision=!collision;" id="coll-ch" checked>
      auto-correct <input type="checkbox" onclick="autoCorrect=!autoCorrect;" checked>
    </span>

    


  </div>

   <script src="js/app/readTracker.js" type="text/javascript"></script>
</body>
</html>