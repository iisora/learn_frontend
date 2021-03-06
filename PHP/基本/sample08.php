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
/* xmlの情報を取得する */
// file_put_contents('../xml/sample.txt', 'パスが正常か確認');
$path = '../xml/sample.xml';
if (file_exists($path)) {
    $xmlTree = simplexml_load_file($path);
    print('ファイルが存在します'."\n");
    print_r($xmlTree);
} else {
    /* メッセージを出力し、現在のスクリプトを終了する */
    exit('Failed to open test.xml.'."\n");
}

foreach($xmlTree->food as $food):
?>
<p style="font-weight:bold"><?php print($food->name); ?></p>
・<p><?php print($food->color); ?></p>
<?php 
endforeach;
?>
</pre>
</main>
</body>    
</html>