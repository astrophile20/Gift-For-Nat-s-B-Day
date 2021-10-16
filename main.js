function preload() {
}

function setup() {
    canvas = createCanvas(700, 700);
    canvas.position(110, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 665, 510);
    fill(3, 252, 182);
    rect(30, 20, 40, 40, 10);
    rect(600, 20, 40, 40, 10);
    rect(600, 450, 40, 40, 10);
    rect(30, 450, 40, 40, 10);
}

function take_snapshot() {
    save("save_img.png");
}