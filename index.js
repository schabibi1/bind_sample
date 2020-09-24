////////////////// 例１: thisのbind //////////////////
// 役割: thisの値の修正
let person = {
  name: 'Mike'
};

function sayHi() {
  console.log(this);
  console.log(`hey ${this.name}`);
  return `hey ${this.name}`;
}

// 以下のbindあり、なしをそれぞれコメントアウトを外して反映と、取得されているthisの値に着目しましょう

// bindなし: thisの値がwindow。
// person.nameが取得されずheyしかアウトプットされない
// const hi = sayHi();
// console.log(hi);

// bindあり: bindによってthisの値がperson.nameで維持される
// 思いどおりのアウトプット、hey Mikeが出力される
// const hi = sayHi.bind(person);
// console.log(hi());



////////////////// 例２: 引数のbind //////////////////
// 役割: 引数Aと引数B...と複数引数がある場合に、特定の引数の値を一度指定してしまえば使いまわせるようにする

// 関数send(from, to)を実装します。
// 引数from=送信者 はいつも同じ人が送信するとします。
// 引数fromを一度指定したら、何度も指定しなくても良いようにします。

// 引数のbind構文:
// let bound = func.bind(context, [arg1], [arg2], ...);

function send(from, to) {
  let message = `${from} has sent an email to ${to}.`;
  return console.log(message);
}

// 以下のbindありとなしの呼び出し方をそれぞれコメントアウトして反映を見ましょう

// bindあり: 引数1は値が固定され、引数2が値が変わっても引数は固定できている
// func.bind(修正される対象, [引数1], [引数2]);
//let sent = send.bind(null, 'Tom');
// sent('Karen');
// sent('Bob');
// sent('Lee');

// Bindなし: 引数1の固定ができないので、send('Tom', '引数2の値')と毎回指定をしなければならない
// let sent = send('Tom');
// sent('Karen');
// sent('Bob');
// sent('Lee');