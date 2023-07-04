const form = document.querySelector('form')
const resultdiv = document.querySelector('.result')
const input = document.querySelector('input')
// const input = document.querySelector('input')
form.addEventListener('submit',(e)=>{
    e.preventDefault();    
    getWordInfo(form.elements[0].value);
    // getWordInfo(input.target.value);
})
const getWordInfo=async(word)=>{
    // console.log(word)
    // alert("word:"+word)
    try{    
        resultdiv.innerHTML = "Fetching data..."       
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await response.json();
    console.log(data)
    let definitions =data[0].meanings[0].definitions[0];
    resultdiv.innerHTML = `
        <h2><strong>Word:</strong>${data[0].word}<h2>
        <p class="partOfSpeech">${data[0].meanings[0].partOfSpeech}</p>
        <p><strong>Meaning:</strong>${definitions.definition}</p>      
        <p><strong>Examples:</strong>${definitions.example===undefined?"Not found":definitions.example}</p>
        <p><strong>Antonyms:</strong></p>`;
        if(definitions.antonyms.length===0){
            resultdiv.innerHTML+=`<span>Not found</span>`
        }
        else{
        for(let i=0;i<definitions.antonyms.length;i++){
            resultdiv.innerHTML+=`<li>${definitions.antonyms[i]}</li>`
        }}
        resultdiv.innerHTML+=`<p><a href="${data[0].sourceUrls}" target="_blank">read more</a></p>`
    }
    catch(error){
        resultdiv.innerHTML=`<p>Sorry,result could not found</p>`
        const value = input.value.trim(); // Removes leading/trailing whitespace
        if (value === '') {
             resultdiv.innerHTML=`<p>Please type a word...</p>`
             return
  }
    }
}