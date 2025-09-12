<?php
    $email = "test@leolas.ml";
    $subject = $_POST ['message'];;
    $message = $_POST ['areatext'];
    $header="Content-type: text/plain";
 
    mail( $email, $subject, $message, $header); 
 
    echo "<style>a {text-decoration: none;} h3:hover {font-family: 'Comfortaa', cursive; background: #d3d3ff}</style><div style='width: 310px; height: 300px; border: solid transparent 1px; margin: 150px auto; border-radius: 5px; box-shadow: 0 0 10px #3ad1ff;'><h2 style='text-align: center; font-family: monospace; width: 230px; font-size: 1.4em; display: block; margin: 35px auto; padding: 10px; color: #363636;'>&#1047;&#1072;&#1103;&#1074;&#1082;&#1072; &#1091;&#1089;&#1087;&#1077;&#1096;&#1085;&#1086; &#1086;&#1090;&#1087;&#1088;&#1072;&#1074;&#1083;&#1077;&#1085;&#1072;. &#1054;&#1078;&#1080;&#1076;&#1072;&#1081;&#1090;&#1077; &#1079;&#1074;&#1086;&#1085;&#1082;&#1072;.</h2>
<a href='http://leolas.ml'><h3 style='font-family:monospace; width: 230px; border: solid transparent 1px; font-size: 1.4em; display: block; margin: -20px auto; padding: 10px; text-align: center; border-radius: 5px; box-shadow: 0 0 10px #3ad1ff; color: #585858; font-style: italic; transition-duration: .2s;'>&#1042;&#1077;&#1088;&#1085;&#1091;&#1090;&#1100;&#1089;&#1103; &#1085;&#1072; &#1089;&#1072;&#1081;&#1090;.</h3></a> <a href='http://google.com'><h3 style='font-family:monospace; width: 230px; border: solid transparent 1px; font-size: 1.4em; display: block; padding: 10px; margin: 40px auto; text-align: center; border-radius: 5px; box-shadow: 0 0 10px #3ad1ff; color: #585858; font-style: italic; transition-duration: .2s;'>&#1055;&#1077;&#1088;&#1077;&#1081;&#1090;&#1080; &#1074; &#1087;&#1086;&#1080;&#1089;&#1082;&#1086;&#1074;&#1080;&#1082;.</h3></a></div>";
?>