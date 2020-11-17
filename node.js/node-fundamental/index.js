 const fs = require('fs');
 const http = require('http');
 const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

////////////////////////////////////
//// FILES

//  Blocking 
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written');

// Non-blocking
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('Error! 💥');

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('your file has been written.😀');
//       })
//     });
//   });
// });
// console.log('Will read file!');

////////////////////////////////////
//// SERVER
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8'); 
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8'); 
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); 
const dataObj = JSON.parse(data);  // dataType : array

const slugs = dataObj.map((el) =>
  slugify(el.productName, {
    lower: true,
  })
);

const server = http.createServer((req, res) => {

  const {query, pathname} = url.parse(req.url, true);
  const lastPathname = pathname.split('/')[2];

  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    
    res.writeHead(200, {
      'Content-type': 'text/html',
    });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el, slugs))
      .join(''); // join('') : 배열을 문자열로 바꿔줌
    console.log(cardsHtml);
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

    // Product page
  } else if (pathname === `/product/${lastPathname}`) {
    res.writeHead(200, {
      'Content-type': "text/html"
    });
    const product = dataObj[slugs.indexOf(lastPathname)];
    const output = replaceTemplate(tempProduct, product, slugs);

    res.end(output);

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    res.end(data);

    // Not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h2>page not found!</h2>');
  }
});

server.listen(8000, () => {
  console.log('Listening to requests on port 8000');
});
