var myHeaders = new Headers();
myHeaders.append("apikey", "ECmTT7svhY9K4EEPTz09xJpOjWykXAMC");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const uploadBtn = document.getElementById("uploadBtn");
let img = document.getElementById('file-ip-1-preview');
let extractedText = document.getElementById('extracted-text');
let src = ''
let preview = ''

function showPreview(event){
    if(event.target.files.length > 0){
      src = URL.createObjectURL(event.target.files[0]);
      preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
      img.setAttribute("alt", src)
    }
    extractText(src)
  }


  function extractText(src){
    fetch(`https://api.apilayer.com/image_to_text/url?url=${src}`, requestOptions)
    .then(response => response.text())
    // .then(response => response.json())
    .then(result => {
      console.log(result)
      extractedText.innerHTML = result.all_text
    })
    .catch(error => {
        console.log('error', error)
        extractedText.innerHTML = error.message
    });
  }
