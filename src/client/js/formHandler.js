function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    fetch(`http://localhost:3000/sentiment?variable=${encodeURIComponent(formText)}`)
    .then(res => {
        return res.json();
    })
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res.sentence_list[0].text;
    })
    .catch((error) => {
        console.error("Error:", error);
    });

}

export { handleSubmit }
