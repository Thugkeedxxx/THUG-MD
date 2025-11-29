import settings from './settings.js';

export default {
  // Bot configuration
  prefix: process.env.BOT_PREFIX || '.', // input your prefix here 
  ownerNumber: process.env.BOT_NUMBER || '27730161592', // input your number here 
  botName: process.env.BOT_NAME || '𝚃𝙷𝚄𝙶-𝙼𝙳', // Bot name from environment or default
  ownerName: process.env.BOT_OWNER_NAME || '𝚃𝙷𝚄𝙶𝙺𝙴𝙴𝙳', // optional 
  sessionId: 'THUG-MD-SESSION-ID', // sensitive name 
  BOOM_MESSAGE_LIMIT: 50,  

  // API configurations from settings
  openaiApiKey: settings.openaiApiKey,
  giphyApiKey: settings.giphyApiKey,
  geminiApiKey: settings.geminiApiKey,
  imgurClientId: settings.imgurClientId,
  copilotApiKey: settings.copilotApiKey,
  FOOTBALL_API_KEY: settings.FOOTBALL_API_KEY,
};
