const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(MTAzNzc1MDQ0NDc2OTkzNTM2MA.GlwRGe.rOVU9PYtdy9NzBhSn85bGeBP2Fhg3gJ0Gwu2KI);