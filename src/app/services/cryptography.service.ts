import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CryptographyService {

  private secretKey = CryptoJS.enc.Utf8.parse(environment.secretKey); // A chave secreta usada para descriptografar

  constructor() { }

  // Método para descriptografar o texto criptografado
  decrypt(encryptedText: string): string {
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedText, this.secretKey, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error('Erro durante a descriptografia:', error);
      return '';
    }
  }
}
