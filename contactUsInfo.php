<?php
    if(isset($_POST['email'])){
        $destinationEmail = "msu-bdrost1@mcneese.edu";
        $name = $_POST['Name'];
        $email = $_POST['Email'];
        $phone = $_POST['Phone'];
        $message = $_POST['Message'];

        mail($destinationEmail, "New Message from Contact Us", $message.'-'.$phone,"From: ".$email);
        alert("Message Successfully Sent!");
    }
    else{
        alert("Something went wrong!");
    }
    
?>