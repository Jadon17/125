noseX = 0;
noseY = 0;
diffrence = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(700, 150);

    video = createCapture(VIDEO);
    video.size(450, 450);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposses);


}

function modelloaded() {
    console.log("MODEL HAS LOADED !!!");
}

function draw() {
    background("#4287f5");
    document.getElementById("square").innerHTML = "Length of each side of the  Square is " + diffrence + "px";
    stroke("aqua");
    fill("green")
    square(noseX, noseY, diffrence);
}

function gotposses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("Nose X coordinates = " + noseX + "Nose Y Coordinates = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);
        console.log(diffrence);

        console.log("Left Wrist X = " + leftWristX + "Right Wrist X" + rightWristX);
    }


}
