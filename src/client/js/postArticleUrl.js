const postArticleUrl = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const apiRes = await response.json();

        if (apiRes.polarity === undefined) {
            document.getElementById('api_error').innerHTML = apiRes.state;
            document.getElementById('polarity').innerHTML = "";
            document.getElementById('polarity_confidence').innerHTML = "";
            document.getElementById('subjectivity').innerHTML = "";
            document.getElementById('subjectivity_confidence').innerHTML = "";
        } else {
            document.getElementById('polarity').innerHTML = apiRes.polarity;
            document.getElementById('polarity_confidence').innerHTML = apiRes.polarity_confidence;
            document.getElementById('subjectivity').innerHTML = apiRes.subjectivity;
            document.getElementById('subjectivity_confidence').innerHTML = apiRes.subjectivity_confidence;
            document.getElementById('api_error').innerHTML = "";
        }
        
    } catch (error) {
        console.log("error receivedData", error);
    }
};

export { postArticleUrl }