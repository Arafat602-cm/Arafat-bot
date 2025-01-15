/cmd install trash2.js const fs = require("fs");
const path = require("path");
// Ensure DIG is properly imported
const DIG = require("discord-image-generation"); 

module.exports = {
  config: {
    name: "trash2",
    version: "1.1",
    author: "NIB",
    countDown: 5,
    role: 0,
    shortDescription: "Trash image",
    longDescription: "Trash image",
    category: "image",
    guide: {
      vi: "{pn} [@tag | để trống]",
      en: "{pn} [@tag]"
    }
  },

  onStart: async function ({ event, message, usersData }) {
    const uid = Object.keys(event.mentions)[0];

    if (!uid) {
      return message.reply("Please mention someone.");
    }

    // Handle special cases for specific UIDs
    if (uid === "100078140834638" || uid === "100084690500330") {
      return message.reply("You are the trash 🐸🐸.");
    }

    try {
      const avatarURL = await usersData.getAvatarUrl(uid);
      const img = await new DIG.Trash().getImage(avatarURL);
      const pathSave = path.join(__dirname, "tmp", `${uid}_Trash.png`);

      fs.writeFileSync(pathSave, Buffer.from(img));
      await message.reply({
        attachment: fs.createReadStream(pathSave),
      });
    } catch (error) {
      console.error("Error while processing the trash2 command:", error);
      message.reply("An error occurred while processing the image.");
    } finally {
      // Clean up the temporary file after use
      const pathSave = path.join(__dirname, "tmp", `${uid}_Trash.png`);
      if (fs.existsSync(pathSave)) {
        fs.unlinkSync(pathSave);
      }
    }
  }
};
