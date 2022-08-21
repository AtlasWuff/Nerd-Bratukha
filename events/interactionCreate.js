const { ComponentType, MessageComponentInteraction } = require('discord.js');

module.exports = async (client, interaction) => {

  if (interaction.isCommand()) {
    // ** Commands Handler
    try {
      const command = client.commands.get(interaction.commandName);
      await command.execute(client, interaction);
    } catch (error) {
      console.log("\x1b[31m", "Error: " + error.message);
      await interaction.reply({ embeds: [{
        description: 'There was an error while executing this command!',
        color: 14550791
      }], ephemeral: true });
    }
  }
  
  if (interaction.isButton()) {
    // ** Buttons Handler
    try {
      const buttonevent = client.buttonevents.get(interaction.customId);
      const msgObject = await interaction.channel.messages.fetch(interaction.message.id)
      await buttonevent.execute(client, interaction, msgObject);
    } catch (error) {
      console.log("\x1b[31m", "Error: " + error.message);
      await interaction.reply({ embeds: [{
        description: 'There was an error while executing this button event!',
        color: 14550791
      }], ephemeral: true });
    }
  }
}
