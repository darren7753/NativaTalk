<?php
$conn = mysqli_connect("localhost", "root", "", "sim");

// SIGN UP
function registrasi($data)
{
    global $conn;
    $name = $data["name"];
    $email = $data["email"];
    $password = mysqli_real_escape_string($conn, $data["password"]);

    // Cek email sudah ada atau belum
    $result = mysqli_query($conn, "SELECT email FROM users WHERE email = '$email'");
    if (mysqli_fetch_assoc($result)) {
        echo "<script>
        alert('Your email address is already registered.');
        document.location.href='index.html';
        </script>";
        return false;
    }

    // Enkripsi password
    $password = password_hash($password, PASSWORD_DEFAULT);

    // Tambahkan user baru ke database
    mysqli_query($conn, "INSERT INTO users VALUES('$name', '$email', '$password')");

    return mysqli_affected_rows($conn);
}

if (isset($_POST["signup"])) {
    if (registrasi($_POST) > 0) {
        echo "<script>
        alert('Your account has been created successfully!');
        document.location.href='index.html';
        </script>";
    } else {
        echo mysqli_error($conn);
    }
}
// SIGN UP

// LOG IN
if (isset($_POST['login'])) {
    $email2 = $_POST["email"];
    $password2 = $_POST["password"];
    $result2 = mysqli_query($conn, "SELECT * FROM users WHERE email = '$email2'");

    // Cek email
    if (mysqli_num_rows($result2) === 1) {
        // Cek password
        $row = mysqli_fetch_assoc($result2);
        if (password_verify($password2, $row["password"])) {
            echo "<script>
            alert('Log in successfully!');
            document.location.href='index.html';
            </script>";
            exit();
        }
    }

    $error = true;
    echo "<script>
    alert('Your email or password is incorrect. Please try again.');
    document.location.href='index.html';
    </script>";
}
// LOG IN