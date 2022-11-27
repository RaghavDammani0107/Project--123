nose_x = 0;
nose_y = 0;
left_wrist_x = 0;
left_wrist_y = 0;

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    posenet = ml5.poseNet(video, modeloaded);
    posenet.on('pose', gotposes);
}