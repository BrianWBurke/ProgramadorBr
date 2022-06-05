
var nasc = prompt("Descubra o dia da semana em que você nasceu. Coloque a data de nascimento no modo AAAA/MM/DD")
var d = new Date(nasc)
var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
alert(dias[d.getDay()]);