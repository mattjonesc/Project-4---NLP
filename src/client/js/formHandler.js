function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    let inputType;
    
    if (formText.length > 0 & Client.isValidURL(formText)) {
        inputType = 'url';
      } else if (formText.length === 0) {
        // Check if formText is empty
        inputType = 'blank';
      } else {
        inputType = 'txt';
      };

    console.log(inputType)
    
    if(inputType === 'blank') {
        alert("Please enter a URL or text to be processed for NLP")
    } else {
        fetch(`http://localhost:7000/sentiment?variable1=${encodeURIComponent(formText)}&variable2=${encodeURIComponent(inputType)}`)
        //fetch(`http://localhost:7000/sentiment?variable=${encodeURIComponent(formText)}`)
        .then(res => {
            return res.json();
        })
        .then(function(res) {
            console.log(res);
            document.getElementById('results').innerHTML = '';
            document.getElementById('results').innerHTML += '<br><b>Polarity score:</b> ' + res.score_tag + '<br>';
            document.getElementById('results').innerHTML += '<br><b>Subjectivity:</b> ' + res.subjectivity + '<br>';
            document.getElementById('results').innerHTML += '<br><b>Text snippit:</b> ' + res.sentence_list[0].text + '<br>';
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

}

export { handleSubmit }
