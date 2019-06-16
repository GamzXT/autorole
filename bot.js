const djs = require('discord.js');
const client = new djs.Client();

client.on('guildMemberAdd', function(mem){
	mem.addRole('589823111893876756');
});

client.login(process.env.BOT_TOKEN);
