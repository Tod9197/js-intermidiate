<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ajax Sample</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 class="title">JS中級</h1>
  <form method="post" action="" class="formArea js-formArea">
    <div id="ajaxArea" class="js-set-html">
      <p>ここだけ入れ替わります</p>
    </div>
    <p><?php echo date('Y/m/d H:i:s') ?></p>
    名前
    <input type="text" name="name" class="inputText js-get-val-name" autocomplete="off">
    年齢
    <input type="number" name="age" class="inputText inputText--s js-get-val-age" autocomplete="off">
    <input type="submit" value="送信" class="btn">
  </form>

<!-- jQuery -->
<script
  src="https://code.jquery.com/jquery-3.7.1.js"
  integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
  crossorigin="anonymous"></script>
</body>
<script src="app.js"></script>
</html>