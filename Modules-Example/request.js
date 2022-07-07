//module.exports.REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
}
//ANOTHER WAY TO export is
// module.exports.send = function send(url, data) {
//     const encryptedData = encrypt(data);
//     console.log(`sending ${encryptedData} to ${url}`);
// }

module.exports = {
  send,
};
