function runSpeechRecognition() {
  // get output div reference
  var output = document.getElementById("output")
  // get action element reference
  var action = document.getElementById("action")
      // new speech recognition object
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
      var recognition = new SpeechRecognition()
  
      // This runs when the speech recognition service starts
      recognition.onstart = function() {
          action.innerHTML = "<small>Pick a color, any color...</small>"
      }
      
      recognition.onspeechend = function() {
          action.innerHTML = "<small>Completed!</small>"
          recognition.stop()
      }
    
      // This runs when the speech recognition service returns result
      recognition.onresult = function(event) {
          var transcript = event.results[0][0].transcript
          var confidence = event.results[0][0].confidence
          output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%"
          output.classList.remove("hide")
          const colors = ['red', 'green', 'blue', 'purple', 'orange', 'gray', 'pink', 'cyan', 'maroon', 'gold', 'teal', 'silver', 'chartreuse', 'black', 'yellow', 'brown']
          const actions = {
            'spartan': './142020702.jpg',
            'hockey': './IMG_3532.JPG',
            'mountain': './bluewinter.jpg',
            'sunrise': './sunrisepemi.jpg'
          }
          const video = {
            'run' : ''
          }
          const lowerCaseTranscript = transcript.split(' ').map(word => { return word.toLowerCase() })
          const speechContainer = document.querySelector('.speech-container')
          for(item of colors) {
            if (lowerCaseTranscript.includes(item)) document.body.style.background = item
          }
          for(word of lowerCaseTranscript) {
            if (actions[word]){
              let img = document.createElement('img')
              img.src = actions[word]
              img.classList.add('image-card')
              img.alt = `${word}`
              document.querySelector('body').appendChild(img)
              output.innerHTML = `Added your ${word} image.`
            }
            if (video[word]){
              let embed = document.createElement('embed')
              embed.src = video[word]
              embed.classList.add('video-card')
              embed.type = "video/mp4"
              document.querySelector('body').appendChild(embed)
              output.innerHTML = `Added your ${word} video.`
            }
          }
          if(lowerCaseTranscript.includes('dance')) speechContainer.classList.add('dance')
          if(lowerCaseTranscript.includes('goodbye')) speechContainer.classList.add('goodbye')
          if(lowerCaseTranscript.includes('spin')) speechContainer.classList.add('spin')
      }
      document.querySelector('.speech-container').classList.remove('dance')
      document.querySelector('.speech-container').classList.remove('spin')
       // start recognition
       recognition.start()
}