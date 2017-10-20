const lt = require('localtunnel');

const port = 5000;
const subdomain = 'merndemo';
lt(port, {
  subdomain
}, function (err, tunnel) {
  console.log(`Localtunnel mapping ${subdomain}.localtunnel.me to localhost:${port}`);
});
// "lt": "lt -p 5000 -s merndemo -o",
