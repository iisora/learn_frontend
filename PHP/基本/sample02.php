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
/* 今日から2日後のタイムスタンプを取得 */
strtotime('+2day');

print(time()."\n"); // 現在のタイムスタンプ
// 翌日
print(date('n/j(D)', time() + 60 * 60 * 24)."\n");
print(date('n/j(D)', strtotime('+1day'))."\n");

/* 1年後までのカレンダーを表示する */
print("***１年後までのカレンダー***"."\n");
// for($i=1; $i<=365; $i++) {
for($i=1; $i<=365; $i++):
    $date = strtotime('+' . $i . 'day');
    print(date('n/j(D)', $date));
    print "\n";
// }
endfor // whileの場合は:、endwhile

?>
</pre>
</main>
</body>    
</html>