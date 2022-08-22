const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
  async execute(client, interaction, message) {
    const msgEmbed = message.embeds[0].data
    const responseMsg = await interaction.reply({
      embeds: [{
        color: msgEmbed.color,
        description: "Please type what you wish to remove below"
      }],
      ephemeral: true,
    });

    client.once("messageCreate", async (msg) => {
      if (msg.author.id == interaction.user.id) {
        var newDesc = msgEmbed.description == "*Empty*" ? "*Empty*" : msgEmbed.description.replace("‣ " + msg.content + "\n", "")

        if (newDesc == msgEmbed.description) {
          newDesc = msgEmbed.description == "*Empty*" ? "*Empty*" : msgEmbed.description.replace("‣ " + msg.content, "")
        }

        newDesc = newDesc == "" ? "*Empty*" : newDesc

        await message.edit({
          embeds: [{
              title: msgEmbed.title,
              color: msgEmbed.color,
              description: newDesc
          }],
          ephemeral: false,
          components: message.components
        })

        await msg.delete()
      }
    })
  },
};