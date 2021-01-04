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
/* 読み込んだファイルを出力するだけならreadfileを使う */
readfile(path);

echo "\n";

$file_path = '../../news_data/news.txt';
$news = file_get_contents($file_path);
$exist = file_exists($file_path);
// もしファイルが存在しなかったら
if(!$exist) {
    /* ファイルに内容を書き込む */
    /* 2階層前のnews_dataというフォルダの中にnews.txtを作成し、引数の文字列を書き込む */
    $success = file_put_contents($file_path, '2020-01-04 ホームページをリニューアルしました');
    if($success) {
        print('ファイル書き込み成功');
    } else {
        peint('書き込みに失敗しました。フォルダ権限などを確認してください');
    }
} else {
    $news .= "\n"."2020-01-05 ニュースを追加しました";
    file_put_contents($file_path, $news);
    print('追記に成功しました');
}
?>
</pre>
</main>
</body>    
</html>