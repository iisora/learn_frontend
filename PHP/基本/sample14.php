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
// $zip = '918-9999';
$zip = '１２３-４５６７';

$zip = mb_convert_kana($zip, 'a', 'UTF-8');
// preg_matchは正規表現を確認して正しいか判断
// d = dicimal 数字が3つ　- 数字が4つ
// Aはここからスタート、zはここで終わり
if(preg_match("/\A\d{3}[-]\d{4}\z/", $zip)) {
    print('郵便番号：〒' . $zip);
} else {
    print('※郵便番号の形式が間違っています');
}
?>
</pre>
</main>
</body>    
</html>