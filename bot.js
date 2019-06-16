const djs = require('discord.js');
const client = new djs.Client();

client.on('guildMemberAdd', member => {
	const mem = member.guild.members.find('id', member.user.id);
	mem.addRole('589823111893876756');
})

client.login('NTg5ODI1NTg3NzYyMjk4OTAw.XQZT6w.Zv_Fke3LTwsFzbtMwPQ8dvdaf2s');