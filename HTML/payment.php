<?php
$conn = mysqli_connect("localhost", "root", "", "sim");

function pembayaran($data)
{
    global $conn;
    $name = $data["name"];
    $email = $data["email"];
    $phone = $data["phone"];
    $class = $data["class"];
    $level = $data["level"];
    $payment_method = $data["payment_method"];

    mysqli_query($conn, "INSERT INTO payment VALUES('$name', '$email', '$phone', '$class', '$level', '$payment_method')");

    return mysqli_affected_rows($conn);
}

if (isset($_POST["submit"])) {
    if (pembayaran($_POST) > 0) {
        echo "<script>
        alert('Please pay within 24 hours.');
        document.location.href='index.html';
        </script>";
    } else {
        echo mysqli_error($conn);
    }
}
