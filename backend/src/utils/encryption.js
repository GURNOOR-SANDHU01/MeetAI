import crypto from 'crypto';
import { config } from '../config/env.js';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12;

const getSecretKey = () => {
  const hexKey = config.encryptionKey;
  if (!hexKey || hexKey.length < 64) {
    // Fallback 32-byte key generated deterministically from secret for dev fallback
    return crypto.createHash('sha256').update(hexKey || 'meetai_default_encryption_secret_key').digest();
  }
  return Buffer.from(hexKey.substring(0, 64), 'hex');
};

export const encrypt = (text) => {
  if (!text) return null;
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, getSecretKey(), iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const authTag = cipher.getAuthTag().toString('hex');
  return `${iv.toString('hex')}:${authTag}:${encrypted}`;
};

export const decrypt = (encryptedString) => {
  if (!encryptedString) return null;
  try {
    const parts = encryptedString.split(':');
    if (parts.length !== 3) return null;
    const [ivHex, authTagHex, encryptedText] = parts;
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, getSecretKey(), iv);
    decipher.setAuthTag(authTag);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (err) {
    return null;
  }
};
