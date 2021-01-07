<!--/* php.iniでsession.auto_start=1の時は自動的に
セッションが開始されるので下の記述はいらないが、負荷が上がるので
基本はセッションを使うところのみsession_start()をする */-->
<?php session_start(); ?>
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
    <?php print($_SESSION['session_message']); ?>
</pre>
</main>
</body>    
</html>