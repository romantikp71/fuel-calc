const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://socar.ua/ru/fuel').then(html => {
    const $ = cheerio.load(html.data)
    let text = '';
    $('#__layout > div > div.page-content-wrapper > main > div.content-card-list > div:nth-child(3) > div > div > div > div.image-and-bg-image__col-1.image-and-bg-image__col-1_align_left > p').each((i, elem) => {
        text += `${$(elem).text()}\n`; 
    })
    console.log(text);
})






