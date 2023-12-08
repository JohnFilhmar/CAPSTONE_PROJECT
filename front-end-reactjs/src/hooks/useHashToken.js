import CryptoJS from 'crypto-js';

const encryptionKey = "4m0313@-@mp3lp0g!-Fr0n73nd-k3Y"

// one time use encryption only per session
const useEncryptToken = (token) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, encryptionKey).toString();
  const encToken = localStorage.getItem('encryptedToken');
  if (token && encToken == null){
    localStorage.setItem('encryptedToken', encryptedToken);
  } else {
    localStorage.clear();
  }
};

const useDecryptToken = (encryptedToken) => {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedToken, encryptionKey);
  const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedToken;
};

export { useEncryptToken, useDecryptToken };