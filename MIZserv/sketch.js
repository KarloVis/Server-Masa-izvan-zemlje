let btn;
let masa;
let test;

let merc;
let ven;
let zem;
let mars;
let jup;
let sat;
let uran;
let nep;
let moon;

function setup() {
  createCanvas(300, 300);
  btn = select('#btn');
  masa = createInput("");

  merc = createP("");
  ven = createP("");
  zem = createP("");
  mars = createP("");
  jup = createP("");
  sat = createP("");
  uran = createP("");
  nep = createP("");
  moon = createP("");
}

function tablica() {
  merc.html("");
  ven.html("");
  zem.html("");
  mars.html("");
  jup.html("");
  sat.html("");
  uran.html("");
  nep.html("");
  moon.html("");

  merc.html("Merkur: " + masa.value() * 0.38);
  //merc.style("color", "white");
  merc.style("font-size", "24pt");
  merc.position(20, 200);

  ven.html("Venera: " + masa.value() * 0.903);
  //ven.style("color", "white");
  ven.style("font-size", "24pt");
  ven.position(20, 250);

  zem.html("Zemlja: " + masa.value() * 1);
  //zem.style("color", "white");
  zem.style("font-size", "24pt");
  zem.position(20, 300);

  mars.html("Mars: " + masa.value() * 0.38);
  //mars.style("color", "white");
  mars.style("font-size", "24pt");
  mars.position(20, 350);

  jup.html("Jupiter: " + masa.value() * 2.6375);
  //jup.style("color", "white");
  jup.style("font-size", "24pt");
  jup.position(20, 400);

  sat.html("Saturn: " + masa.value() * 1.16);
  //sat.style("color", "white");
  sat.style("font-size", "24pt");
  sat.position(20, 450);

  uran.html("Uran: " + masa.value() * 1.17);
  //uran.style("color", "white");
  uran.style("font-size", "24pt");
  uran.position(20, 500);

  nep.html("Neptun: " + masa.value() * 1.125);
  //nep.style("color", "white");
  nep.style("font-size", "24pt");
  nep.position(20, 550);

  moon.html("Mjesec: " + masa.value() * 0.1653);
  //moon.style("color", "white");
  moon.style("font-size", "24pt");
  moon.position(20, 600);
}


function draw() {
  clear()
  btn.position(100, 100);
  masa.position(40, 75);
  btn.mousePressed(tablica);

}
