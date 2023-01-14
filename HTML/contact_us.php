<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

$mail = new PHPMailer();

if (isset($_POST["submit"])) {
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $phone_number = $_POST["phone_number"];
    $message = $_POST["message"];

    try {
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username =  "matthewdarren7753@gmail.com";
        $mail->Password = "-Spectrum7753-";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = "587";

        $mail->setFrom("matthewdarren7753@gmail.com");
        $mail->addAddress("matthewdarren7753@gmail.com");

        $mail->isHTML(true);
        $mail->Subject = 'New Message (Contact Page)';
        $mail->Body = "
        <html>
        <head>
        </head>
        <body>
        <table>
        <tr>
        <td><b>First Name</b></td>
        <td>:</td>
        <td>$first_name</td>
        </tr>
        <tr>
        <td><b>Last Name</b></td>
        <td>:</td>
        <td>$last_name</td>
        </tr>
        <tr>
        <td><b>Email</b></td>
        <td>:</td>
        <td>$email</td>
        </tr>
        <tr>
        <td><b>Phone Number</b></td>
        <td>:</td>
        <td>$phone_number</td>
        </tr>
        <tr>
        <td><b>Message</b></td>
        <td>:</td>
        <td>$message</td>
        </tr>
        </table>
        </body>
        </html>
        ";

        $mail->send();
        echo "<script>
        alert('Thank you for your message! We will get back to you within 24 hours.');
        document.location.href='index.html';
        </script>";
    } catch (Exception $e) {
        echo "<script>
        alert('Something went wrong. Please try again.');
        document.location.href='index.html';
        </script>";
    }
}
