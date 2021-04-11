import {isUrl} from './isUrl';

function handleSubmit() {
    const nlpText = document.querySelector('#nlpTxt').value;
    let nlpResult = document.querySelector('#nlpResult');
    let nlpResultDetails = document.querySelector('#resultDetails')

    if(nlpText == null || nlpText.length == 0 || typeof nlpText !== "string")
    {
        nlpResult.innerHTML = "Empty input is an invalid submit"    
    }

    if(isUrl(nlpText)){
        alert('Good URL');
        return;
    }

    fetch("http://localhost:8055/", 
        {   
            method:'POST', 
            headers:{"content-type":"application/json"}, 
            body:JSON.stringify({nlpTxt:nlpText})
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
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

                nlpResultDetails.innerHTML = `Score Tag : ${res.score_tag}<br>` 
                                            + `Agreement : ${res.agreement}<br>` 
                                            + `Subjectivity : ${res.subjectivity}<br>` 
                                            + `Irony : ${res.irony}<br>` 
                                            + `<strong>Confidence : ${res.confidence}</strong>`;
            })
            .catch(err => console.log(err));
}

export {handleSubmit}