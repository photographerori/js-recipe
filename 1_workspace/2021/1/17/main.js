// document.getElementByIdでhtmlの要素を取得する
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const feedback = document.getElementById("feedback")

// ボタンをクリックした時の処理を書いていく
btn1.onclick = function () {
  // textContentで表示する文を書き換えられる
  feedback.textContent = "不正解！\nいつかニューヨーク行きたい"
}

btn2.onclick = function () {
  feedback.textContent = "不正解！\n友達曰くメルボルンが良いらしい"
}

btn3.onclick = function () {
  feedback.textContent = "正解！\n実はスウェーデン人はみんな英語しゃべれるんですー"
}

// オブジェクト自己紹介
// **定数takahiroは書き換えられないが,valueは変えられる**
const takahiro = {
  // key: value
  age: 22, //→50
  username: "たかひろ",
  // []配列の中に複数のvalueをかけます
  hobbies: ["読書", "映画", "買い物"],
  // オブジェクトの中にオブジェクトもかけるよ
  name: {
    first: "takahiro",
    last: "orihara"
  },
  // オブジェクトの中に関数もかける
  // 定義をしただけで実行されない
  Hello: function () {
    console.log("Hello GeekSalon")
  }
}

// NG!!!!!
// takahiro = "sacky"

console.log(takahiro.age) //22

// ageを書き換える
takahiro.age = 50

console.log(takahiro.age) // 50

takahiro.hobbies[0] // 読書
takahiro.hobbies[1] // 映画
takahiro.hobbies[2] // 買い物

takahiro.Hello() // 関数を実行
