const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  async execute(client, interaction, message) {
    const msgEmbed = message.embeds[0].data;

    let newDesc = "*Empty*";

    await message.edit({
      embeds: [
        {
          title: msgEmbed.title,
          color: msgEmbed.color,
          description: newDesc,
        },
      ],
      ephemeral: false,
      components: message.components,
    });
    await interaction.reply({
      embeds: [
        {
          color: msgEmbed.color,
          description: "Cleared the list!",
        },
      ],
      ephemeral: true,
    });
  },
};
