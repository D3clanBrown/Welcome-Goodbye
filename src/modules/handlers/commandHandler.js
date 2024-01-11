function _0x2901() {
  const _0x3a29ec = [
    'log',
    'length',
    'dim',
    './src/commands',
    'exports',
    '8eIjJoe',
    'toString',
    'filter',
    'toJSON',
    'No\x20Data',
    '666564xPBAnk',
    '1008721bqfpmD',
    '[\x20COMMAND\x20HANDLER\x20]\x20|\x20Total\x20Folders:\x20(',
    'name',
    '422106aPWSac',
    '[\x20COMMAND\x20HANDLER\x20]\x20|\x20Total\x20Files:\x20(',
    '194301LlaVCL',
    'bold',
    'endsWith',
    'push',
    '1037344tlgiPc',
    'addRow',
    '2376639UbxnyV',
    '.js',
    '[\x20COMMAND\x20HANDLER\x20]\x20|\x20Loaded\x20Commands\x20Successfully',
    'Command\x20Handler',
    'readdirSync',
    'commands',
    'data',
    '49032XWiyMT',
    'Loaded',
    'removeBorder',
    'colors',
    '10lsdluE'
  ];
  _0x2901 = function() {
    return _0x3a29ec;
  };
  return _0x2901();
}
const _0x544df6 = _0x277f;
(function(_0x1bff4f, _0x507d52) {
  const _0x318289 = _0x277f,
    _0x3b9de3 = _0x1bff4f();
  while (!![]) {
    try {
      const _0x41f990 =
        -parseInt(_0x318289(0x158)) / 0x1 +
        parseInt(_0x318289(0x165)) / 0x2 +
        -parseInt(_0x318289(0x178)) / 0x3 +
        parseInt(_0x318289(0x15c)) / 0x4 +
        parseInt(_0x318289(0x169)) / 0x5 * (-parseInt(_0x318289(0x174)) / 0x6) +
        parseInt(_0x318289(0x175)) / 0x7 +
        -parseInt(_0x318289(0x16f)) / 0x8 * (-parseInt(_0x318289(0x15e)) / 0x9);
      if (_0x41f990 === _0x507d52) break;
      else _0x3b9de3['push'](_0x3b9de3['shift']());
    } catch (_0x1129e3) {
      _0x3b9de3['push'](_0x3b9de3['shift']());
    }
  }
})(_0x2901, 0x20eb3);
function _0x277f(_0x376a58, _0x139bbe) {
  const _0x290190 = _0x2901();
  return (_0x277f = function(_0x277f03, _0x36e0c5) {
    _0x277f03 = _0x277f03 - 0x157;
    let _0x48f6e0 = _0x290190[_0x277f03];
    return _0x48f6e0;
  }), _0x277f(_0x376a58, _0x139bbe);
}
function loadCommands(_0x4fd981) {
  const _0x1b0266 = _0x277f,
    _0x5e4e21 = require('fs');
  require(_0x1b0266(0x168));
  const _0x5251bc = require('ascii-table'),
    _0x5b15e = new _0x5251bc()
      ['setTitle'](_0x1b0266(0x161))
      [_0x1b0266(0x167)]();
  let _0x15bb29 = [],
    _0x28ab92 = [],
    _0x5981ea = [];
  const _0x6faafc = _0x5e4e21['readdirSync'](_0x1b0266(0x16d));
  for (const _0x3f19cb of _0x6faafc) {
    _0x5981ea['push'](_0x3f19cb);
    const _0x34ead3 = _0x5e4e21
      [_0x1b0266(0x162)]('./src/commands/' + _0x3f19cb)
      [_0x1b0266(0x171)](_0xa5b424 =>
        _0xa5b424[_0x1b0266(0x15a)](_0x1b0266(0x15f))
      );
    for (const _0x5c0504 of _0x34ead3) {
      const _0x2094c3 = require('../../commands/' +
        _0x3f19cb +
        '/' +
        _0x5c0504);
      _0x28ab92['push'](_0x5c0504);
      if (!_0x2094c3[_0x1b0266(0x164)]) {
        _0x5b15e[_0x1b0266(0x15d)](
          _0x5c0504,
          _0x3f19cb,
          '🟥',
          _0x1b0266(0x173)
        );
        continue;
      }
      const _0xe5a96e = {folder: _0x3f19cb, ..._0x2094c3};
      _0x4fd981[_0x1b0266(0x163)]['set'](
        _0x2094c3[_0x1b0266(0x164)][_0x1b0266(0x177)],
        _0xe5a96e
      ), _0x15bb29[_0x1b0266(0x15b)](
        _0x2094c3[_0x1b0266(0x164)][_0x1b0266(0x172)]()
      ), _0x5b15e[_0x1b0266(0x15d)](
        _0x5c0504,
        _0x3f19cb,
        '🟩',
        _0x1b0266(0x166)
      );
    }
  }
  _0x4fd981['application'][_0x1b0266(0x163)]['set'](_0x15bb29), console[
    _0x1b0266(0x16a)
  ](_0x5b15e[_0x1b0266(0x170)](), '\x0a'), console[_0x1b0266(0x16a)](
    (_0x1b0266(0x157) + _0x28ab92[_0x1b0266(0x16b)] + ')')[_0x1b0266(0x16c)][
      _0x1b0266(0x159)
    ]
  ), console[_0x1b0266(0x16a)](
    (_0x1b0266(0x176) + _0x5981ea[_0x1b0266(0x16b)] + ')')[_0x1b0266(0x16c)][
      'bold'
    ]
  ), console[_0x1b0266(0x16a)](_0x1b0266(0x160)['green']);
}
module[_0x544df6(0x16e)] = {loadCommands: loadCommands};
