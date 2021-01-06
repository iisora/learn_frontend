<?php
/* 変数をセットする */
$value = '変数に保存した値です';
/* クッキーをセットする　param: 1.key /  2.保存したい内容 / 3.expire(いつまで保持しておきたいか) */
setcookie('save_message', 'Cookieに保存した値です', time() + 60 * 60 * 24 * 14)  // ←14日間
?>
<!doctype html>
<html lang="ja">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="../css/style.css">

<title>PHP</title>
</head>
<body>
<header>
<h1 class="font-weight-normal">PHP</h1>    
</header>

<main>
<h2>Practice</h2>
<pre>
    <a href="page02.php">Page02へ</a>
</pre>
</main>
</body>    
</html>