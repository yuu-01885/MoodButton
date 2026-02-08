const messages = [
  "今日はいい日になりそう！",
  "少し疲れてるかも",
  "集中できそう",
  "ゆっくり休もう",
  "新しいことに挑戦したい気分"
];

const colors = [
  "#fce4ec",
  "#e3f2fd",
  "#e8f5e9",
  "#fffde7",
  "#ede7f6"
];

function changeMood() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").textContent = messages[randomIndex];
  document.body.style.backgroundColor = colors[randomIndex];
}