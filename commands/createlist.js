const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  MessageComponentInteraction,
} = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("createlist")
    .setDescription("Create a to-do list w/ an associated topic or class")
    .addStringOption((option) =>
      option
        .setName("topic")
        .setDescription("The topic or class for the to-do list")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("color")
        .setDescription("The color for the to-do list (Decimal, not Hex)")
        .setRequired(false)
    ),

  async execute(client, interaction) {
    const todoItems = [];

    const managmentRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("addList")
        .setLabel("Add")
        .setStyle(ButtonStyle.Success),
      new ButtonBuilder()
        .setCustomId("removeList")
        .setLabel("Remove")
        .setStyle(ButtonStyle.Danger),
      new ButtonBuilder()
        .setCustomId("clearList")
        .setLabel("Clear")
        .setStyle(ButtonStyle.Danger)
    );

    // await interaction.deferReply();
    await interaction.reply({
      embeds: [
        {
          title: interaction.options.getString("topic"),
          color:
            interaction.options.getInteger("color") == null
              ? 12717312
              : interaction.options.getInteger("color"),
          description: "*Empty*",
        },
      ],
      ephemeral: false,
      components: [managmentRow],
    });
  },
};
