const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
  async execute(client, interaction, message) {
    const msgEmbed = message.embeds[0].data
    const responseMsg = await interaction.reply({
      embeds: [{
        color: msgEmbed.color,
        description: "Please type what you wish to add below"
      }],
      ephemeral: true,
    });

    client.once("messageCreate", async (msg) => {
      if (msg.author.id == interaction.user.id) {
        const newDesc = msgEmbed.description == "*Empty*" ? "‣ " + msg.content : msgEmbed.description + "\n‣ " + msg.content

        await message.edit({
          embeds: [{
              title: msgEmbed.title,
              color: msgEmbed.color,
              description: newDesc
          }],
          ephemeral: false,
          components: message.components
        })

        console.log("error here !!!!!!!!!!!!!!!!")
        await msg.delete()
      }
    })
  },
};