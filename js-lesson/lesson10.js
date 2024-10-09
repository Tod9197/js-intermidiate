//*************************************************************
// 基本的な記述ルール
//*************************************************************
var str = "あいうえお"; //ダブルクエテーションで囲えば、文字が入れられる。
str = "かきくけこ"; //シングルクオテーションでもいい
num = 123; //数値を入れたいなら何もつけなければいい
num = "123"; //数値ではなく「数字」文字としての「123」
str = null; //プログラミングの世界では、全くの空だよという意味。
str = ""; //空文字という、空の文字が入っているという意味
str = undefined; // jsだけの特殊な値。strという変数が初期化されていないよという意味。
var str2;
console.log(str);

//*************************************************************
// 変数宣言
//*************************************************************
// 変数宣言でvarをつけない場合
val = "Global";

function getVal() {
  val = "Local";
  return val;
}

console.log(getVal()); //Local
console.log(val); //Local

//変数宣言でvarをきちんとつけた場合
var val = "Global"; //Globalの変数

function getVal() {
  var val = "Local"; //Localの変数
  return val;
}

console.log(getVal()); //Local
console.log(val); //Global

//*************************************************************
// データ型について
//*************************************************************
//jsはデータ型がとてもゆるゆる。js側が勝手に入ってきた値を元に型を推測してつけているので、きちんと意識していないと変な型になっている場合がある。jsのデータ型には基本型と参照型がある。

//基本型(プリミティヴ型)
//1.真偽値を扱うboolean
var isBool = true;
//2.数値を扱うnumber
var num = 123;
num = 123.456;
num = 0xcc55bb;
//3.文字を扱うstring
var str = "123";
//4. null値を扱うnull
var str = null;
//5. 未定義値を扱うundefined
var str = undefined;

//参照型
//1. 配列を扱うarray
var arr = [];
//2. オブジェクトを扱うobject
var obj = {};
//3. 関数を扱うfunction(他の言語と違って特殊で、データ型の一種)
function fucn() {}

//基本型は値そのものを扱う
//参照型は値の格納されているアドレスを扱う。どの言語も同じ

//*************************************************************
// リテラルについて
//*************************************************************
//リテラルとは値の表現方法のこと。値には色々な表現の仕方がある。

// 数値リテラル
var num = 123; //一般的な10進数のもの
num = 123.456; //浮動小数点もある。
num = 0xcc55bb; //16進数もある

//文字列リテラル
var str = "He is superstar";
str = "He's superstar";

//配列リテラル
var arr = ["HTML", "CSS", "JS", "PHP"]; //普通の配列の書き方
console.log(arr[3]); //PHP
arr = [
  ["HTML", "CSS"],
  ["JS", "PHP"],
];
console.log(arr[1][0]); //JS

// オブジェクトリテラル
// ハッシュとか連想配列と呼ばれるもの。番号じゃなく名前でアクセスできる配列
var obj = { HTML: 5, CSS: "3", JS: "ES2015", PHP: "7" };
console.log(obj.HTML); //5
console.log(obj.JS); //ES2015
//キーにも変数にも使えるし、配列と同じように[]で指定もできる
var key = "CSS";
console.log(obj[key]); //3
console.log(obj["PHP"]); //7

//*************************************************************
// 制御文について
//*************************************************************

//条件分岐
//**************************************************

//if文
var str = "1";
if (str == 1) {
  console.log("1です");
} else if (str == 2) {
  console.log("2です");
} else {
  console.log("それ以外です");
}

//else ifが多い場合はswitch文を使うと見やすい
switch (str) {
  case 1:
    console.log("1です");
    break;
  case 2:
    console.log("2です");
    break;
  case 3:
    console.log("3です");
    break;
}

//caseの最後にbreakをつけないと後続の条件判定もしてしまうので、基本は必ずつける

//繰り返し処理
//**************************************************

//whileとdo while
var num = 1;
while (num < 10) {
  console.log(num);
  num++;
}

num = 1;
do {
  console.log(num);
  num++;
} while (num < 10);
// do~whileは必ず1回は実行される

//どちらも条件によっては「無限ループ」する処理に陥る場合があるので注意

//for文
for (var i = 1; i < 10; i++) {
  console.log("これは" + i + "回目の学習です");
}

//for in
//配列の1個1個のキーを取り出してくれる
var arr = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "ネットワークサーバー・セキュリティ",
  "営業",
  "起業",
];
for (var key in arr) {
  console.log("ウェブカツで学ぶのは" + arr[key] + "です");
}

//連想配列の場合
var arr = {
  lesson1: "HTML",
  lesson2: "CSS",
  lesson3: "JavaScript",
  lesson4: "PHP",
};
for (var key in arr) {
  console.log("ウェブカツで学ぶのは" + arr[key] + "です。");
}

//オブジェクトの場合
var obj = new Object();
obj.lesson1 = "HTML";
obj.lesson2 = "CSS";
obj.lesson3 = "JavaScript";
for (var key in obj) {
  console.log("ウェブカツで学ぶのは" + obj[key] + "です。");
}

var obj = {
  lesson1: "HTML",
  lesson2: "CSS",
  lesson3: "JavaScript",
  lesson4: "PHP",
};
for (var key in obj) {
  console.log("ウェブカツで学ぶのは" + obj[key] + "です。");
}

//break
for (var i = 1; i < 10; i++) {
  console.log("これは" + i + "回目の学習です");
  if (i == 3) {
    console.log("OK!!");
    break;
  }
}

//continue
for (var i = 1; i < 10; i++) {
  if (i == 3) {
    continue; //スキップして次のループへ
  }
  console.log("これは" + i + "回目の学習です");
}
