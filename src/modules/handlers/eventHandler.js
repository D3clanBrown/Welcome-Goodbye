(function(_0x1c3d7c, _0x5f2f01) {
  const _0x340f63 = _0x185c,
    _0x150536 = _0x1c3d7c();
  while (!![]) {
    try {
      const _0x780d15 =
        -parseInt(_0x340f63(0xd1)) / 0x1 +
        parseInt(_0x340f63(0xcd)) / 0x2 +
        parseInt(_0x340f63(0xd5)) / 0x3 +
        -parseInt(_0x340f63(0xd3)) / 0x4 +
        -parseInt(_0x340f63(0xc9)) / 0x5 +
        parseInt(_0x340f63(0xca)) / 0x6 * (parseInt(_0x340f63(0xd8)) / 0x7) +
        parseInt(_0x340f63(0xd9)) / 0x8;
      if (_0x780d15 === _0x5f2f01) break;
      else _0x150536['push'](_0x150536['shift']());
    } catch (_0x53bdc2) {
      _0x150536['push'](_0x150536['shift']());
    }
  }
})(_0x6320, 0xc16df);
function _0x185c(_0xa9820c, _0x16fc60) {
  const _0x6320a6 = _0x6320();
  return (_0x185c = function(_0x185ccf, _0x482ab8) {
    _0x185ccf = _0x185ccf - 0xc8;
    let _0x2b30b0 = _0x6320a6[_0x185ccf];
    return _0x2b30b0;
  }), _0x185c(_0xa9820c, _0x16fc60);
}
function loadEvents(_0x40995b) {
  const _0x3720da = _0x185c,
    _0xae89c8 = require('fs');
  require(_0x3720da(0xd7));
  const _0x55a80c = _0xae89c8['readdirSync']('./src/events');
  for (const _0x4420dd of _0x55a80c) {
    const _0x4f8bb1 = _0xae89c8
      [_0x3720da(0xd2)](_0x3720da(0xc8) + _0x4420dd)
      [_0x3720da(0xcf)](_0x32e63b =>
        _0x32e63b[_0x3720da(0xcb)](_0x3720da(0xce))
      );
    for (const _0x4926b8 of _0x4f8bb1) {
      const _0x4663bc = require('../../events/' + _0x4420dd + '/' + _0x4926b8);
      if (_0x4663bc[_0x3720da(0xcc)]) {
        if (_0x4663bc[_0x3720da(0xd4)])
          _0x40995b['rest'][_0x3720da(0xd4)](
            _0x4663bc['name'],
            (..._0x5c90f5) =>
              _0x4663bc[_0x3720da(0xd0)](..._0x5c90f5, _0x40995b)
          );
        else
          _0x40995b['rest']['on'](_0x4663bc['name'], (..._0xf8c285) =>
            _0x4663bc['execute'](..._0xf8c285, _0x40995b)
          );
      } else {
        if (_0x4663bc[_0x3720da(0xd4)])
          _0x40995b[_0x3720da(0xd4)](
            _0x4663bc[_0x3720da(0xd6)],
            (..._0x77bd01) =>
              _0x4663bc[_0x3720da(0xd0)](..._0x77bd01, _0x40995b)
          );
        else
          _0x40995b['on'](_0x4663bc['name'], (..._0x1c81d2) =>
            _0x4663bc[_0x3720da(0xd0)](..._0x1c81d2, _0x40995b)
          );
      }
    }
  }
  return console['log'](
    '[\x20EVENT\x20HANDLER\x20]\x20|\x20Loaded\x20Events\x20Successfully'[
      'green'
    ]
  );
}
function _0x6320() {
  const _0x59fa0b = [
    'colors',
    '3899ECjixx',
    '4247512RXsZQg',
    './src/events/',
    '4710435qoUwCw',
    '402MnoBvu',
    'endsWith',
    'rest',
    '1231738nXaECB',
    '.js',
    'filter',
    'execute',
    '435421XyCmra',
    'readdirSync',
    '829500beufnt',
    'once',
    '3579129OAjqjO',
    'name'
  ];
  _0x6320 = function() {
    return _0x59fa0b;
  };
  return _0x6320();
}
module['exports'] = {loadEvents: loadEvents};
