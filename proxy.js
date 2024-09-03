const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create a regular HTTP server that listens to requests
const server = http.createServer((req, res) => {
  // Change target to the URL you want to proxy to (Spotify in this case)
  const target = 'https://pluto.tv/us';

  // Proxy the request to the target
  proxy.web(req, res, { target: target, changeOrigin: true }, (err) => {
    console.error('Proxy error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Something went wrong.');
  });
});

// Start the server
server.listen(8080, () => {
  console.log('Proxy server running on http://localhost:8080');
});
