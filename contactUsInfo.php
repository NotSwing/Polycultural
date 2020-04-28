<?php
    $connect = mysql_connect("localhost","AdminName","Password");
    if(!connect){
        die('Connection Failed:'.mysql_error());
    }
    mysql_select_db("DatabaseName", $connect);
    $userInfo="INSERT INTO 'table_name' ('Name','Phone','Email','Message') VALUES('$_POST[Name]','$_POST[Phone]','$_POST[Email]','$_POST[Message]'";
    if(!mysql_query($userInfo,$connect)){
        die('Connection Failed:'.mysql_error());
    }
    echo "Thank you for your message!";
    mysql_close($connect);
?>