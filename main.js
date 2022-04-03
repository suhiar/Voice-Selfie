var SpeechRecognition= window.webkitSpeechRecognition
var recognition= new SpeechRecognition()

function start(){
document.getElementById("textbox").innerHTML=""
recognition.start()
}

recognition.onresult = function(event){
    console.log(event)
    Content= event.results[0][0].transcript
    document.getElementById("textbox").innerHTML= Content
    speak()
}

function speak(){
    var synth = window.speechSynthesis
    speak_data = document.getElementById("textbox").value
    var utter_this= new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter_this)
    Webcam.attach(camera)
}

camera=document.getElementById("camera")
Webcam.set(
    {
        width:360,
        height:250,
        image_format:"jpeg",
        jpeg_quality:100
    }
)