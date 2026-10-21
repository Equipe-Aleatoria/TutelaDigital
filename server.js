
const http = require('http');
const fs = require('fs');
const path = require('path');

const pasta = __dirname;

const server = http.createServer((req, res) => {
  let arquivo = req.url === '/' ? 'index.html' : req.url.slice(1);

  arquivo = path.join(pasta, arquivo);

  fs.readFile(arquivo, (erro, conteudo) => {
    if (erro) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Arquivo não encontrado.');
      return;
    }

    const extensao = path.extname(arquivo);
    const tipos = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'text/javascript; charset=utf-8'
    };

    res.writeHead(200, {
      'Content-Type': tipos[extensao] || 'application/octet-stream'
    });

    res.end(conteudo);
  });
});

server.listen(3000, () => {
  console.log('Tutela Digital disponível em http://localhost:3000');
});
