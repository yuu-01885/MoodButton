const moods = [
  { text: "今日はいい日になりそう！", color: "#fce4ec" },
  { text: "少し疲れてるかも", color: "#e3f2fd" },
  { text: "集中できそうな気分", color: "#e8f5e9" },
  { text: "ゆっくり休みたい", color: "#fffde7" },
  { text: "新しいことに挑戦したい！", color: "#ede7f6" },
  { text: "ワクワクしてる", color: "#fff3e0" },
  { text: "ちょっと不安だけど頑張る", color: "#e0f2f1" }
];

function changeMood() {
  const randomIndex = Math.floor(Math.random() * moods.length);
  const mood = moods[randomIndex];

document.getElementById("message").textContent = mood.text;

  // 背景だけ色を変える
  document.documentElement.style.backgroundColor = mood.color;

  // 枠は白のまま固定
  document.querySelector(".container").style.backgroundColor = "#ffffff";
}
