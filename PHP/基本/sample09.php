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
/* JSONを読み込む */
$path = '../JSON/sample.json';
$file = file_get_contents($path);
/* 読み取ったJSONデータを表示するときに文字化けしないようにする */
/* ASCII,JIS,UTF-8,EUC-JP,SJIS-WINの順番で自動検出し、UTF8に変換する */
// $file = mb_convert_encoding($file, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
// $json = json_decode($file);
/* 第二引数にtrueで連想配列になる */
$arr = json_decode($file,true);
// print_r($json);
print_r($arr);
// var_dump($json->DueDate);
var_dump($arr['Balance']);
echo "********************************************************************";
// foreach($arr->Line as $line):
foreach($arr as $key => $val):
?>
<p><?php print($key . ':' . $val); ?></p>
<?php
endforeach;
?>
<?php
foreach($arr.Line as $line):
?>
<?php print($line); ?>
<?php
endforeach;
?>

</pre>
</main>
</body>    
</html>