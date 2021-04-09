function handleSubmit(event) {
    event.preventDefault()

    const nlpText = document.querySelector('#nlpTxt').value;
    let nlpResult = document.querySelector('#nlpResult');

    if(nlpText == null || nlpText.length == 0 || typeof nlpText !== "string")
    {
        nlpResult.innerHTML = "Invalid submit"    
    }

    fetch("http://localhost:8055/", 
        {   
            method:'POST', 
            headers:{"content-type":"application/json"}, 
            body:JSON.stringify({nlpTxt:nlpText})
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .then(res => nlpResult.innerHTML = res)
            .catch(err => console.log(err));
}

// export {handleSubmit}