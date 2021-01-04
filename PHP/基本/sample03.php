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
/* 配列-曜日を日本語で表示する */
// braket(少し新しい)
$week_name = ['日', '月', '火', '水', '木', '金', '土'];
// array(少し古い)
$week_array = array('日', '月', '火', '水', '木', '金', '土');
print($week_name[2]."\n");
print(date('w')."\n");
print($week_name[date('w')]. "\n");

/* 連想配列 */
$fruits = [
    'apple'=>'りんご', 
    'grape'=>'ぶどう', 
    'lemon'=>'レモン',
    'tomat'=>'トマト',
    'peach'=>'もも'
];
print($fruits['lemon']. "\n");

/* 連想配列を取り出す時はforeachを使う */
foreach ($fruits as $english => $japanese) {
    print($english . ':' . $japanese . "\n");
}

?>
</pre>
</main>
</body>    
</html>