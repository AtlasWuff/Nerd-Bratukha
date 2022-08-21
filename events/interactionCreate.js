const { ComponentType, MessageComponentInteraction } = require('discord.js');

module.exports = async (client, interaction) => {
  const command = client.commands.get(interaction.commandName);

  if (interaction.isCommand()) {
    // ** Commands Handler
    try {
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
    const oldMessage = interaction.message
    const oldEmbedFields = interaction.message.embeds[0].description

    interaction.reply({ content: "hi", fetchReply: true })
    .then(() => {interaction.channel.awaitMessages({ max: 1, time: 60000 })
      .then(collected => {
        console.log(collected.message)
      })})
    
    /*collector.on('collect', async i => {
        console.log(i)

        await i.update({ content: 'A button was clicked!', embeds: interaction.message.embeds, components: [] });
    });*/
  }
}
