let resbtn=document.querySelector(".res_button");

resbtn.addEventListener("click",()=>{
    shortenUrl();
});



function shortenUrl() {
    const apiKey = 'e61a61e89fa4d4e94f79313433052edcc93b4bb7';
    const longUrl = document.getElementById('url').value;
    const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        long_url: longUrl,
        domain: 'bit.ly'
      })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('shortened-url').innerHTML = `<p class="text-body-secondary">Shortened URL: <a href="${data.link}" target="_blank">${data.link}</a></p>`;
    })
    .catch(error => {
      console.error('Error shortening URL:', error);
      document.getElementById('shortened-url').innerHTML = '<p class="text-body-secondary">Error shortening URL. Please try again.</p>';
    });
  }

