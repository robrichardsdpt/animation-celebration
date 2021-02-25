function runSpeechRecognition() {
  // get output div reference
  var output = document.getElementById("output");
  // get action element reference
  var action = document.getElementById("action");
      // new speech recognition object
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      var recognition = new SpeechRecognition();
  
      // This runs when the speech recognition service starts
      recognition.onstart = function() {
          action.innerHTML = "<small>listening, please speak...</small>";
      };
      
      recognition.onspeechend = function() {
          action.innerHTML = "<small>stopped listening, hope you are done...</small>";
          recognition.stop();
      }
    
      // This runs when the speech recognition service returns result
      recognition.onresult = function(event) {
          var transcript = event.results[0][0].transcript;
          var confidence = event.results[0][0].confidence;
          output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
          output.classList.remove("hide");
          const colors = ['red', 'green', 'blue', 'purple', 'orange', 'gray', 'black', 'yellow']
          const lowerCaseTranscript = transcript.split(' ').map(word => { return word.toLowerCase() })
          for(item of colors) {
            if (lowerCaseTranscript.includes(item)) document.body.style.background = item
            const speechContainer = document.querySelector('.speech-container')
            const outputText = document.getElementById('output')
            if (item === 'black' || item === 'blue') {
              speechContainer.style.color = 'white'
              outputText.style.color = 'black'
            } else
              speechContainer.style.color = 'black'
              outputText.style.color = 'black'
          } 
      };
    
       // start recognition
       recognition.start();
}