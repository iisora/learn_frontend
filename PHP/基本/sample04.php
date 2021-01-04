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
/* if構文 */
date_default_timezone_set('Asia/Tokyo');
print(date('G'). "\n");

if(date('G') < 9) {
    print('※現在受付時間外です');
} else {
    print('ようこそ!');
}

echo "\n";

$x = 'アイウエオ';
if ($x !== '') {
    print('文字入ってる!');
} else {
    print('文字入ってない...');
}
?>
</pre>
</main>
</body>    
</html>