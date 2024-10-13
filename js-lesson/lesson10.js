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

//*************************************************************
// オブジェクトについて
//*************************************************************

// JSで扱うものは全てオブジェクトかオブジェクトのように使える
// オブジェクトはプロパティとメソッドがある
// プロパティは値を保存しておく変数と同じで、オブジェクトの状態や特性を表すために使われる
// メソッドは関数と同じで、オブジェクトの振る舞い(動き)を表すために使われる

//*************************************************************
// オブジェクトの作り方
// オブジェクト→プロパティとメソッドを持っている
//*************************************************************
var human = {};
human.name = "yamaguchi"; //プロパティ
human.age = 40; //プロパティ
human.sex = "男"; //プロパティ
human.sayinfo = function () {
  return (
    "私は" +
    human.name +
    "で年齢は" +
    human.age +
    "で性別は" +
    human.sex +
    "です"
  );
};

console.log(human.sayinfo());

//こうやっても同じ
var human = {
  name: "yamaguchi",
  age: 40,
  sex: "男",
  sayInfo: function () {
    return (
      "私は" +
      human.name +
      "で年齢は" +
      human.age +
      "で性別は" +
      human.sex +
      "です。"
    );
  },
};

console.log(human.sayInfo());

//*************************************************************
// new演算子とは？
//*************************************************************

//new演算子
var obj1 = new Object();
var obj2 = {}; //上記のobj1とやっていることは同じ
console.log(obj1);
console.log(obj2);

//newをつかなかった場合
//クラス(設計図)を作る
var human = function () {
  this.name = "Akira";
  this.say = function () {
    return this.name;
  };
};
var obj1 = new human();
var obj2 = human();
console.log(obj1.say());
// console.log(obj2.say()); //undefined

// インスタンスはクラス(設計図)をコピーして実際の物を作るようなもの
// newは勝手にインスタンスを返却してくれる
// newをつけなければただ関数を実行しただけ

console.log(obj1);
console.log(obj2);

var human = function () {
  this.name = "yamaguchi";
  this.say = function () {
    return this.name;
  };
  return "ただ実行しただけ";
};
var obj3 = human();

console.log(obj3);

//*************************************************************
// 独自コンストラクタの作り方
//*************************************************************

// JSではコンストラクタはただの「関数」
// 関数内で呼び出すthisは呼び出し元のオブジェクトを参照する
var Monster = function (name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.doAttack = function () {
    console.log(this.name + "は" + this.attack + "のダメージを与えた");
  };
};

// なので、newすればインスタンスがthisの参照先になる
var slime = new Monster("スライム", 10, 10);
var demon = new Monster("デーモン", 30, 40);
console.log(slime.doAttack());
console.log(demon.doAttack());

// こう作っているのと動きは同じになる(prototypeの中身が違ったりinstanceofの判定が違ったりと実際の中身は違う)
var slime = {
  name: "スライム",
  hp: 10,
  attack: 10,
  doAttack: function () {
    console.log(slime.name + "は" + slime.attack + "のダメージを与えた");
  },
};

var demon = {
  name: "デーモン",
  hp: 30,
  attack: 40,
  doAttack: function () {
    console.log(demon.name + "は" + demon.attack + "のダメージを与えた");
  },
};
console.log(slime.doAttack());
console.log(demon.doAttack());

//*************************************************************
// オブジェクトとプリミティブ型
//*************************************************************

// プリミティブ型はboolean,number,string,undefinedのこと
// プリミティブ型は基本は値そのもの
// でもたまに一時的にオブジェクトになっている

var num = 51;
num2 = new Number(73);
console.log(typeof num); //number型
console.log(typeof num2); //object(Numberオブジェクトのインスタンス)
console.log(num.toString); //オブジェクトじゃないからこんなメソッドないはずがなぜか使える
console.log(num2.toString());

//jsのプリミティブ型はオブジェクトのように使おうとすると勝手にそれぞれの型に応じた「ラッパーオブジェクト」を裏で作ってくれる
var num = 55;
//こうした瞬間
console.log(num.toString());
//裏ではこんなコードが自動で走っている
//
var num_tmp = num; //一旦プリミティブ値を退避する
num.toString = function () {
  //文字列に変換するメソッド
};
//処理が完了するとラッパーオブジェクトは破壊され、普通のプリミティブ型に戻る
num = num_tmp; //num変数に退避させたプリミティブ値を入れ戻す
delete num_tmp; //作ったラッパーオブジェクトは捨てる

//*************************************************************
// オブジェクトは後から変更可能
//*************************************************************

//JSでは作ったオブジェクトやすでに用意されたネイティブなオブジェクトも変更できてしまう
//JSという言語自体をぶっ壊せるということでもある
//JAVAやPHPなど他の言語ではあり得ないことがJSではできる(一般的な言語は後から変更しようとするとエラーになる)
//後から変更できるのは自由度が高い反面、いつの間にか変更されていて苦づかず処理が進んでしまうバグの温床にもなる

var str = new String();
str.myFunc = function () {
  return "インスタンスに追加してしまった";
};
console.log(str.myFunc());
String.myFunc = function () {
  return "ネイティブオブジェクトにも追加してしまった";
};
console.log(String.myFunc());

//*************************************************************
// Objectオブジェクト
//*************************************************************

//全てのベースとなっているオブジェクト
//配列オブジェクトなども全てこのObjectがベースでできている

var arr = new Array("HTML", "CSS", "JS");
var arr = ["HTML", "CSS", "JS"];
console.log(arr);
arr.str = "追加してしまった";
console.log(arr);

//*************************************************************
// Globalオブジェクト
//*************************************************************

//ネイティブオブジェクトと違って、インスタンス化したり、メソッド呼び出ししたりできない
// var global = new Global(); //NG
// global.myFunc(); //NG

// GlobalオブジェクトはGlobal変数やGlobal関数を格納しておくためのオブジェクト(一番の親玉みたいなもの)
//GlobalオブジェクトはJSエンジンが初期化されたタイミングで自動で作られる
var str = "yamaguchi";
console.log(str);
console.log(window.str); //windowはGlobalオブジェクト。Globalオブジェクトは省略できる

//*************************************************************
// 関数
//*************************************************************

// JSの関数はややこしい。他の言語を習得している人が理解しづらい部分

//*************************************************************
// 関数の定義方法
//*************************************************************

// 関数の定義方法は3種類
// 1.function命令
// 2.Functionコンスストラクた
// 3.関数リテラル

// 1.function命令
function muFunc() {}

// 3.関数リテラル
// var myFunc = myFunc(){

// };
// myFunc = 72;

//*************************************************************
// 変数のスコープ→変数が使える範囲
//*************************************************************

//関数の外で定義するとグローバル変数
var globalVal = 75;
console.log(globalVal); //75
//関数の中で定義するとローカル変数
function myFunc() {
  var localVal = 81;
}
// console.log(localVal); //undefined

var val = 91;
function myFunc() {
  console.log(val); //undefined
  var val = 120;
}

//myFuncの中で読んだvalはローカル変数のvalを読んだことになる。ローカル変数はまだ未定義なのでundefinedになる。

//*************************************************************
// 関数の引数
//*************************************************************

//関数では、引数のチェックは行われない

function myFunc(num) {
  console.log(num);
}
myFunc(101);
myFunc(101, "第2引数を入れた"); //他のプログラミング言語ではエラーが出るがJSでは普通に処理される

//2つ関数を作ったらどっちで処理される？
function myFunc(num) {
  console.log("第1引数のみの関数");
}
function myFunc(num, str) {
  console.log("第2引数まである関数");
}
myFunc(110);
myFunc(120, "第2引数を入れた");

//同じ関数を上書きしただけ。PHPであれば別の関数として扱われる

//引数をチェック

//argumentsオブジェクトは関数内だけで使えるオブジェクトで、関数を作ると自動で作成される。
//関数で使う引数は全てargumentsオブジェクトで管理されている
function myFunc(num) {
  console.log(arguments[0]);
  console.log(arguments[1]);
}
myFunc(315, "第2引数を挿入");
//lengthでチェックする

// function myFunc(val1, val2) {
//   if (arguments.length !== 2) {
//     throw new Error("引数が不正です");
//   }
//   console.log(val1 + val2);
// }

// myFunc(330);

//*************************************************************
// this
//*************************************************************

//1.メソッド呼び出しパターン
//2 関数呼び出しパターン
//3 コンストラクタ呼び出しパターン
//4 apply,call呼び出しパターン

//メソッド呼び出しパターン
var myObject = {
  value: 10,
  show: function () {
    console.log(this.value);
    console.log(this);
  },
};
myObject.show();

//関数呼び出しパターン
myObject.show(); //メソッド呼び出し
show(); //関数呼び出し

function show() {
  console.log(this);
  this.value = 1;
}
show(); //関数呼び出しの場合のthisはグローバルオブジェクトを指す

//ちょっとややこしい例
var myObject = {
  show: function () {
    console.log(this.value); //1
    console.log(this); //myObject

    function myFunc() {
      console.log(this.value);
      console.log(this); //window メソッド呼び出しの中で「関数呼び出し」されているので
    }
  },
};
myObject.show();

//コンストラクタ呼び出しパターン
function MyObject(value) {
  this.myValue = value;
  this.myFunc = function () {
    this.myValue++;
  };
}
var myObject = new MyObject(0);
console.log(myObject.myValue); //0
myObject.myFunc();
console.log(myObject.myValue);

var myObject2 = new MyObject(3);
console.log(myObject.myValue); //3
myObject.myFunc();
console.log(myObject.myValue); //4

//thisはインスタンスを指す

//newをつけないと
var myObject = MyObject(0);
console.log(window);
console.log(window.myValue);
console.log(window.myFunc);
//ただの関数呼び出しになるのでthisはwondowを指すため、windowに入る

//4. apply,call呼び出しパターン
var myObject = {
  value: 1,
  show: function () {
    console.log(this.value);
  },
};
var yourObject = {
  value: 3,
};
myObject.show(); //1
myObject.show.apply(yourObject); //3
myObject.show.call(yourObject); //3

//*************************************************************
// プロトタイプ
//*************************************************************

//JSにはクラスという概念がない(ESから導入)
//クラスの代わりがプロトタイプ
//プロトタイプとはprototypeプロパティのこと
//prototypeに何か入れておけば、インスタンス化した時に引き継げる(オブジェクト指向でいうstaticプロパティやstaticメソッドが作れる)

//*************************************************************
// staticなメンバ
//*************************************************************

var Monster = function (name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.doAttack = function () {
    console.log(this.name + "は" + this.attack + "のダメージを与えた");
  };
};
var zombie = new Monster("ゾンビ", 100, 80);
var kimela = new Monster("キメラ", 150, 120);
console.log(zombie.doAttack());
console.log(kimela.doAttack());

//これではメソッドもコピーされて別々になる
//後からメソッドの中身を変更しようとするとそれぞれのインスタンスのメソッドを修正する必要がある

//prototypeを使った場合
var Monster = function (name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
};
Monster.prototype.doAttack = function () {
  console.log(this.name + "は" + this.attack + "のダメージを与えた");
};
var knight = new Monster("ナイト", 250, 150);
var madohand = new Monster("マドハンド", 140, 70);
knight.doAttack();
madohand.doAttack();

//インスタンス毎にメソッドを増やさないので、メモリの節約になる

//*************************************************************
// 後から追加できる
//*************************************************************
//インスタンス化した後にprototypeを追加しても全部のインスタンスが反映される

//*************************************************************
// プロトタイプチェーン
//*************************************************************

//prototypeを使ってオブジェクト指向でいう「継承」ができる仕組みのこと
//prototypeの中に別のインスタンスを入れておけば、そのインスタンスのプロパティやメソッドが利用できる。
//継承元のインスタンスが変われば、継承先にも反映される
var Creature = function () {};
Creature.prototype = {
  doAttack: function () {
    console.log(this.name + "は" + this.attack + "のダメージを与えた");
  },
};
var Monster = function (name, hp, attack, cry) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.doCry = function () {
    console.log(cry);
  };
};
var Human = function (name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.doRun = function () {
    console.log(this.name + "は全力で逃げた");
  };
};
Monster.prototype = new Creature();
Human.prototype = new Creature();

var gargoil = new Monster("ガーゴイル", 300, 200, "キエエエエエ");
var human = new Human("男", 300, 250);

gargoil.doCry();
gargoil.doAttack();
human.doAttack();
human.doRun();

//*************************************************************
// 高階関数
//*************************************************************

//関数自身を引数や戻り値として扱う関数のこと
function myFunc(arr, func) {
  for (var key in arr) {
    func(arr[key]);
  }
}
myFunc(["HTML", "CSS", "JS"], function (val) {
  console.log(val);
});

//*************************************************************
// アクティベーションオブジェクト
//*************************************************************
//関数呼び出し時に作成される目に見えない変数オブジェクトというものがあり、その目に見えない変数オブジェクトのことをアクティベーションオブジェクト(もしくはCallオブジェクト)という。
//アクティベーションオブジェクトには引数、ローカル変数だけでなく、argumenntsオブジェクト、thisが格納される。
//変数オブジェクトは関数の実行時に生成され、関数宣言しただけではアクセスすることができない
//myFunc()実行時に生成されるアクティベーションオブジェクト
// {
//   arguments:,
//   this:,
//   foo:,
//   bar:,
//   var1:,
//   var2:,
// }
function myFunc(foo, bar) {
  var var1, var2;
}

//*************************************************************
// スコープチェーン
//*************************************************************
//スコープチェーンとはJSがどんな順序でプロパティを参照するかを決めたルールのようなもの
//Callオブジェクト(アクティベーションオブジェクトともいう)は関数を呼び出す度に内部で自動生成されるオブジェクトで、関数内で関数内のローカル変数を管理している

//Globalオブジェクトのスコープ
var x = "Global";
var y = "Global";
//outerFuncのCallオブジェクトのスコープ
function outerFunc() {
  var x = "Local Outer";
  //innerFuncのCallオブジェクトのスコープ
  function innerFunc() {
    var x = "Local Inner";
    console.log(x); //Local Inner
    console.log(y); //Global
    // console.log(z); //undefined
  }
  console.log(x); //Local Outer
  innerFunc();
}
console.log(x); //Global
outerFunc();

//*************************************************************
// クロージャ
//*************************************************************
//普通の言語を習っていると頭がこんがらがる部分
//「自分を囲むスコープにある変数を参照できる関数」がクロージャ
//関数の中のローカル変数はずっと保持される
function outerFunc() {
  var value = 1;

  function innerFunc() {
    console.log(++value);
  }
  return innerFunc;
}
var fn1 = outerFunc(); //innerFuncという関数オブジェクトが変数に格納される
fn1(); //2
fn1(); //3
fn1(); //4
//innerFuncのCallオブジェクトはouterFuncのCallオブジェクトのローカル変数を参照しているので破棄されずに残ったまま

//プライベート変数を持ったクラスが作れる
var Module = function () {
  var count = 0; //プロパティ(プライベート)

  return {
    //メソッド
    increment: function () {
      console.log(count++);
    },
  };
};
var md1 = new Module();
var md2 = new Module();
md1.count; //undefined
md1.increment(); //0
md1.increment(); //1
md2.count; //undefined
md2.increment(); //0
md2.increment(); //2

//こうやっても同じように見えるが、外からプロパティにアクセスできてしまう
var Module = function () {
  this.count = 0;
  this.increment = function () {
    console.log(this.count++);
  };
};

var md1 = new Module();
var md2 = new Module();
md1.increment(); //0
md1.increment(); //1
md2.increment(); //0
md2.increment(); //1
md2.increment(); //2
md1.count; //2
md2.count; //3

//おさらい：関数はnewして使える。newした場合はインスタンスを返す。その場合は関数のことを「コンストラクタ」と呼ぶ。
