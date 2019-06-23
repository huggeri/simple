<?php 

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$name = $_POST['username'];
$phone = $_POST['userphone'];

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'fr_fr_200111@mail.ru'; // Логин на почте
    $mail->Password   = '12ergnhyQ'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = '465';
    $mail->setFrom('fr_fr_200111@mail.ru', 'baba'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('katq228@gmail.com');  

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Заголовок письма';
        $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Телефон:</b> $phone";

// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "Сообщение успешно отправлено";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}