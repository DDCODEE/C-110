prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera= document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="hello_neighbour"src="'+data_uri+'"/>';
    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Cftxs4pO6/model.json',modelLoaded);
 function modelLoaded()
 {
    console.log("modelLoaded")
 }
 function speak(){
    var synth= window.speechSynthesis;
    speak_data_1="the First Prediction Is"+prediction1;
    speak_data_2="the Second Prediction Is"+prediction2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);prediction1="";
prediction2="";
 }

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera= document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="hello_neighbour"src="'+data_uri+'"/>';
    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/D6frvVvqq/model.json',modelLoaded);
 function modelLoaded()
 {
    console.log("modelLoaded")
 }
 function speak(){
    var synth= window.speechSynthesis;
    speak_data_1="the First Prediction Is"+prediction1;
    speak_data_2="the Second Prediction Is"+prediction2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
 } 
  function check()
  {
     captured_image= document.getElementById("hello_neighbour");
     classifier.classify(captured_image, gotResult);
  }
  function gotResult(error,results)
  {
   if (error)
   {
    console.log(error);
   }    else{
    console.log(results)
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    gesture= results[0].label;

    if(gesture=="Thumbs up")
    {
        document.getElementById("update_emoji").innerHTML= "&#128077";
 
    }else if(gesture=="Point someone")
     {
        document.getAnimations("update_emoji").innerHTML="&#9996";



    }
   }
  }