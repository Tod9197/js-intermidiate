<?php  

if(!empty($_POST)){
  // DBへ接続準備
  $dsn = 'mysql:dbname=js_advance;host=localhost;charset=utf8';
  $user = 'root';
  $password = 'root';
  $options = array(
    // SQL実行失敗時に例外をスロー
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    // デフォルトフェッチモードを連想配列形式に設定
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    // バッファードクエリを使う(一度に結果セットを全て取得し、サーバー負荷を軽減)
    // SELECTで得た結果に対してもrowCountメソッドを使えるようにする
    PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true,
  );

  // PDOオブジェクトを生成
  $dbh = new PDO($dsn,$user,$password,$options);

  // SQL文(クエリー作成)
  $stmt = $dbh->prepare('SELECT * FROM users WHERE email = :email');

  //プレースホルダーに値をセットし、SQLを実行
  $stmt->execute(array(':email' => $_POST['email']));

  $result = 0;

  $result = $stmt->fecth(PDO::FETCH_ASSOC);

  // 結果が0の場合
  if(empty($result)){
    echo json_encode(array(
      'errorFlg' => false,
      'msg' => '未登録です。'
    ));
  }else {
    echo json_encode(array(
      'errorFlg' => true,
      'msg' => '既に登録されています。'
    ));
  }
  
  exit();
}
?>