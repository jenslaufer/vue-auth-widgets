import { get, save } from "./storage.js";

const secretKey = 'n8eneere88chbpbp8766bc97';

// Simple encryption/decryption functions
const encrypt = (value) => {// Consider using a more secure key
    return btoa(String.fromCodePoint(...new TextEncoder().encode(JSON.stringify(value)).map((byte, i) =>
        byte ^ secretKey.codePointAt(i % secretKey.length)
    )));
};

const decrypt = (encryptedValue) => {
    try {
        const decrypted = new Uint8Array(
            atob(encryptedValue).split('').map((char, i) =>
                char.codePointAt(0) ^ secretKey.codePointAt(i % secretKey.length)
            )
        );
        return JSON.parse(new TextDecoder().decode(decrypted));
    } catch (error) {
        // Return null for invalid encrypted data or JSON parsing errors
        console.warn('Failed to decrypt data:', error.message);
        return null;
    }
};

export const getQuotaUsed = async (quotaName) => {
    const encrypted = await get(quotaName);
    return encrypted ? decrypt(encrypted) : null;
}

export const saveQuotaUsed = async (quotaName, used) => {
    const encrypted = encrypt(used);
    return save(quotaName, encrypted);
}

export const getMaxQuota = async (maxQuotaName) => {
    const encrypted = await get(maxQuotaName);
    return encrypted ? decrypt(encrypted) : null;
}

export const saveMaxQuota = async (maxQuotaName, maxQuota) => {
    const encrypted = encrypt(maxQuota);
    return save(maxQuotaName, encrypted);
}
