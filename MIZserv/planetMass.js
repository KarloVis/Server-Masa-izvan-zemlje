let merc, ven, zem, mrs, jup, sat, uran, nep, moon;

function clearTable() {
  merc.html("");
  ven.html("");
  zem.html("");
  mrs.html("");
  jup.html("");
  sat.html("");
  urn.html("");
  nep.html("");
  moon.html("");
  error.html("");
}

function errorCheck() {
  test = masa.value() * 1;

  if (isNaN(test)) {

    clearTable();


    error.html("PLEASE ENTER A NUMBER");
    error.style("color", "red");
    error.style("font-size", "30pt");
    error.position(20, 200)

  } else {
    tablica();
  }
}

function tablica() {

  clearTable();

  merc.html("Merkur: " +
    Number((masa.value() * 0.38).toFixed(2)) + " kg");
  //merc.style("color", "white");
  merc.style("font-size", "24pt");
  merc.position(20, 200);

  ven.html("Venera: " +
    Number((masa.value() * 0.903).toFixed(2)) + " kg");
  //ven.style("color", "white");
  ven.style("font-size", "24pt");
  ven.position(20, 250);

  zem.html("Zemlja: " + masa.value() * 1 + "kg");
  //zem.style("color", "white");
  zem.style("font-size", "24pt");
  zem.position(20, 300);

  mrs.html("Mars: " +
    Number((masa.value() * 0.38).toFixed(2)) + " kg");
  //mars.style("color", "white");
  mrs.style("font-size", "24pt");
  mrs.position(20, 350);

  jup.html("Jupiter: " +
    Number((masa.value() * 2.6375).toFixed(2)) + " kg");
  //jup.style("color", "white");
  jup.style("font-size", "24pt");
  jup.position(20, 400);

  sat.html("Saturn: " +
    Number((masa.value() * 1.16).toFixed(2)) + " kg");
  //sat.style("color", "white");
  sat.style("font-size", "24pt");
  sat.position(20, 450);

  urn.html("Uran: " +
    Number((masa.value() * 1.17).toFixed(2)) + " kg");
  //uran.style("color", "white");
  urn.style("font-size", "24pt");
  urn.position(20, 500);

  nep.html("Neptun: " +
    Number((masa.value() * 1.125).toFixed(2)) + " kg");
  //nep.style("color", "white");
  nep.style("font-size", "24pt");
  nep.position(20, 550);

  moon.html("Mjesec: " +
    Number((masa.value() * 0.1653).toFixed(2)) + " kg");
  //moon.style("color", "white");
  moon.style("font-size", "24pt");
  moon.position(20, 600);
}
