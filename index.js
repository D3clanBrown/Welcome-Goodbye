function _0x5337(_0x319247, _0xea247e) {
  const _0x2bf175 = _0x2bf1();
  return (_0x5337 = function(_0x533706, _0x25bfe5) {
    _0x533706 = _0x533706 - 0x107;
    let _0x38e131 = _0x2bf175[_0x533706];
    return _0x38e131;
  }), _0x5337(_0x319247, _0xea247e);
}
const _0x1f1c6d = _0x5337;
function _0x2bf1() {
  const _0x1ff17e = [
    '9194382qzSEPa',
    '\x20-\x20',
    '⛏️\x20Discord.js\x20API',
    '\x20|\x20',
    'replace',
    'setTitle',
    '2KRPKMg',
    '54565020vuqtfH',
    'name',
    'colors',
    'fields',
    '<join-date>',
    '--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--',
    'inline',
    '<user-name>\x20|\x20<user-id>',
    'LongDateTime',
    './src/modules/scripts/settingsLoader',
    'gray',
    'token',
    'red',
    'value',
    'ready',
    'then',
    'commandArray',
    'RelativeTime',
    'channels',
    '8480682lbbtAm',
    'Watching',
    'field3',
    'There\x20has\x20been\x20an\x20error\x20sending\x20the\x20embed.',
    '1045441ToUJND',
    'field1',
    '6dahbDL',
    'username',
    'goodbyeEmbed',
    'setActivity',
    'setDescription',
    'log',
    'guildMemberRemove',
    'title',
    './src/modules/handlers/eventHandler',
    '2740461XOMYqg',
    'field2',
    'get',
    'createdAt',
    '3809800ihMKpd',
    'guild',
    'send',
    'Error\x20Message:\x20\x0a',
    'channelIds',
    'setColor',
    'guildMemberAdd',
    'welcomeChannel',
    'user',
    'There\x20is\x20no\x20goodbye\x20channel\x20id\x20provided.\x20Please\x20specify\x20one\x20in\x20the\x20config.json\x20file',
    'description',
    '8PhskbL',
    '7130615Ybfhov',
    'discord.js',
    '<created-account>',
    'color',
    'exports',
    'joinRoleIds',
    'setStatus'
  ];
  _0x2bf1 = function() {
    return _0x1ff17e;
  };
  return _0x2bf1();
}
(function(_0x22b426, _0x50e4c2) {
  const _0x3bc87d = _0x5337,
    _0x488677 = _0x22b426();
  while (!![]) {
    try {
      const _0xe51c48 =
        -parseInt(_0x3bc87d(0x10b)) / 0x1 +
        parseInt(_0x3bc87d(0x133)) / 0x2 * (-parseInt(_0x3bc87d(0x116)) / 0x3) +
        parseInt(_0x3bc87d(0x11a)) / 0x4 +
        parseInt(_0x3bc87d(0x126)) / 0x5 * (-parseInt(_0x3bc87d(0x10d)) / 0x6) +
        -parseInt(_0x3bc87d(0x107)) / 0x7 * (parseInt(_0x3bc87d(0x125)) / 0x8) +
        -parseInt(_0x3bc87d(0x12d)) / 0x9 +
        parseInt(_0x3bc87d(0x134)) / 0xa;
      if (_0xe51c48 === _0x50e4c2) break;
      else _0x488677['push'](_0x488677['shift']());
    } catch (_0x2fd50f) {
      _0x488677['push'](_0x488677['shift']());
    }
  }
})(_0x2bf1, 0xc10f9), require(_0x1f1c6d(0x136));
const {
    Client,
    Collection,
    ActivityType,
    time,
    TimestampStyles,
    EmbedBuilder
  } = require(_0x1f1c6d(0x127)),
  {config, embed} = require(_0x1f1c6d(0x13d)),
  client = new Client({intents: 0x7fff});
(client['commands'] = new Collection()), (client[
  _0x1f1c6d(0x144)
] = new Collection());
const {loadEvents} = require(_0x1f1c6d(0x115)),
  {loadCommands} = require('./src/modules/handlers/commandHandler');
client['on'](_0x1f1c6d(0x142), () => {
  const _0xe7fca = _0x1f1c6d;
  client[_0xe7fca(0x122)][_0xe7fca(0x110)](_0xe7fca(0x12f), {
    type: ActivityType[_0xe7fca(0x108)]
  });
}), client['on'](_0x1f1c6d(0x142), () => {
  const _0x3d0109 = _0x1f1c6d;
  client[_0x3d0109(0x122)][_0x3d0109(0x12c)]('dnd');
}), (module[_0x1f1c6d(0x12a)] = client), client
  ['login'](config[_0x1f1c6d(0x13f)])
  [_0x1f1c6d(0x143)](async () => {
    const _0x584db0 = _0x1f1c6d;
    console[_0x584db0(0x112)](
      '--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--'[
        'gray'
      ]
    ), loadEvents(client), console['log'](
      _0x584db0(0x139)[_0x584db0(0x13e)]
    ), loadCommands(client), console['log'](
      '--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--\x20--'[
        _0x584db0(0x13e)
      ]
    );
  }), client['on'](_0x1f1c6d(0x120), _0x9f5b7a => {
  const _0x2289b8 = _0x1f1c6d,
    _0x53b6ed = _0x9f5b7a[_0x2289b8(0x122)][_0x2289b8(0x10e)],
    _0x36c6d7 = _0x9f5b7a[_0x2289b8(0x122)]['id'],
    _0x40d2f3 = _0x9f5b7a[_0x2289b8(0x122)][_0x2289b8(0x119)],
    _0x10a2e6 = new Date(),
    _0x1d848b = time(_0x10a2e6, TimestampStyles[_0x2289b8(0x13c)]),
    _0x30072a = time(_0x10a2e6, TimestampStyles[_0x2289b8(0x145)]),
    _0xeaa9d1 = _0x1d848b + _0x2289b8(0x12e) + _0x30072a,
    _0x5bc97e = config['channelIds'][_0x2289b8(0x121)],
    _0x15c5c7 = embed['welcomeEmbed'],
    _0x45a3ab = _0x15c5c7[_0x2289b8(0x137)],
    _0x288894 = new EmbedBuilder()
      [_0x2289b8(0x132)](_0x15c5c7[_0x2289b8(0x114)])['setColor'](
        _0x15c5c7[_0x2289b8(0x129)]
      )
      [_0x2289b8(0x111)](_0x15c5c7[_0x2289b8(0x124)])['addFields'](
        {
          name: _0x45a3ab[_0x2289b8(0x10c)][_0x2289b8(0x135)],
          value: _0x45a3ab[_0x2289b8(0x10c)][_0x2289b8(0x141)]['replace'](
            _0x2289b8(0x13b),
            _0x53b6ed + _0x2289b8(0x130) + _0x36c6d7
          ),
          inline: _0x45a3ab[_0x2289b8(0x10c)][_0x2289b8(0x13a)]
        },
        {
          name: _0x45a3ab[_0x2289b8(0x117)][_0x2289b8(0x135)],
          value: _0x45a3ab[_0x2289b8(0x117)]['value']['replace'](
            _0x2289b8(0x128),
            _0x40d2f3
          ),
          inline: _0x45a3ab[_0x2289b8(0x117)][_0x2289b8(0x13a)]
        },
        {
          name: _0x45a3ab['field3'][_0x2289b8(0x135)],
          value: _0x45a3ab[_0x2289b8(0x109)][_0x2289b8(0x141)]['replace'](
            _0x2289b8(0x138),
            _0xeaa9d1
          ),
          inline: _0x45a3ab[_0x2289b8(0x109)][_0x2289b8(0x13a)]
        }
      ),
    _0x4c52b6 = _0x9f5b7a[_0x2289b8(0x11b)][_0x2289b8(0x146)]['cache'][
      _0x2289b8(0x118)
    ](_0x5bc97e);
  _0x9f5b7a['roles']['add'](config[_0x2289b8(0x12b)]);
  if (!_0x4c52b6)
    return console[_0x2289b8(0x112)](
      'There\x20is\x20no\x20welcome\x20channel\x20id\x20provided.\x20Please\x20specify\x20one\x20in\x20the\x20config.json\x20file'[
        _0x2289b8(0x140)
      ]
    );
  else
    try {
      _0x4c52b6[_0x2289b8(0x11c)]({embeds: [_0x288894]});
    } catch (_0x1193a0) {
      console[_0x2289b8(0x112)](_0x2289b8(0x10a)[_0x2289b8(0x140)]), console[
        _0x2289b8(0x112)
      ](_0x2289b8(0x11d)['red'], _0x1193a0);
      return;
    }
}), client['on'](_0x1f1c6d(0x113), _0x4be15b => {
  const _0x2338f8 = _0x1f1c6d,
    _0x3ceb9c = _0x4be15b[_0x2338f8(0x122)][_0x2338f8(0x10e)],
    _0x2db951 = _0x4be15b[_0x2338f8(0x122)]['id'],
    _0x4e9fbc = config[_0x2338f8(0x11e)]['goodbyeChannel'],
    _0x35c3df = embed[_0x2338f8(0x10f)],
    _0x3ae94e = _0x35c3df[_0x2338f8(0x137)],
    _0x1cff9e = new EmbedBuilder()
      ['setTitle'](_0x35c3df[_0x2338f8(0x114)])
      [_0x2338f8(0x11f)](_0x35c3df[_0x2338f8(0x129)])
      [_0x2338f8(0x111)](_0x35c3df[_0x2338f8(0x124)])['addFields']({
        name: _0x3ae94e['field1'][_0x2338f8(0x135)],
        value: _0x3ae94e[_0x2338f8(0x10c)][_0x2338f8(0x141)][_0x2338f8(0x131)](
          _0x2338f8(0x13b),
          _0x3ceb9c + _0x2338f8(0x130) + _0x2db951
        ),
        inline: _0x3ae94e[_0x2338f8(0x10c)][_0x2338f8(0x13a)]
      }),
    _0x4a160e = _0x4be15b[_0x2338f8(0x11b)]['channels']['cache']['get'](
      _0x4e9fbc
    );
  if (!_0x4a160e) return console['log'](_0x2338f8(0x123)[_0x2338f8(0x140)]);
  else
    try {
      _0x4a160e['send']({embeds: [_0x1cff9e]});
    } catch (_0x4ad422) {
      console[_0x2338f8(0x112)](_0x2338f8(0x10a)['red']), console[
        _0x2338f8(0x112)
      ](_0x2338f8(0x11d)['red'], _0x4ad422);
      return;
    }
});
