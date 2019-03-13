var i = 0;
var txt = 'NAŠ TIM';
var speed = 5;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo4").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}