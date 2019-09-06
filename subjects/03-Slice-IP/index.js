const url = 'http://192.168.1.52:8080/home/client.html';

const address = url => {
  const ip = url.split('/')[2].split(':')[0];
  const port = url.split('/')[2].split(':')[1];

  return ip + ':' + port;
};

console.log(address(url));
