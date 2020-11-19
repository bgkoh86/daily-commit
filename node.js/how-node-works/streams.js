const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // Solution1 : 전체 파일이 로드되고 나서 응답
  // fs.readFile('test-file.txt', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  // Solution2 : Streams
  // const readable = fs.createReadStream('test-file.txt');
  // readable.on('data', (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on('end', () => {
  //   res.end();
  // });
  // readable.on('error', (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end('File not found!');
  // });

  //Solution3  : best solution!!!
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
  //
});

server.listen(8000, () => {
  console.log('Listening...');
});
