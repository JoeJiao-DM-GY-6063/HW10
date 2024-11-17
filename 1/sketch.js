let song;
let peaks = [];
let peakCount;
let fallImage;

function preload() {
  song = loadSound('TheimperialMarch.mp3');
  fallImage = loadImage('fall.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  peaks = song.getPeaks(5 * width); 
  peakCount = peaks.length / 40;

  noStroke();
}

function draw() {
  background(50);
  let blockSize = width / peakCount; 
  let blockHeightBase = height / 10; 

  for (let i = 0; i < peakCount; i++) {
    let x = i * blockSize;
    let energy = map(peaks[i], -1, 1, 0, height);
    let blockHeight = energy + blockHeightBase;

    let r = map(i, 0, peakCount, 180, 250);
    let g = map(i, 0, peakCount, 220, 250);
    let b = map(i, 0, peakCount, 1800, 250);

    fill(r, g, b, 200);
    rect(x, height / 2 - blockHeight / 2, blockSize, blockHeight);
  }

  imageMode(CENTER);
  image(fallImage, width / 2, height / 2, fallImage.width / 12, fallImage.height / 12);
}
