let r = 45;

function Merkur() {
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

    image(mercimg,this.x, this.y, r,r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return(this.d < 640 && this.d > 620)
  }
}

function Venera(){
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 125;
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

    image(venimg,this.x,this.y,r,r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return(this.d < 640 && this.d > 620)
  }
}

function Zemlja(){
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 175;
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

    image(zemimg,this.x,this.y,r,r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return(this.d < 640 && this.d > 620)
  }
}

function Mars() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 225;
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

    image(marsimg,this.x,this.y,r,r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY);
    return(this.d < 640 && this.d > 620)
  }
}

function Jupiter() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 275;
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

    image(jupimg,this.x,this.y,r,r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return(this.d < 640 && this.d > 620)
  }
}

function Saturn() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 325;
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

    image(satimg,this.x,this.y,80,r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return(this.d < 640 && this.d > 620)
  }
}

function Uran() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 375;
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

    image(uranimg,this.x,this.y,r,r)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return(this.d < 640 && this.d > 620)
  }
}

function Neptun() {
  angleMode(DEGREES)
  imageMode(CENTER);

  this.x = 425;
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

    image(nepimg,this.x,this.y,60,60)

  }

  this.over = function() {
    this.d = dist(this.x, this.y, mouseX, mouseY)
    return(this.d < 640 && this.d > 620)
  }
}
