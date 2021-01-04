<!doctype html>
<html lang="ja">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="css/style.css">

<title>PHP</title>
</head>
<body>
<header>
<h1 class="font-weight-normal">PHP</h1>    
</header>

<main>
<h2>Practice</h2>
<pre>
<?php
/* フォーマット */

$date = sprintf('%04d年 %02d月 %02d日', 2019, 1, 23); 
$date2 = sprintf('% 4d年 % 2d月 % 2d日 %s', 2020, 1, 23, '金');
print($date."\n");
print($date2);
?>
</pre>
</main>
</body>    
</html>