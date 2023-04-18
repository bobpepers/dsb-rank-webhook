import CryptoJS from 'crypto-js';

const decryptWebhook = (
  body,
  secret,
) => {
  const decrypedData = CryptoJS.AES.decrypt(
    body,
    secret,
  );
  const originalObject = JSON.parse(decrypedData.toString(CryptoJS.enc.Utf8));
  return originalObject;
};

export default decryptWebhook;
