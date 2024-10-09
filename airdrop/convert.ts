import base58 from 'bs58';

const phantomPrivateKeyBase58 = "5zG1W6rco8myc9AoUfBrXmdCGcXctfRi55aB8Apd2jUVPTaLRLuXyq3mRuXCx2xcEt1tY6S2rESyaZH7MXj1YeRB";

const privateKeyBytes = base58.decode(phantomPrivateKeyBase58);

console.log(Array.from(privateKeyBytes));
