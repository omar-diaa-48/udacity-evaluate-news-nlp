function handleSubmit(event) {
    event.preventDefault()

    const nlpText = document.querySelector('#nlpTxt').value;
    let nlpResult = document.querySelector('#nlpResult');

    if(nlpText == null || nlpText.length == 0 || typeof nlpText !== "string")
    {
        nlpResult.innerHTML = "Empty input is an invalid submit"    
    }

    fetch("http://localhost:8055/", 
        {   
            method:'POST', 
            headers:{"content-type":"application/json"}, 
            body:JSON.stringify({nlpTxt:nlpText})
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.sentimented_entity_list);
                return res;
            })
            .then(res => {
                let result = '';

                if(res.sentimented_entity_list == null)
                   result = 'Not a valid text, should contain city or a country'; 
                else
                    for (const item of res.sentimented_entity_list) {
                        result += `Word ${item.form} is a ${item.type.split('>').pop()}\n`;
                    }
                nlpResult.innerHTML = result;
            })
            .catch(err => console.log(err));
}

export {handleSubmit}