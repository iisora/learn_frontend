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
date_default_timezone_set('Asia/Tokyo');
/* \でエスケープできる */
print('I\'m hungry!'."\n"); // 改行はダブルクォーテーションで括る
/* 算術演算子 */
print(19+(47*967)."\n");
/* 時刻(手続き)　文字列連結 */
print('現在は' . date('G時 i分 s秒') . 'です'."\n");
/* オブジェクト使って時刻出力 */
$today = new DateTime();
print($today->format('G時 i分 s秒')."\n");
/* 変数 */
$sum = 100+1050+200+500;
$tax = 1.10;
print("合計金額は".$sum."円です"."\n");
print("税込価格は".$sum*$tax."円です"."\n");
/* ループ & 比較演算子 */
// while
// $i = 1;
// while($i <= 365) {
//     print($i . "\n");
//     $i += 1;
// }

// for
for($i=1; $i<=365; $i++) {
    print($i."\n");
}

?>

</pre>
</main>
</body>    
</html>