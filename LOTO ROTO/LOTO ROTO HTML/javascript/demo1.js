var i = 0;
var txt = 'Donirajte, dok očekujete pogodak!Svaka Vaša uplaćena kombinacija je donacija humanitarnom fondu!Vaša donacija će stvarno promeniti nečiji život.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
