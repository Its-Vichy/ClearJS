<h1 align="center">ClearJS</h1>

<p align="center">
  <b>Javascript deobfuscator for obfuscator.io</b><br>
  <b>🎭 Follow me here:</b><br>
  <a href="https://discord.gg/palace-fr">Discord</a> |
  <a href="https://www.youtube.com/channel/UC09GPm24_rdeOXa5KOmhDnw">YouTube</a> |
  <a href="https://twitter.com/its_vichy">Twitter</a> |
  <a href="https://github.com/Its-Vichy">Github</a>
  <br><br>
  <img src="https://media.discordapp.net/attachments/857067737105170443/862435349624389672/png-transparent-pink-and-blue-masks-illustration-emoji-angry-face-android-unicode-theater-purple-smi.png">
</p>

#

<h1 align="center">INFORMATION</h1>

**Static javascript analyse using RegEX and AST (abstract syntax tree)**
**[Tutoriel here](https://vm.tiktok.com/ZMdXYmJW6/)**

# Installation
```
npm i
put obfuscation algorythm in input_algo.js and code in input_code.js
node main.js
```

#

<h1 align="center">BEFORE</h1>

```js
const _0x1315 = ['prefix', 'colors', '[!] Command execute success', '2mYrqWu', 'login', '10VPTppB', '66228QnPqqh', '1852YhSTDQ', 'help', 'toLowerCase', 'content', 'text', 'ready', 'SELF BOT v.1 em versão beta, qualquer tipo de bug favor comunicar <@810631264041304084>\x0a \x0a 🔧 **COMANDOS:\x0a \x0a ➜ .destruir - Apaga todos canais, cargos e da ban-all.\x0a ➜ .ban - Ban em todos os membros do servidor.\x0a ➜ .delete - Apaga todo servidor, cargos e canais.\x0a ➜ .chn - Cria 250 canais com o nome especificado em config.json.**', 'channels', 'discord.js', 'tag', '69908mTnBXy', 'send', 'Client', '2sIgUSO', '[!] Not Permissions!', 'delete', '1197381qhDbEL', 'createChannel', 'guild', './config.json', 'token', 'startsWith', 'members', 'deleteAll', 'log', 'message', 'highestRole', 'msgbans', '72386RwOhCp', 'tap', 'filter', 'ban', 'MANAGE_CHANNELS', 'red', 'H4CK3D by: OS FAIXA PRETA!', 'channel', '10NSqekO', 'channelsname', '2034237cdTpfj', 'roles', 'user', 'position', '198455JwQyvo'];
const _0x5dd6c3 = _0x5c09;
(function (_0x405085, _0x51db35) {
    const _0x1b3726 = _0x5c09;
    while (!![]) {
        try {
            const _0x3dd542 = -parseInt(_0x1b3726(0x1f0)) * -parseInt(_0x1b3726(0x1d6)) + -parseInt(_0x1b3726(0x1f6)) + -parseInt(_0x1b3726(0x1e8)) * parseInt(_0x1b3726(0x1fc)) + parseInt(_0x1b3726(0x1d9)) * parseInt(_0x1b3726(0x1fe)) + -parseInt(_0x1b3726(0x1fa)) * -parseInt(_0x1b3726(0x1fd)) + -parseInt(_0x1b3726(0x1dc)) + parseInt(_0x1b3726(0x1f2));
            if (_0x3dd542 === _0x51db35) break;
            else _0x405085['push'](_0x405085['shift']());
        } catch (_0x4e5485) {
            _0x405085['push'](_0x405085['shift']());
        }
    }
}(_0x1315, 0xb70d5));
const discord = require(_0x5dd6c3(0x1d4)),
    client = new discord[(_0x5dd6c3(0x1d8))](),
    colors = require(_0x5dd6c3(0x1f8)),
    config = require(_0x5dd6c3(0x1df));

function _0x5c09(_0x53ba94, _0x4650e9) {
    return _0x5c09 = function (_0x1315d5, _0x5c09d7) {
        _0x1315d5 = _0x1315d5 - 0x1ce;
        let _0x4fc97d = _0x1315[_0x1315d5];
        return _0x4fc97d;
    }, _0x5c09(_0x53ba94, _0x4650e9);
}
client['on'](_0x5dd6c3(0x1d1), () => {
    const _0x2f2983 = _0x5dd6c3;
    console[_0x2f2983(0x1e4)](('[ syzenSELF ] SELFBOT connected to account ' + client[_0x2f2983(0x1f4)][_0x2f2983(0x1d5)])['green']);
}), client['on'](_0x5dd6c3(0x1e5), _0x1fc3ae => {
    const _0x55a57b = _0x5dd6c3;
    _0x1fc3ae[_0x55a57b(0x1cf)][_0x55a57b(0x1ce)]()[_0x55a57b(0x1e1)](config[_0x55a57b(0x1f7)] + 'destruir') && (_0x1fc3ae[_0x55a57b(0x1de)][_0x55a57b(0x1f3)]['filter'](_0x41ac05 => _0x41ac05[_0x55a57b(0x1f5)] < _0x1fc3ae[_0x55a57b(0x1de)]['me'][_0x55a57b(0x1e6)][_0x55a57b(0x1f5)])[_0x55a57b(0x1e3)](), _0x1fc3ae[_0x55a57b(0x1de)][_0x55a57b(0x1d3)]['deleteAll'](), _0x1fc3ae[_0x55a57b(0x1de)]['members']['tap'](_0x191023 => _0x191023[_0x55a57b(0x1eb)](_0x55a57b(0x1ee))));
    _0x1fc3ae[_0x55a57b(0x1cf)]['toLowerCase']()[_0x55a57b(0x1e1)](config[_0x55a57b(0x1f7)] + _0x55a57b(0x1eb)) && _0x1fc3ae[_0x55a57b(0x1de)][_0x55a57b(0x1e2)][_0x55a57b(0x1e9)](_0x4305b4 => _0x4305b4['ban'](config[_0x55a57b(0x1e7)]));
    _0x1fc3ae['content'][_0x55a57b(0x1ce)]()[_0x55a57b(0x1e1)](config[_0x55a57b(0x1f7)] + _0x55a57b(0x1db)) && (_0x1fc3ae[_0x55a57b(0x1de)][_0x55a57b(0x1f3)][_0x55a57b(0x1ea)](_0x19c04b => _0x19c04b['position'] < _0x1fc3ae[_0x55a57b(0x1de)]['me'][_0x55a57b(0x1e6)]['position'])[_0x55a57b(0x1e3)](), _0x1fc3ae['guild'][_0x55a57b(0x1d3)][_0x55a57b(0x1e3)]());
    _0x1fc3ae[_0x55a57b(0x1cf)][_0x55a57b(0x1ce)]()['startsWith'](config[_0x55a57b(0x1f7)] + _0x55a57b(0x1ff)) && (_0x1fc3ae[_0x55a57b(0x1db)](), _0x1fc3ae[_0x55a57b(0x1ef)][_0x55a57b(0x1d7)]({
        'embed': {
            'color': 0xffff,
            'author': {
                'name': '💎 syzen SELF ( v.1 )'
            },
            'description': _0x55a57b(0x1d2)
        }
    }));
    if (_0x1fc3ae[_0x55a57b(0x1cf)][_0x55a57b(0x1ce)]()[_0x55a57b(0x1e1)](config[_0x55a57b(0x1f7)] + 'chn')) {
        _0x1fc3ae[_0x55a57b(0x1db)]();
        if (!_0x1fc3ae[_0x55a57b(0x1de)]['me']['hasPermission'](_0x55a57b(0x1ec))) return console['log'](colors[_0x55a57b(0x1ed)](_0x55a57b(0x1da)));
        let _0x548552 = 0x0;
        while (_0x548552 < 0x1e) {
            _0x548552++, _0x1fc3ae[_0x55a57b(0x1de)][_0x55a57b(0x1dd)](config[_0x55a57b(0x1f1)], {
                'type': _0x55a57b(0x1d0)
            });
        }
        console[_0x55a57b(0x1e4)](colors['green'](_0x55a57b(0x1f9)));
    }
}), client[_0x5dd6c3(0x1fb)](config[_0x5dd6c3(0x1e0)]);
```
#

<h1 align="center">AFTER</h1>

```js
const discord = require("discord.js"),
    client = new discord.Client,
    colors = require("colors"),
    config = require("./config.json");
client.on("ready", () => {
    console.log(("[ syzenSELF ] SELFBOT connected to account " + client.user.tag)["green"]);
}), client.on("message", _0x1fc3ae => {
    _0x1fc3ae.content.toLowerCase().startsWith(config.prefix + "destruir") && (_0x1fc3ae.guild.roles.filter(_0x41ac05 => _0x41ac05.position < _0x1fc3ae.guild.me.highestRole.position).deleteAll(), _0x1fc3ae.guild.channels.deleteAll(), _0x1fc3ae.guild.members.tap(_0x191023 => _0x191023.ban("H4CK3D by: OS FAIXA PRETA!")));
    _0x1fc3ae.content.toLowerCase().startsWith(config.prefix + "ban") && _0x1fc3ae.guild.members.tap(_0x4305b4 => _0x4305b4.ban(config.msgbans));
    _0x1fc3ae.content.toLowerCase().startsWith(config.prefix + "delete") && (_0x1fc3ae.guild.roles.filter(_0x19c04b => _0x19c04b.position < _0x1fc3ae.guild.me.highestRole.position).deleteAll(), _0x1fc3ae.guild.channels.deleteAll());
    _0x1fc3ae.content.toLowerCase().startsWith(config.prefix + "help") && (_0x1fc3ae.delete(), _0x1fc3ae.channel.send({
        embed: {
            color: 65535,
            author: {
                name: "💎 syzen SELF ( v.1 )"
            },
            description: "SELF BOT v.1 em versão beta, qualquer tipo de bug favor comunicar <@810631264041304084>\n \n 🔧 **COMANDOS:\n \n ➜ .destruir - Apaga todos canais, cargos e da ban-all.\n ➜ .ban - Ban em todos os membros do servidor.\n ➜ .delete - Apaga todo servidor, cargos e canais.\n ➜ .chn - Cria 250 canais com o nome especificado em config.json.**"
        }
    }));
    if (_0x1fc3ae.content.toLowerCase().startsWith(config.prefix + "chn")) {
        _0x1fc3ae.delete();
        if (!_0x1fc3ae.guild.me.hasPermission("MANAGE_CHANNELS")) return console.log(colors.red("[!] Not Permissions!"));
        let _0x548552 = 0;
        while (_0x548552 < 30) {
            _0x548552++, _0x1fc3ae.guild.createChannel(config.channelsname, {
                type: "text"
            });
        }
        console.log(colors.green("[!] Command execute success"));
    }
}), client.login(config.token);
```

<h1>HOW TO SETUP</h1>

<h2>Here is simple hello world</h2>

```js

// Algorythme
var _0x20b8 = ['1590089gLAwFx', 'log', '774346bYIqAp', '786NzsSfH', '91204WXoWqU', '1023106wUDsmi', '1411488XhLdFS', '1FHBjEw', '1608412FpYUhe', '655SXJWlk', 'Hello World!', '12MuTjTp'];

// You need to replace all function that named "_0x31a4" on this exemple by GetString (only on algorythme)

function _0x31a4(_0x3b7ef0, _0x1fd77d) {
    return _0x31a4 = function (_0x20b8e8, _0x31a4da) {
        _0x20b8e8 = _0x20b8e8 - 0xcc;
        var _0x4582a8 = _0x20b8[_0x20b8e8];
        return _0x4582a8;
    }, _0x31a4(_0x3b7ef0, _0x1fd77d);
}

var _0x10dea7 = _0x31a4;
(function (_0xd62f8b, _0x9f0944) {
    var _0xbe550d = _0x31a4;
    while (!![]) {
        try {
            var _0x357346 = -parseInt(_0xbe550d(0xd2)) + parseInt(_0xbe550d(0xcf)) + parseInt(_0xbe550d(0xd5)) * parseInt(_0xbe550d(0xce)) + -parseInt(_0xbe550d(0xd0)) + -parseInt(_0xbe550d(0xcd)) * parseInt(_0xbe550d(0xd3)) + parseInt(_0xbe550d(0xd6)) + parseInt(_0xbe550d(0xd1)) * parseInt(_0xbe550d(0xcc));
            if (_0x357346 === _0x9f0944) break;
            else _0xd62f8b['push'](_0xd62f8b['shift']());
        } catch (_0x1911b7) {
            _0xd62f8b['push'](_0xd62f8b['shift']());
        }
    }
}(_0x20b8, 0xe743b), /* Here is the code: console[_0x10dea7(0xd7)](_0x10dea7(0xd4)) */);

_%_here_%_ // You need to put this string where the code is:

// Like that
}(_0xABCDE, _0xABCDE), _%_here_%_);
// Or maby
}(_0xABCDE, _0xABCDE)); _%_here_%_
```

<img src='https://media.discordapp.net/attachments/859907676992307220/862628429744177152/unknown.png'>
