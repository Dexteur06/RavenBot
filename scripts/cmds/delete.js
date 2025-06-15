const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "delete",
    aliases: ["del"],
    version: "1.0",
    author: "Naoh—",
    countDown: 5,
    role: 2,
    shortDescription: "Delete file and folders",
    longDescription: "Delete file",
    category: "owner",
    guide: "{pn}"
  },


  onStart: async function ({ args, message,event}) {
 const permission = ["100092251751272"];
    if (!permission.includes(event.senderID)) {
      message.reply("👨🏾‍🎨|𝑺𝒂𝒍𝒆 𝒅𝒆́𝒍𝒊𝒏𝒒𝒖𝒂𝒏𝒕 𝒍𝒂̀ 𝒄𝒆𝒕𝒕𝒆 𝒄𝒎𝒅 𝒏'𝒆𝒔𝒕 𝒑𝒂𝒔 𝒅𝒆 𝒕𝒐𝒏 𝒂̂𝒈𝒆 🤦‍♂️ 𝒔𝒆𝒖𝒍 𝒍𝒆 𝐁𝐨𝐬𝐬 𝒑𝒆𝒖𝒕 𝒍'𝒖𝒔𝒆𝒓.");
      return;
    }
    const commandName = args[0];

    if (!commandName) {
      return message.reply("Type the file name..");
    }

    const filePath = path.join(__dirname, '..', 'cmds', `${commandName}`);

    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        message.reply(`👨🏾‍🎨| 𝑳𝒂 𝑪𝒎𝒅 𝒂 𝒆́𝒕𝒆́ 𝒃𝒊𝒆n 𝒔𝒖𝒑𝒑𝒓𝒊𝒎𝒆𝒓 𝒎𝒐𝒏 𝐁𝐨𝐬𝐬 😎  ${commandName} .`);
      } else {
        message.reply(`command file ${commandName} unavailable.`);
      }
    } catch (err) {
      console.error(err);
      message.reply(`Cannot be deleted because ${commandName}: ${err.message}`);
    }
  }
};
