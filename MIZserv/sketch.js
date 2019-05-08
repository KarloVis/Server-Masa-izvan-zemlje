let btn, masa, txtmasa, test, error,naslov;
let mercimg, venimg, zemimg, marsimg, jupimg,
  satimg, uranimg, nepimg, sunimg, bg, moonimg;

let mercbool = false,
  venbool = false,
  zembool = false,
  marsbool = false,
  jupbool = false,
  satbool = false,
  uranbool = false,
  nepbool = false,
  moonbool = false;

function preload() {
  mercimg = loadImage('planet-images/merc.png')
  venimg = loadImage('planet-images/ven.png')
  zemimg = loadImage('planet-images/zem.png')
  marsimg = loadImage('planet-images/mars.png')
  jupimg = loadImage('planet-images/jup.png')
  satimg = loadImage('planet-images/sat.png')
  uranimg = loadImage('planet-images/uran.png')
  nepimg = loadImage('planet-images/nep.png')
  sunimg = loadImage('planet-images/sun.png')
  moonimg = loadImage('planet-images/moon.png')
  bg = loadImage('planet-images/universe_bg.png')
}

function setup() {
  canvas = createCanvas(1300,1300);
  canvas.position(300,100);
  mooncanvas = new Mjesec()
  canvasMoon.hide();
  naslov = createP('Masa izvan Zemlje')
  txtmasa = createP("Unesite svoju masu:");
  txtmasa.style("font-size", "18pt");
  // btn = select('#btn');
  masa = createInput("");

  merc = createP("");
  ven = createP("");
  zem = createP("");
  mrs = createP("");
  jup = createP("");
  sat = createP("");
  urn = createP("");
  nep = createP("");
  moon = createP("");
  error = createP("");


  merkur = new Merkur();
  venera = new Venera();
  zemlja = new Zemlja();
  mars = new Mars();
  jupiter = new Jupiter();
  saturn = new Saturn();
  uran = new Uran();
  neptun = new Neptun();
}

function draw() {
  push();
  translate(width / 2, height / 2)
  background(0)
  //sphere()
  image(bg, 0, 0, width, height)
  txtmasa.position(30, 110)
  //txtmasa.style('color','white')
  // btn.position(100, 150);
  masa.position(40, 175);
  naslov.position(0,65)
  naslov.style('font-size','25pt')
  //naslov.style('color','white')
  // btn.mousePressed(errorCheck);
  // fill(255, 255, 0);
  // noStroke();
  // texture(sunimg)
  // sphere(100)
  image(sunimg, 0, 0, 100, 100)
  // ellipse(0, 0, 75, 75);

  let r = 150;

  //     for (let i = 0; i < 8; i++) {
  //       noFill();
  //       stroke(255);
  //       ellipse(0, 0, r);
  //       r += 100;

  //     }
  pop();
  // push();
  // if(mercbool){
  //  merkur.txt() 
  // }
  // pop()

  push();
  translate(width / 2, height / 2)
  merkur.show();
  pop();

  push();
  if (mercbool) {
    merkur.txt()
  }
  pop()


  push();
  translate(width / 2, height / 2)
  venera.show();
  pop();

  push();
  if (venbool) {
    venera.txt()
  }
  pop()

  push();
  translate(width / 2, height / 2)
  zemlja.show();
  pop();

  push();
  if (zembool) {
    zemlja.txt()
  }
  pop()


  push();
  translate(width / 2, height / 2)
  mars.show();
  pop();

  push();
  if (marsbool) {
    mars.txt()
  }
  pop()

  push();
  translate(width / 2, height / 2)
  jupiter.show();
  pop();

  push();
  if (jupbool) {
    jupiter.txt()
  }
  pop()

  push();
  translate(width / 2, height / 2)
  saturn.show();
  pop();

  push();
  if (satbool) {
    saturn.txt()
  }
  pop()

  push();
  translate(width / 2, height / 2)
  uran.show();
  pop();

  push();
  if (uranbool) {
    uran.txt()
  }
  pop()

  push();
  translate(width / 2, height / 2)
  neptun.show();
  pop();

  push();
  if (nepbool) {
    neptun.txt()
  }
  pop()

}

function mousePressed() {
  if (merkur.over()) {
    mercbool = true;
    // merc.html("Merkur: " +
    //   Number((masa.value() * 0.38).toFixed(2)) + " kg");
    // //merc.style("color", "white");
    // merc.style("font-size", "24pt");
    // merc.position(20, 200);
  } else if (venera.over()) {
    venbool = true;
    // ven.html("Venera: " +
    //   Number((masa.value() * 0.903).toFixed(2)) + " kg");
    // //ven.style("color", "white");
    // ven.style("font-size", "24pt");
    // ven.position(20, 250);
  } else if (zemlja.over()) {
    // zembool = true;
    canvasMoon.show()
    canvas.hide()
    //   zem.html("Zemlja: " + masa.value() * 1 + "kg");
    // //zem.style("color", "white");
    // zem.style("font-size", "24pt");
    // zem.position(20, 300);
  } else if (mars.over()) {
    marsbool = true;
    // mrs.html("Mars: " +
    //   Number((masa.value() * 0.38).toFixed(2)) + " kg");
    // //mars.style("color", "white");
    // mrs.style("font-size", "24pt");
    // mrs.position(20, 350);
  } else if (jupiter.over()) {
    jupbool = true;
    // jup.html("Jupiter: " +
    //   Number((masa.value() * 2.6375).toFixed(2)) + " kg");
    // //jup.style("color", "white");
    // jup.style("font-size", "24pt");
    // jup.position(20, 400);
  } else if (saturn.over()) {
    satbool = true;
    // sat.html("Saturn: " +
    //   Number((masa.value() * 1.16).toFixed(2)) + " kg");
    // //sat.style("color", "white");
    // sat.style("font-size", "24pt");
    // sat.position(20, 450);
  } else if (uran.over()) {
    uranbool = true;
    // urn.html("Uran: " +
    //   Number((masa.value() * 1.17).toFixed(2)) + " kg");
    // //uran.style("color", "white");
    // urn.style("font-size", "24pt");
    // urn.position(20, 500);
  } else if (neptun.over()) {
    nepbool = true;
    // nep.html("Neptun: " +
    //   Number((masa.value() * 1.125).toFixed(2)) + " kg");
    // //nep.style("color", "white");
    // nep.style("font-size", "24pt");
    // nep.position(20, 550);
  }
}

// function doubleClicked(){
//  if(zemlja.over()){
//   canvasMoon.show() 
//    canvas.hide()
//  }
// }
