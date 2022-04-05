<?php 

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "info@raghavrudhra.com";
    $headers = "From: " .$mailFrom;
    $msg = "You have this following message".$name ".\n\n".$message;
    
    mail($mailTo,$headers,$msg);
}