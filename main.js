function preload()
{

}

function setup()
{
    canvas = createCanvas(400 , 300 );
    video = createCapture(VIDEO);
    video.size(400 , 300);
    video.position(400 , 545);
    classifier = ml5.imageClassifier('MobileNet' , modelLoaded);
}

function draw()
{
    classifier.classify(video , gotResult);
}
function modelLoaded()
{
    console.log("modelLoaded");
}
function gotResult(error , results)
{
    if (error)
    {
        console.error(error);
    }
    else{
        document.getElementById("result_spn_mb").innerHTML = results[0].label;
        
    }
    console.log(results);
}