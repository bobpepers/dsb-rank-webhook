import CryptoJS from 'crypto-js';
var decryptWebhook = function decryptWebhook(body, secret) {
  var decrypedData = CryptoJS.AES.decrypt(body, secret);
  var originalObject = JSON.parse(decrypedData.toString(CryptoJS.enc.Utf8));
  return originalObject;
};
export default decryptWebhook;