const readfile = (file) => {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => {
      resolve(fr.result);
    };
    fr.readAsArrayBuffer(file);
  });
};

export const Encrypt = async (key, file) => {
  try {
    const plaintextbytes = await readfile(file);

    const plaintextbyteArray = new Uint8Array(plaintextbytes);

    const pbkdf2iterations = 10000;
    const passphrasebytes = new TextEncoder('utf-8').encode(key);
    const pbkdf2salt = window.crypto.getRandomValues(new Uint8Array(8));

    const passphrasekey = await window.crypto.subtle.importKey(
      'raw',
      passphrasebytes,
      { name: 'PBKDF2' },
      false,
      ['deriveBits'],
    );

    const pbkdf2bytes = await window.crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: pbkdf2salt,
        iterations: pbkdf2iterations,
        hash: 'SHA-256',
      },
      passphrasekey,
      384,
    );

    //   console.log('pbkdf2bytes derived');
    const pbkdf2bytesArray = new Uint8Array(pbkdf2bytes);

    const keybytes = pbkdf2bytesArray.slice(0, 32);
    const ivbytes = pbkdf2bytesArray.slice(32);

    const aeskey = await window.crypto.subtle.importKey(
      'raw',
      keybytes,
      { name: 'AES-CBC', length: 256 },
      false,
      ['encrypt'],
    );

    const cipherbytes = await window.crypto.subtle.encrypt(
      { name: 'AES-CBC', iv: ivbytes },
      aeskey,
      plaintextbyteArray,
    );

    if (!cipherbytes) {
      // TODO: return error for crypt probs
      // spnEncstatus.classList.add('redspan');
      // spnEncstatus.innerHTML = '<p>Error encrypting file.  See console log.</p>';
    }

    const cipherbytesArray = new Uint8Array(cipherbytes);

    const resultbytes = new Uint8Array(cipherbytesArray.length + 16);
    resultbytes.set(new TextEncoder('utf-8').encode('Salted__'));
    resultbytes.set(pbkdf2salt, 8);
    resultbytes.set(cipherbytesArray, 16);

    const blob = new Blob([resultbytes]);

    return blob;
  } catch (err) {
    console.log('encrypt error');
    throw err;
  }
};
export const Decrypt = async (key, file) => {
  try {
    const cipherbytes = await readfile(file);

    const plaintextbyteArray = new Uint8Array(cipherbytes);

    const pbkdf2iterations = 10000;
    const passphrasebytes = new TextEncoder('utf-8').encode(key);
    const pbkdf2salt = plaintextbyteArray.slice(8, 16);

    const passphrasekey = await window.crypto.subtle.importKey(
      'raw',
      passphrasebytes,
      { name: 'PBKDF2' },
      false,
      ['deriveBits'],
    );

    const pbkdf2bytes = await window.crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: pbkdf2salt,
        iterations: pbkdf2iterations,
        hash: 'SHA-256',
      },
      passphrasekey,
      384,
    );

    const pbkdf2bytesArrays = new Uint8Array(pbkdf2bytes);

    const keybytes = pbkdf2bytesArrays.slice(0, 32);
    const ivbytes = pbkdf2bytesArrays.slice(32);
    const cipherbyteData = plaintextbyteArray.slice(16);

    const aeskey = await window.crypto.subtle.importKey(
      'raw',
      keybytes,
      { name: 'AES-CBC', length: 256 },
      false,
      ['decrypt'],
    );

    const plaintextbytes = await window.crypto.subtle.decrypt(
      { name: 'AES-CBC', iv: ivbytes },
      aeskey,
      cipherbyteData,
    );

    const plaintextArray = new Uint8Array(plaintextbytes);

    const blob = new Blob([plaintextArray]);

    return blob;
  } catch (err) {
    console.log('decryption error');
    console.log(err);
    throw err;
  }
};
