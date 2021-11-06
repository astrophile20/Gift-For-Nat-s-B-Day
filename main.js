// function draw() {
//     image(video, 0, 0, 665, 510);
//     fill(3, 252, 182);
//     rect(30, 20, 40, 40, 10);
//     rect(600, 20, 40, 40, 10);
//     rect(600, 450, 40, 40, 10);
//     rect(30, 450, 40, 40, 10);
// }

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

    fill(0, 0, 255);
    stroke(255, 255, 255);
    rect(0, 0, 20, 510);
    fill(0, 0, 255);
    stroke(255, 255, 255);
    rect(0, 0, 665, 20);
    fill(0, 0, 255);
    stroke(255, 255, 255);
    rect(645, 0, 20, 510);
    fill(0, 0, 255);
    stroke(255, 255, 255);
    rect(0, 490, 665, 20);
    fill(255, 0, 0);
    fill(3, 252, 182);
    rect(30, 20, 40, 40, 10);
    fill(255, 0, 0);
    fill(3, 252, 182);
    rect(600, 20, 40, 40, 10);
    fill(255, 0, 0);
    fill(3, 252, 182);
    rect(600, 450, 40, 40, 10);
    fill(255, 0, 0);
    fill(3, 252, 182);
    rect(30, 450, 40, 40, 10);
}

function take_snapshot() {
    save("save_img.png");
}
