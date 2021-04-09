function handleSubmit(event) {
    event.preventDefault()

    const nlpText = document.querySelector('#nlpTxt').value;
    let nlpResult = document.querySelector('#nlpResult');

    if(nlpText == null || nlpText.length == 0 || typeof nlpText !== "string")
    {
        nlpResult.innerHTML = "Invalid submit"    
    }

    fetch("http://localhost:8055?txt="+nlpText)
            .then(res => res.text())
            .then(res => nlpResult.innerHTML = res)
            .catch(err => console.log(err));

    // fetch('http://localhost:8055/', { method:'POST' , body:JSON.stringify({nlpTxt:nlpText}) , headers:{"content-type":"application/json"} })
    //     .then((response) => response.json())
    //     .then(response => nlpResult.textContent = String(response.reverse))
    //     .catch((err) => console.log(err));
}

// export {handleSubmit}