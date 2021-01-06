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
    <!--/* htmlspecialcharsでエスケープしてる */-->
    <!--/* $_REQUESTを使えば、POSTでもGETでも取得できる 
        　　どちらで送られるのかわからない場合は、$_REQUESTを使い
        　　わかっている場合は、$_POSTまたは$_GETを使う。[]内の値がinputタグのname属性と紐づく
    */-->
    お名前： <?php print(htmlspecialchars($_REQUEST['my_name'], ENT_QUOTES)); ?>
</pre>
</main>
</body>    
</html>