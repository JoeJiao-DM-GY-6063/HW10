let song;
let fft;
let water = []; 

function preload() {
  song = loadSound('BB metal.mp3'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(); 
  noFill();
}

function draw() {
  background(0);
  let spectrum = fft.analyze(); 
  drawSpectrum(spectrum);

  
  if (frameCount % 5 === 0) { // 每5帧
    let energy = fft.getEnergy(20, 200);
    let ripple = {
      x: width / 2,
      y: height / 2,
      radius: 100,
      alpha: 255,
      energy: map(energy, 0, 255, 100, 500), 
    };
    water.push(ripple);
  }

  
  for (let i = water.length - 1; i >= 0; i--) {
    let ripple = water[i]; 
    
    stroke(255, 100, 150, ripple.alpha); 
    strokeWeight(30);
    ellipse(ripple.x, ripple.y, ripple.radius * 2);

    
    ripple.radius += 188;
    ripple.alpha -= 50;

   
  }
}

function drawSpectrum(spectrum) {
  let bars = 20;
  let barWidth = width / bars;

  for (let i = 0; i < bars; i++) {
    let x = i * barWidth;
    let y = height - spectrum[i];
    let barHeight = map(spectrum[i], 0, 255, 0, height);

    let r = map(i, 0, bars, 0, 255);
    let g = 0;
    let b = map(i, 0, bars, 255, 0);

    stroke(r, g, b);
    line(x, height, x, height - barHeight);
  }
}

function mousePressed() {
  if (!song.isPlaying()) {
    song.play();
  }
}
