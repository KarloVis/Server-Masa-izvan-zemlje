let btn, masa, txtmasa, test, error;
let mercimg,venimg,zemimg,marsimg,jupimg,
    satimg,uranimg,nepimg,sunimg,bg;


function preload(){
  mercimg = loadImage('planet-images/merc.png')
  venimg = loadImage('planet-images/ven.png')
  zemimg = loadImage('planet-images/zem.png')
  marsimg = loadImage('planet-images/mars.png')
  jupimg = loadImage('planet-images/jup.png')
  satimg = loadImage('planet-images/sat.png')
  uranimg = loadImage('planet-images/uran.png')
  nepimg = loadImage('planet-images/nep.png')
  sunimg = loadImage('planet-images/sun.png')
  bg = loadImage('planet-images/universe_bg.png')
}

function setup() {
  canvas = createCanvas(900, 900);
  canvas.position(430, 100)
  txtmasa = createP("Unesite svoju masu:");
  txtmasa.style("font-size", "18pt");
  btn = select('#btn');
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
  //background(0)
  image(bg,0,0,width,height)
  txtmasa.position(30, 50)
  btn.position(100, 150);
  masa.position(40, 125);
  btn.mousePressed(errorCheck);
  image(sunimg,0,0,100,100)

  let r = 150;

//   for (let i = 0; i < 8; i++) {
//     noFill();
//     stroke(255);
//     ellipse(0, 0, r);
//     r += 100;

//   }
  pop();

  push();
  translate(width / 2, height / 2)
  merkur.show();
  pop();

  push();
  translate(width / 2, height / 2)
  venera.show();
  pop();

  push();
  translate(width / 2, height / 2)
  zemlja.show();
  pop();

  push();
  translate(width / 2, height / 2)
  mars.show();
  pop();

  push();
  translate(width / 2, height / 2)
  jupiter.show();
  pop();

  push();
  translate(width / 2, height / 2)
  saturn.show();
  pop();

  push();
  translate(width / 2, height / 2)
  uran.show();
  pop();

  push();
  translate(width / 2, height / 2)
  neptun.show();
  pop();

}

function mousePressed() {
  if (merkur.over()) {
    merc.html("Merkur: " +
      Number((masa.value() * 0.38).toFixed(2)) + " kg");
    //merc.style("color", "white");
    merc.style("font-size", "24pt");
    merc.position(20, 200);
  } else if (venera.over()) {
    ven.html("Venera: " +
      Number((masa.value() * 0.903).toFixed(2)) + " kg");
    //ven.style("color", "white");
    ven.style("font-size", "24pt");
    ven.position(20, 250);
  }else if(zemlja.over()){
    zem.html("Zemlja: " + masa.value() * 1 + "kg");
  //zem.style("color", "white");
  zem.style("font-size", "24pt");
  zem.position(20, 300);
  }else if(mars.over()){
   mrs.html("Mars: " +
    Number((masa.value() * 0.38).toFixed(2)) + " kg");
  //mars.style("color", "white");
  mrs.style("font-size", "24pt");
  mrs.position(20, 350);
  }else if(jupiter.over()){
    jup.html("Jupiter: " +
    Number((masa.value() * 2.6375).toFixed(2)) + " kg");
  //jup.style("color", "white");
  jup.style("font-size", "24pt");
  jup.position(20, 400);
  }else if(saturn.over()){
    sat.html("Saturn: " +
    Number((masa.value() * 1.16).toFixed(2)) + " kg");
  //sat.style("color", "white");
  sat.style("font-size", "24pt");
  sat.position(20, 450);
  }else if(uran.over()){
    urn.html("Uran: " +
    Number((masa.value() * 1.17).toFixed(2)) + " kg");
  //uran.style("color", "white");
  urn.style("font-size", "24pt");
  urn.position(20, 500);
  }else if(neptun.over()){
    nep.html("Neptun: " +
    Number((masa.value() * 1.125).toFixed(2)) + " kg");
  //nep.style("color", "white");
  nep.style("font-size", "24pt");
  nep.position(20, 550);
  }
}
