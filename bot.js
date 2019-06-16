const djs = require('discord.js');
const client = new djs.Client();

client.on('guildMemberAdd', function(mem){
	const role = mem.guild.roles.find('id', '589826390917120022');
	mem.addRole(role);
});

client.login(process.env.BOT_TOKEN);
