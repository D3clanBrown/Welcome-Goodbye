const _0x565974 = _0xa037;
function _0xa037(_0x52a37c, _0x46bca3) {
  const _0x6a979d = _0x6a97();
  return (_0xa037 = function(_0xa0378, _0xaee302) {
    _0xa0378 = _0xa0378 - 0x1c9;
    let _0x57dc7d = _0x6a979d[_0xa0378];
    return _0x57dc7d;
  }), _0xa037(_0x52a37c, _0x46bca3);
}
(function(_0x199dcf, _0x18943f) {
  const _0x2574d6 = _0xa037,
    _0xaa9273 = _0x199dcf();
  while (!![]) {
    try {
      const _0xbd4a09 =
        parseInt(_0x2574d6(0x1d1)) / 0x1 * (parseInt(_0x2574d6(0x1ce)) / 0x2) +
        parseInt(_0x2574d6(0x1d8)) / 0x3 * (-parseInt(_0x2574d6(0x1d4)) / 0x4) +
        parseInt(_0x2574d6(0x1d0)) / 0x5 +
        -parseInt(_0x2574d6(0x1d6)) / 0x6 * (parseInt(_0x2574d6(0x1d5)) / 0x7) +
        parseInt(_0x2574d6(0x1ca)) / 0x8 * (parseInt(_0x2574d6(0x1dc)) / 0x9) +
        parseInt(_0x2574d6(0x1d3)) / 0xa +
        -parseInt(_0x2574d6(0x1d7)) / 0xb;
      if (_0xbd4a09 === _0x18943f) break;
      else _0xaa9273['push'](_0xaa9273['shift']());
    } catch (_0x15b3b5) {
      _0xaa9273['push'](_0xaa9273['shift']());
    }
  }
})(_0x6a97, 0xb2484);
const {Events, Client, CommandInteraction, EmbedBuilder} = require(_0x565974(
  0x1cf
));
function _0x6a97() {
  const _0x33cbb8 = [
    '1176950GaPRCp',
    '276NZcMBj',
    '338121kdVgLb',
    '96uSyIsn',
    '365717cIUkMw',
    '14247cJqfuM',
    'commandName',
    'reply',
    'exports',
    '54MEWboN',
    'execute',
    '1445336stawak',
    'get',
    'colors',
    'message',
    '17498OAacVD',
    'discord.js',
    '1780540cVOOxt',
    '35QsymKC',
    'InteractionCreate'
  ];
  _0x6a97 = function() {
    return _0x33cbb8;
  };
  return _0x6a97();
}
require(_0x565974(0x1cc)), (module[_0x565974(0x1db)] = {
  name: Events[_0x565974(0x1d2)],
  async execute(_0x47343c, _0x1f3633) {
    const _0xfddc60 = _0x565974;
    if (!_0x47343c['isChatInputCommand']()) return;
    const _0x3962a2 = _0x1f3633['commands'][_0xfddc60(0x1cb)](
      _0x47343c[_0xfddc60(0x1d9)]
    );
    !_0x3962a2 &&
      _0x47343c['reply']({
        content: 'This\x20command\x20does\x20not\x20exist.',
        ephemeral: !![]
      });
    try {
      _0x3962a2[_0xfddc60(0x1c9)](_0x47343c, _0x1f3633);
    } catch (_0x4f2c2e) {
      console['log'](_0x4f2c2e), _0x47343c[_0xfddc60(0x1da)]({
        content:
          'There\x20was\x20an\x20error\x20executing\x20the\x20command:\x20' +
          _0x4f2c2e[_0xfddc60(0x1cd)],
        ephemeral: !![]
      });
    }
  }
});
