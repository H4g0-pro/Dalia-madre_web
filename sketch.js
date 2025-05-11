let colores = ["#BAA0DE", "#C7A8EA", "#D9B8F1", "#EAD3FA", "#F3E6FD"];

function setup() {
  createCanvas(800, 800);
  background(16); // Fondo oscuro similar a "#101010"
  noLoop();
}

function draw() {
  // Dibuja la flor
  dibujar_petalos();
  centro_flor();
  rama();
  hoja(-34, -210, 220, 1.2);
  hoja(-10, -210, 300, 1.1);
  firma();
}

function petalo_alargado(largo, ancho) {
  beginShape();
  for (let i = 0; i < 2; i++) {
    arc(0, 0, largo, ancho, 0, PI / 3);
    rotate(TWO_PI / 2);
  }
  endShape(CLOSE);
}

function dibujar_petalos() {
  for (let capa = 0; capa < colores.length; capa++) {
    fill(colores[capa]);
    let num_petalos = 16 + capa * 2;
    let radio = 40 + capa * 15;
    for (let i = 0; i < num_petalos; i++) {
      push();
      translate(width / 2, height / 2);
      rotate((i * TWO_PI) / num_petalos);
      translate(radio, 0);
      petalo_alargado(radio, 60);
      pop();
    }
  }
}

function centro_flor() {
  // Círculo central
  fill("#FFD700");
  ellipse(width / 2, height / 2, 56);
  
  // Semilla interna
  fill("#5C2E00");
  ellipse(width / 2, height / 2, 40);
}

function rama() {
  push();
  translate(width / 2, height / 2 + 60);
  rotate(-PI / 4);
  stroke("#4E2E28");
  strokeWeight(8);
  line(0, 0, 100, 0);
  pop();
}

function hoja(x, y, direccion, tamaño = 1) {
  push();
  translate(x, y);
  rotate(radians(direccion));
  fill("#2F873E");
  beginShape();
  for (let i = 0; i < 2; i++) {
    arc(0, 0, 50 * tamaño, 50 * tamaño, 0, PI / 3);
    rotate(PI);
  }
  endShape(CLOSE);
  pop();
}

function firma() {
  fill("white");
  textAlign(CENTER);
  textSize(16);
  let mensaje = "Feliz Día Madre.    Gracias por tu amor incondicional, tu fuerza silenciosa y tu corazón inmenso. Eres la raíz que sostiene, la flor que embellece y el sol que guía. Que Dios te bendiga siempre.";
  text(mensaje, width / 2, height - 30);
}
