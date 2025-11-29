export const menuButtonsConfig = {
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: '120363420551846782@newsletter',
    newsletterName: 'Thugkeedcodes',
    serverMessageId: -1
  },
  externalAdReply: {
    title: '𝚃𝙷𝚄𝙶-𝙼𝙳',
    body: 'Advanced WhatsApp Bot with 380+ Commands',
    thumbnailUrl: 'https://image2url.com/images/1764397332316-e299b6fc-388c-4097-9f8a-0b1367fa2108.jpg',
    sourceUrl: 'https://github.com/Thugkeedxxx/𝚃𝙷𝚄𝙶-𝙼𝙳',
    mediaType: 1,
    renderLargerThumbnail: false,
    showAdAttribution: false
  }
};

export const repoButtons = {
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: '120363420551846782@newsletter',
    newsletterName: 'Thugkeedcodes',
    serverMessageId: -1
  },
  externalAdReply: {
    title: '🔗 𝚃𝙷𝚄𝙶-𝙼𝙳 REPOSITORY',
    body: 'View Source Code & Documentation',
    thumbnailUrl: 'https://image2url.com/images/1764397332316-e299b6fc-388c-4097-9f8a-0b1367fa2108.jpg',
    sourceUrl: 'https://github.com/Thugkeedxxx/𝚃𝙷𝚄𝙶-𝙼𝙳',
    mediaType: 1,
    renderLargerThumbnail: false,
    showAdAttribution: false
  }
};
export const menuButtons = {
  // Main menu buttons
  mainButtons: [
    {
      buttonId: "menu_basic",
      buttonText: { displayText: "🛠️ Basic Tools" },
      type: 1
    },
    {
      buttonId: "menu_group",
      buttonText: { displayText: "👥 Group Management" },
      type: 1
    },
    {
      buttonId: "menu_ai",
      buttonText: { displayText: "🤖 AI Commands" },
      type: 1
    }
  ],

  // Repository and creator buttons
  repoButtons: [
    {
      buttonId: "repo_main",
      buttonText: { displayText: "📱 Main Repository" },
      type: 1
    },
    {
      buttonId: "repo_web",
      buttonText: { displayText: "🌐 Web Dashboard" },
      type: 1
    },
    {
      buttonId: "creator_contact",
      buttonText: { displayText: "👨‍💻 Contact Creator" },
      type: 1
    }
  ],

  // Quick action buttons
  quickActions: [
    {
      buttonId: "status_bot",
      buttonText: { displayText: "📊 Bot Status" },
      type: 1
    },
    {
      buttonId: "help_support",
      buttonText: { displayText: "🆘 Support" },
      type: 1
    }
  ]
};

// Button responses
export const buttonResponses = {
  repo_main: {
    text: "📱 *𝚃𝙷𝚄𝙶-𝙼𝙳 - Main Repository*\n\n🔗 GitHub: https://github.com/Thugkeedxxx/𝚃𝙷𝚄𝙶-𝙼𝙳\n⭐ Star the repo if you like it!\n🍴 Fork it to create your own version",
    url: "https://github.com/Thugkeedxxx/𝚃𝙷𝚄𝙶-𝙼𝙳"
  },

  repo_web: {
    text: "🌐 *Web Dashboard*\n\n🔗 Dashboard: https://thug-md-deploy.onrender.com\n📊 Monitor your bot's performance\n⚙️ Configure settings remotely",
    url: "https://thug-md-deploy.onrender.com"
  },

  creator_contact: {
    text: "👨‍💻 *Creator Contact*\n\n📱 WhatsApp: +27630425996\n🐙 GitHub: @THUGKEED-TECH\n💬 Telegram:  Email: thugkeed@gmail.com",
    contact: {
      phone: "+27630425996",
      name: "𝚃𝙷𝚄𝙶-𝙼𝙳 - Bot Creator"
    }
  },

  status_bot: {
    text: "📊 *Bot Status*\n\n✅ Online and Active\n🔄 Auto-updates enabled\n🛡️ Security features active\n📱 WhatsApp API connected"
  },

  help_support: {
    text: "🆘 *Support & Help*\n\n📚 Use ?menu to see all commands\n💬 Join our support group\n🔧 Report issues on GitHub\n📖 Read documentation"
  }
};
  
