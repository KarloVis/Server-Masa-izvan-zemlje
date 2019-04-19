let canvasMoon;

function Moon() {
  let theta = 0.1001;

  let mooncnvs = function(p) {

    p.setup = function() {
      canvasMoon = p.createCanvas(900, 900)
      canvasMoon.position(430, 100)
    }

    let x = 1;
    let y = 350;
    let d, d2;

    p.draw = function() {
      p.imageMode(CENTER)
      //p.background(0);
      p.push();
      p.translate(p.width / 2, p.height / 2)

      p.image(bg, 0, 0, 900, 900)
      p.pop();

      p.push();
      p.translate(p.width / 2, p.height / 2)
      //p.fill(0, 0, 255)
      //p.noStroke();
      p.image(zemimg, 0, 0, 400, 400)
      p.pop()

      p.push()
      p.textSize(20)
      p.fill(255)
      p.text('BACK',800,50)
      p.pop()

      p.fill(200,50)
      p.stroke(255);
      p.strokeWeight(2)
      p.rect(790,25,75,35)


      p.push()
      p.translate(p.width / 2, p.height / 2)

      let sine = sin(theta)
      let cosine = cos(theta)
      let x1 = x * cosine - y * sine
      let y1 = x * sine + y * cosine
      x = x1;
      y = y1;

      //p.fill(220);
      p.image(moonimg, x, y, 100, 100)

      d = p.dist(x, y, p.mouseX, p.mouseY)
      d2 = p.dist(p.width / 2, p.height / 2, p.mouseX, p.mouseY)
    }
    p.mousePressed = function() {
      if (d > 610 && d < 660) {

        moon.html("Mjesec: " +
          Number((masa.value() * 0.1653).toFixed(2)) + " kg");
        //moon.style("color", "white");
        moon.style("font-size", "24pt");
        moon.position(20, 600);

      } else if (d2 > 0 && d2 < 195) {
        zem.html("Zemlja: " + masa.value() * 1 + "kg");
        //zem.style("color", "white");
        zem.style("font-size", "24pt");
        zem.position(20, 300);
      }else if(p.mouseX > 790 && p.mouseX < 865 && p.mouseY > 25 && p.mouseY < 60){
       canvasMoon.hide()
        canvas.show()
      }
    }

  }

  let myp5 = new p5(mooncnvs);
}
