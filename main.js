img = "";
noseX = 0;
noseY = 0;



function startGame() {
  createCanvas(650, 400);
  video = createCapture(VIDEO);
  video.size(600,300);
  
  pose = ml5.poseNet(video, modelLoaded);
  pose.on('pose', gotPoses)
}
function modelLoaded(){
  console.log('Success')
}
function gotPoses(results)
{
  if(results.length>0)
    {
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX =" + noseX + ",noseY = "+ noseY);
    }
}

function draw() {
  background("#D3D3D3");
  
  image(img, 40,70);
}
