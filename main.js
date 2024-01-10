var SpeechRecognition = window.webKitSpeechRecogntion; //usado para reconhecer oque estamos falando e converter para texto oque foi dito.

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");
    
 function speak()
 {
 //funçao responsavel pela conversao de texto para fala
 var synth = window.SpeechSynthesis; //armasena a API

 speakData = document.getElementById("textbox").value; //contem o texto obtido na area de texto

 var utterThis = new SpeechSynthesisUtterance(speackData); //é uma variavel em que armasena o texto convertido em fala 
//obs: esse comentario serve pro SpeechSynthesisUtterance, é uma funçao de uma API que converterá o texto em fala
 synth.speak(utterThis);
 Webcam.attach(camera);
 }
 camera = document.getElementById("camera");
 Webcam.set({ //esses comandos são as propriedades da webcam
     width:360,
     heigh:250,
     image_format : 'png',
     png_quality:90
 });
    setTimeout(function()
    {
   imId = "selfie1";
   takeSelfie();
   speakData = "Tirando sua selfie em 10 segundos";
   var utterThis = new SpeechSynthesisUtterance(speakData);
   synth.speak(utterThis);
  }, 5000) 
 

  function takeSelfie()
  {
console.log(imgId);

Webcam.snap(function(data_uri){
if(imgId=="selfie1"){
   document.getElementById("result1").inner.HTML = '<img id="selfie1" src="'+data_uri+'"/>';
}
if(imgId=="selfie2"){
   document.getElementById("result2").inner.HTML = '<img id="selfie2" src="'+data_uri+'"/>';
}
if(imgId=="selfie3"){
   document.getElementById("result3").inner.HTML = '<img id="selfie3" src="'+data_uri+'"/>';
}
});
 }

 function start()
 {
   Textbox.innerHTML = "";
   recognition.start();
 }