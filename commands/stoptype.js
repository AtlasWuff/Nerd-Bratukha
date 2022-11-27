const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("stoptype")
		.setDescription("Makes the bot stop typing so it is off forever"),

	async execute(client, interaction) {
		interaction.channel.stopTyping();
	},
};
