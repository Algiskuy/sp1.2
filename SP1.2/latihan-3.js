var c = 34; //celsius
var k = 273.15; //rumus kelvin tambahkan angka 273.15
var f = 9 / 5 + 32; //rumus fahrenheit (9/5) * celsius + 32
var r = 4 / 5; //rumus reamur 4/5

var hasil1 = c + k;
var hasil2 = (9 / 5) * c + 32;
var hasil3 = r * c;

document.write("13. I>hasil dari 34 + 273.15 =", hasil1, "°k" + "<br>");
document.write(
  "&nbsp &nbsp&nbsp II>hasil dari 34 + 273.15 =",
  hasil2,
  "°f" + "<br>"
);
document.write("&nbsp &nbsp&nbspIII>hasil dari 34 + 273.15 =", hasil3, "°r");
