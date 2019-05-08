let r = 45;

function Merkur() {
  textAlign(CENTER)
  angleMode(DEGREES)
  imageMode(CENTER)

  this.x = 75;
  this.y = 0;
  this.x1;
  this.y1;
  this.d;

  this.sine = sin(0.047)
  this.cosine = cos(0.047)

  this.show = function() {
    this.x1 = this.x * this.cosine - this.y * this.sine
    this.y1 = this.x * this.sine + this.y * this.cosine

    this.x = this.x1
    this.y = this.y1
    

    image(mercimg, this.x, this.y, r, r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    //print(this.d)
    return (this.d < 930 && this.d > 900)
  }

  this.txt = function() {
    push();
    translate(width / 2, height / 2);
    textSize(20);
    stroke(0)
    fill(0, 255, 0)
    text(Number((masa.value() * 0.38).toFixed(2)) + " kg", this.x, this.y);
  }

}

function Venera() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 150;
  this.y = 0;
  this.x1;
  this.y1;
  this.d;

  this.sine = sin(0.035)
  this.cosine = cos(0.035)

  this.show = function() {
    this.x1 = this.x * this.cosine - this.y * this.sine
    this.y1 = this.x * this.sine + this.y * this.cosine

    this.x = this.x1
    this.y = this.y1
    

    image(venimg, this.x, this.y, r, r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return (this.d < 930 && this.d > 900)
  }

  this.txt = function() {
    push();
    translate(width / 2, height / 2);
    textSize(20);
    stroke(0)
    fill(0, 255, 0)
    text(Number((masa.value() * 0.903).toFixed(2)) + " kg", this.x, this.y);
  }
}

function Zemlja() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 225;
  this.y = 0;
  this.x1;
  this.y1;
  this.d;

  this.sine = sin(0.029)
  this.cosine = cos(0.029)

  this.show = function() {
    this.x1 = this.x * this.cosine - this.y * this.sine
    this.y1 = this.x * this.sine + this.y * this.cosine

    this.x = this.x1
    this.y = this.y1
    

    image(zemimg, this.x, this.y, r, r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return (this.d < 930 && this.d > 900)
  }

  this.txt = function() {
    push();
    translate(width / 2, height / 2);
    textSize(20);
    stroke(0)
    fill(0, 255, 0)
    text(Number((masa.value() * 1).toFixed(2)) + " kg", this.x, this.y);
  }


}

function Mars() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 300;
  this.y = 0;
  this.x1;
  this.y1;
  this.d;

  this.sine = sin(0.024)
  this.cosine = cos(0.024)

  this.show = function() {
    this.x1 = this.x * this.cosine - this.y * this.sine
    this.y1 = this.x * this.sine + this.y * this.cosine

    this.x = this.x1
    this.y = this.y1
    

    image(marsimg, this.x, this.y, r, r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY);
    return (this.d < 930 && this.d > 900)
  }

  this.txt = function() {
    push();
    translate(width / 2, height / 2);
    textSize(20);
    stroke(0)
    fill(0, 255, 0)
    text(Number((masa.value() * 0.38).toFixed(2)) + " kg", this.x, this.y);
  }
}

function Jupiter() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 375;
  this.y = 0;
  this.x1;
  this.y1;
  this.d;

  this.sine = sin(0.013)
  this.cosine = cos(0.013)

  this.show = function() {
    this.x1 = this.x * this.cosine - this.y * this.sine
    this.y1 = this.x * this.sine + this.y * this.cosine

    this.x = this.x1
    this.y = this.y1

    image(jupimg, this.x, this.y, r, r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return (this.d < 930 && this.d > 900)
  }

  this.txt = function() {
    push();
    translate(width / 2, height / 2);
    textSize(20);
    stroke(0)
    fill(0, 255, 0)
    text(Number((masa.value() * 2.6375).toFixed(2)) + " kg", this.x, this.y);
  }
}

function Saturn() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 450;
  this.y = 0;
  this.x1;
  this.y1;
  this.d;

  this.sine = sin(0.009)
  this.cosine = cos(0.009)

  this.show = function() {
    this.x1 = this.x * this.cosine - this.y * this.sine
    this.y1 = this.x * this.sine + this.y * this.cosine

    this.x = this.x1
    this.y = this.y1
  

    image(satimg, this.x, this.y, 80, r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return (this.d < 930 && this.d > 900)
  }

  this.txt = function() {
    push();
    translate(width / 2, height / 2);
    textSize(20);
    stroke(0)
    fill(0, 255, 0)
    text(Number((masa.value() * 1.16).toFixed(2)) + " kg", this.x, this.y);
  }
}

function Uran() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 525;
  this.y = 0;
  this.x1;
  this.y1;
  this.d;

  this.sine = sin(0.006)
  this.cosine = cos(0.006)

  this.show = function() {
    this.x1 = this.x * this.cosine - this.y * this.sine
    this.y1 = this.x * this.sine + this.y * this.cosine

    this.x = this.x1
    this.y = this.y1
    

    image(uranimg, this.x, this.y, r, r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return (this.d < 930 && this.d > 900)
  }

  this.txt = function() {
    push();
    translate(width / 2, height / 2);
    textSize(20);
    stroke(0)
    fill(0, 255, 0)
    text(Number((masa.value() * 1.17).toFixed(2)) + " kg", this.x, this.y);
  }
}

function Neptun() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 600;
  this.y = 0;
  this.x1;
  this.y1;
  this.d;

  this.sine = sin(0.005)
  this.cosine = cos(0.005)

  this.show = function() {
    this.x1 = this.x * this.cosine - this.y * this.sine
    this.y1 = this.x * this.sine + this.y * this.cosine

    this.x = this.x1
    this.y = this.y1
    

    image(nepimg, this.x, this.y, 60, 60)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return (this.d < 930 && this.d > 900)
  }

  this.txt = function() {
    push();
    translate(width / 2, height / 2);
    textSize(20);
    stroke(0)
    fill(0, 255, 0)
    text(Number((masa.value() * 1.125).toFixed(2)) + " kg", this.x, this.y);
  }
}
