import { DEFAULT_CONNECTION_CONFIG } from '../Defaults/index.js';
import { makeCommunitiesSocket } from './communities.js';
// export the last socket layer
const makeWASocket = (config) => {
    // --- WATERMARK TERMINAL LU ---
    console.log('\x1b[36m%s\x1b[0m', '=========================================');
    console.log('\x1b[32m%s\x1b[0m', '   🔥 BAILEYS CUSTOM BY IDSAL 🔥     ');
    console.log('\x1b[33m%s\x1b[0m', '      STATUS: BOT SEDANG DIJALANKAN      ');
    console.log('\x1b[36m%s\x1b[0m', '=========================================');
    // -----------------------------
    // Ini wajib ada biar settingan bot lu nggak error
    const newConfig = {
        ...DEFAULT_CONNECTION_CONFIG,
        ...config
    };
    return makeCommunitiesSocket(newConfig);
};
export default makeWASocket;
//# sourceMappingURL=index.js.map