
// main js for the app!

function _0x5661(_0x33635b, _0x51f96c) {
    var _0x2c0e14 = _0x2c0e();
    return _0x5661 = function(_0x5661de, _0x10247e) {
      _0x5661de = _0x5661de - 0x12f;
      var _0x1b5cf6 = _0x2c0e14[_0x5661de];
      return _0x1b5cf6;
    }, _0x5661(_0x33635b, _0x51f96c);
    }
    var _0x59b648 = _0x5661;
    (function(_0x19c549, _0x3551e9) {
    var _0x21cb8f = _0x5661,
      _0x192bb6 = _0x19c549();
    while (!![]) {
      try {
        var _0x4fd11c = parseInt(_0x21cb8f(0x15b)) / 0x1 * (parseInt(_0x21cb8f(0x151)) / 0x2) + -parseInt(_0x21cb8f(0x139)) / 0x3 * (-parseInt(_0x21cb8f(0x16d)) / 0x4) + parseInt(_0x21cb8f(0x1b5)) / 0x5 + -parseInt(_0x21cb8f(0x19a)) / 0x6 * (parseInt(_0x21cb8f(0x160)) / 0x7) + -parseInt(_0x21cb8f(0x170)) / 0x8 * (-parseInt(_0x21cb8f(0x162)) / 0x9) + parseInt(_0x21cb8f(0x161)) / 0xa * (-parseInt(_0x21cb8f(0x166)) / 0xb) + -parseInt(_0x21cb8f(0x193)) / 0xc;
        if (_0x4fd11c === _0x3551e9) break;
        else _0x192bb6['push'](_0x192bb6['shift']());
      } catch (_0x3798ad) {
        _0x192bb6['push'](_0x192bb6['shift']());
      }
    }
    }(_0x2c0e, 0xb6172), $(_0x59b648(0x16e))[_0x59b648(0x1bb)](), $(_0x59b648(0x192))[_0x59b648(0x187)](), $(_0x59b648(0x1c5))['show'](), $('.DecimalsField')[_0x59b648(0x187)](), $('.SupplyField')['show'](), $(_0x59b648(0x1a6))[_0x59b648(0x1bb)](), $('.CapField')['hide'](), $(_0x59b648(0x1ad))['show'](), $('.BaseURIField')[_0x59b648(0x1bb)](), $('#FixedDes')[_0x59b648(0x187)](), $(_0x59b648(0x176))[_0x59b648(0x1bb)](), $('#CappedDes')[_0x59b648(0x1bb)](), $(_0x59b648(0x14c))['hide'](), $(_0x59b648(0x1a2))[_0x59b648(0x1bb)](), $(_0x59b648(0x1c0))[_0x59b648(0x1bb)](), $(_0x59b648(0x137))[_0x59b648(0x1bb)](), $(_0x59b648(0x168))[_0x59b648(0x1bb)](), $(_0x59b648(0x142))['hide'](), $(_0x59b648(0x158))[_0x59b648(0x1bb)]());
    var selectedBalue = '0',
    GenerateTokenAddress, UseContract, RopstenScanHome = _0x59b648(0x185),
    RinkebyScanHome = 'https://rinkeby.etherscan.io/',
    PolygonScanHome = _0x59b648(0x1be),
    BinanceScanHome = 'https://bscscan.com/',
    EthereumScanHome = _0x59b648(0x1ce),
    CronosScanHome = _0x59b648(0x136),
    AvalancheScanHome = _0x59b648(0x157),
    FantomScanHome = _0x59b648(0x13c),
    ScanHome = '',
    BeeFee = 0.01,
    Fee = 0.02,
    SendFee;
    $(document)['ready'](async function() {
    var _0x173bdf = _0x59b648;
    UseContract = TokenContracts, AddSelect(), $(_0x173bdf(0x154))['on'](_0x173bdf(0x1a8), function() {
      var _0x4b108d = _0x173bdf;
      $(_0x4b108d(0x17f))[_0x4b108d(0x145)](''), $('#loader1')[_0x4b108d(0x1bb)](), $(_0x4b108d(0x1c1))[_0x4b108d(0x145)](''), $(_0x4b108d(0x158))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x16e))['hide'](), selectedBalue = $(_0x4b108d(0x154))[_0x4b108d(0x15e)](), console[_0x4b108d(0x148)](_0x4b108d(0x184) + selectedBalue);
      var _0x47c8ab = '<span\x20class=\x27badge\x20badge-pill\x20badge-success\x20m-1\x27>ERC20</span>',
        _0x54d37c = _0x4b108d(0x1bd),
        _0x59e761 = _0x4b108d(0x1b1),
        _0x5d98c8 = '<span\x20class=\x27badge\x20badge-pill\x20badge-success\x20m-1\x27>Burnable</span>',
        _0x56bbad = '<span\x20class=\x27badge\x20badge-pill\x20badge-info\x20m-1\x27>Capped</span>',
        _0x2b17a8 = _0x4b108d(0x1ca),
        _0x18ff93 = _0x4b108d(0x18c),
        _0x4aa07e = '<span\x20class=\x27badge\x20badge-pill\x20badge-info\x20m-1\x27>ERC721</span>',
        _0x1a387f = _0x4b108d(0x190),
        _0x18ff93 = _0x4b108d(0x18c),
        _0xf167ef = _0x4b108d(0x16c),
        _0x1f6b74 = _0x4b108d(0x1b4),
        _0x10ec14 = _0x4b108d(0x135),
        _0xc03f9b = _0x4b108d(0x17e),
        _0x4f8387 = '</div>',
        _0x15b243 = _0x4b108d(0x150),
        _0x46dacb = _0x4b108d(0x1cc),
        _0x3a1aa5 = 'You\x20can\x20issue\x20a\x20limited\x20number\x20of\x20erc20\x20tokens\x20with\x20one-click.<br>',
        _0x1708be = _0x4b108d(0x143),
        _0x904f93 = _0x4b108d(0x1b8),
        _0x3ea570 = 'You\x20can\x20one-click\x20to\x20issue\x20erc20\x20tokens\x20that\x20can\x20be\x20suspended,\x20minted,\x20have\x20an\x20upper\x20limit,\x20and\x20can\x20be\x20destroyed.<br>',
        _0x216ef1 = '';
      switch (selectedBalue) {
        case _0x4b108d(0x1bc):
          console[_0x4b108d(0x148)](_0x4b108d(0x1c9)), $(_0x4b108d(0x172))[_0x4b108d(0x187)](), $(_0x4b108d(0x176))[_0x4b108d(0x1bb)](), $('#MintableDes')['hide'](), $(_0x4b108d(0x1a2))['hide'](), $('#MultiFunctionDes')[_0x4b108d(0x1bb)](), $(_0x4b108d(0x137))[_0x4b108d(0x1bb)](), $('#PermitDes')['hide'](), $('#VotesDes')[_0x4b108d(0x1bb)](), $(_0x4b108d(0x158))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x17f))[_0x4b108d(0x145)](_0x47c8ab + _0x54d37c + _0x1a387f);
          break;
        case _0x4b108d(0x19b):
          $(_0x4b108d(0x172))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x176))[_0x4b108d(0x187)](), $(_0x4b108d(0x14c))['hide'](), $(_0x4b108d(0x1a2))[_0x4b108d(0x1bb)](), $('#MultiFunctionDes')[_0x4b108d(0x1bb)](), $(_0x4b108d(0x137))[_0x4b108d(0x1bb)](), $('#PermitDes')['hide'](), $('#VotesDes')[_0x4b108d(0x1bb)](), $(_0x4b108d(0x158))[_0x4b108d(0x1bb)](), $('#TokenDescription')[_0x4b108d(0x145)](_0x47c8ab + _0x5d98c8 + _0x1a387f);
          break;
        case 'Mintable\x20Token':
          $(_0x4b108d(0x172))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x176))['hide'](), $(_0x4b108d(0x14c))[_0x4b108d(0x187)](), $(_0x4b108d(0x1a2))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x1c0))['hide'](), $(_0x4b108d(0x137))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x168))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x142))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x158))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x17f))[_0x4b108d(0x145)](_0x47c8ab + _0x2b17a8 + _0x1a387f);
          break;
        case _0x4b108d(0x146):
          $(_0x4b108d(0x172))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x176))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x14c))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x1a2))['show'](), $(_0x4b108d(0x1c0))['hide'](), $(_0x4b108d(0x137))['hide'](), $(_0x4b108d(0x168))['hide'](), $(_0x4b108d(0x142))['hide'](), $(_0x4b108d(0x158))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x17f))[_0x4b108d(0x145)](_0x47c8ab + _0x54d37c + _0x18ff93 + _0x1a387f);
          break;
        case 'Full\x20Function\x20Token':
          $(_0x4b108d(0x172))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x176))['hide'](), $(_0x4b108d(0x14c))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x1a2))[_0x4b108d(0x1bb)](), $('#MultiFunctionDes')[_0x4b108d(0x187)](), $(_0x4b108d(0x137))[_0x4b108d(0x1bb)](), $('#PermitDes')['hide'](), $(_0x4b108d(0x142))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x158))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x17f))['html'](_0x47c8ab + _0x54d37c + _0x2b17a8 + _0x5d98c8 + _0x18ff93 + _0x1a387f);
          break;
        case _0x4b108d(0x1c8):
          $(_0x4b108d(0x172))['hide'](), $(_0x4b108d(0x176))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x14c))['hide'](), $(_0x4b108d(0x1a2))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x1c0))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x137))[_0x4b108d(0x187)](), $('#PermitDes')[_0x4b108d(0x1bb)](), $(_0x4b108d(0x142))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x158))['hide'](), $(_0x4b108d(0x17f))[_0x4b108d(0x145)](_0x47c8ab + _0x54d37c + _0x1f6b74 + _0x1a387f);
          break;
        case _0x4b108d(0x1b6):
          $(_0x4b108d(0x172))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x176))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x14c))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x1a2))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x1c0))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x137))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x168))[_0x4b108d(0x187)](), $(_0x4b108d(0x142))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x158))['hide'](), $(_0x4b108d(0x17f))['html'](_0x47c8ab + _0xf167ef + _0x1a387f);
          break;
        case _0x4b108d(0x1a9):
          $(_0x4b108d(0x172))[_0x4b108d(0x1bb)](), $('#BurnableDes')[_0x4b108d(0x1bb)](), $(_0x4b108d(0x14c))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x1a2))[_0x4b108d(0x1bb)](), $(_0x4b108d(0x1c0))[_0x4b108d(0x1bb)](), $('#FlashMintDes')[_0x4b108d(0x1bb)](), $(_0x4b108d(0x168))['hide'](), $('#VotesDes')[_0x4b108d(0x187)](), $(_0x4b108d(0x158))[_0x4b108d(0x1bb)](), $('#TokenDescription')[_0x4b108d(0x145)](_0x47c8ab + _0x10ec14 + _0x1a387f);
          break;
        default:
      }
    });
    }), $('#approveThisButton')[_0x59b648(0x1bb)](), $(_0x59b648(0x156))['hide'](), $('#WithdrawButton')[_0x59b648(0x1bb)](), $(_0x59b648(0x1a3))[_0x59b648(0x1bb)](), $(_0x59b648(0x131))[_0x59b648(0x1bb)]();
    var FixTokenGenerateContract, TransferContract, ERC20MintableContract, ERC721Contract, TokenContract;
    async function getJson(_0x4c6970) {
    var _0x110e18 = _0x59b648;
    let _0x1594fc = await (await fetch(_0x4c6970))[_0x110e18(0x1aa)]();
    return _0x1594fc;
    }
    async function CheckMetamaskConnection() {
    var _0x2dab74 = _0x59b648;
    if (window['ethereum']) {
      window[_0x2dab74(0x189)] = new Web3(window[_0x2dab74(0x138)]);
      try {
        return await ethereum[_0x2dab74(0x1b9)](), window['ethereum']['on'](_0x2dab74(0x167), function(_0x4f1e92) {
          var _0x29e5f8 = _0x2dab74;
          console['log'](_0x29e5f8(0x130), _0x4f1e92), window[_0x29e5f8(0x15d)][_0x29e5f8(0x153)]();
        }), window['ethereum']['on'](_0x2dab74(0x180), function(_0x42bc50) {
          var _0x2bd00c = _0x2dab74;
          console[_0x2bd00c(0x148)](_0x2bd00c(0x180), _0x42bc50), window[_0x2bd00c(0x15d)][_0x2bd00c(0x153)]();
        }), !![];
      } catch (_0x1338ca) {
        return ![];
      }
    } else return window[_0x2dab74(0x189)] ? (window[_0x2dab74(0x189)] = new Web3(web3[_0x2dab74(0x155)]), !![]) : (console[_0x2dab74(0x148)]('Non-Ethereum\x20browser\x20detected.\x20You\x20should\x20consider\x20trying\x20MetaMask!'), ![]);
    }
    $(document)[_0x59b648(0x144)](async function() {
    var _0x341c71 = _0x59b648,
      _0x2c2227 = await CheckMetamaskConnection();
    if (_0x2c2227) {
      document[_0x341c71(0x1c2)](_0x341c71(0x1b2))[_0x341c71(0x17d)] = web3[_0x341c71(0x155)][_0x341c71(0x1ab)];
      var _0x4b39a0 = await web3[_0x341c71(0x13a)][_0x341c71(0x132)][_0x341c71(0x173)]();
      console[_0x341c71(0x148)]('Current\x20NetworkID:', _0x4b39a0);
      switch (_0x4b39a0) {
        case 0x1:
          console[_0x341c71(0x148)](_0x341c71(0x1a7)), Fee = 0.01, BeeFee = EthereumFee, ScanHome = EthereumScanHome;
          break;
        case 0x2:
          console[_0x341c71(0x148)]('This\x20is\x20the\x20deprecated\x20Morden\x20test\x20network.');
          break;
        case 0x3:
          Fee = 0.01, BeeFee = RopstenFee, ScanHome = RopstenScanHome;
          break;
        case 0x4:
          Fee = 0.01, BeeFee = RopstenFee, ScanHome = RinkebyScanHome;
          break;
        case 0x19:
          Fee = 0x3, BeeFee = CronosFee, ScanHome = CronosScanHome;
          break;
        case 0x2a:
          Fee = 0.01;
          break;
        case 0x38:
          Fee = 0.01, BeeFee = BinanceFee, ScanHome = BinanceScanHome;
          break;
        case 0x61:
          Fee = 0.01;
          break;
        case 0x6c:
          Fee = 0.01;
          break;
        case 0x80:
          Fee = 0.01;
          break;
        case 0x89:
          Fee = 0.1, BeeFee = PolygonFee, ScanHome = PolygonScanHome;
          break;
        case 0xfa:
          Fee = 0.1, BeeFee = FantomFee, ScanHome = FantomScanHome;
          break;
        case 0x3445:
          Fee = 0.1;
          break;
        case 0xa86a:
          Fee = 0.1, BeeFee = AvalancheFee, ScanHome = AvalancheScanHome;
          break;
        default:
          console[_0x341c71(0x148)](_0x341c71(0x1a1));
      }
      SendFee = (BigInt(web3[_0x341c71(0x18b)]['toWei'](Fee['toString']())) + BigInt(web3[_0x341c71(0x18b)][_0x341c71(0x171)](BeeFee['toString']())))[_0x341c71(0x14d)](), console[_0x341c71(0x148)](_0x341c71(0x19c), SendFee), console[_0x341c71(0x148)](_0x341c71(0x191), ScanHome), console[_0x341c71(0x148)](_0x341c71(0x181), FeeReciever), $('#FeeID')['html']('Fee:' + web3['utils'][_0x341c71(0x194)](SendFee) + '\x20+\x20Dynamic\x20gas\x20fee');
      var _0x291c29 = web3[_0x341c71(0x155)][_0x341c71(0x1ab)],
        _0x477530 = web3['currentProvider'][_0x341c71(0x1ab)],
        _0x33a58f = web3['currentProvider'][_0x341c71(0x1ab)][_0x341c71(0x196)] - 0x4,
        _0x179c8e = _0x477530[_0x341c71(0x134)](0x0, 0x6),
        _0x4d52a3 = _0x477530[_0x341c71(0x134)](_0x33a58f, web3['currentProvider']['selectedAddress'][_0x341c71(0x196)]),
        _0x4e769c = _0x179c8e + _0x341c71(0x174) + _0x4d52a3;
      $(_0x341c71(0x18a))['html'](_0x4e769c), TokenContract = await new web3['eth'][(_0x341c71(0x1b0))](TokenSmartContractABI, TokenSmartContractAddress, {
        'from': web3[_0x341c71(0x155)]['selectedAddress']
      }), $('#TokenSubmit')[_0x341c71(0x163)](function() {
        var _0x5eab95 = _0x341c71;
        $(_0x5eab95(0x19d))[_0x5eab95(0x187)](), $(_0x5eab95(0x1c1))[_0x5eab95(0x145)](''), GenerateToken();
      }), $(_0x341c71(0x158))[_0x341c71(0x163)](function() {
        add();
      }), $(_0x341c71(0x186))[_0x341c71(0x163)](function() {
        var _0x45ace1 = _0x341c71;
        $(_0x45ace1(0x19d))[_0x45ace1(0x187)](), GenerateToken();
      }), $(_0x341c71(0x1cd))[_0x341c71(0x163)](function() {
        var _0x48a76e = _0x341c71;
        $(_0x48a76e(0x14e))[_0x48a76e(0x187)](), generateERC20MultiFunctionToken();
      }), $(_0x341c71(0x147))[_0x341c71(0x163)](function() {
        var _0x1d6a33 = _0x341c71;
        $(_0x1d6a33(0x188))[_0x1d6a33(0x187)](), GenerateERC20MintableToken();
      }), $(_0x341c71(0x1a4))[_0x341c71(0x163)](function() {
        var _0x352b9b = _0x341c71;
        $(_0x352b9b(0x19f))['show'](), GenerateERC721FullToken();
      }), console[_0x341c71(0x148)]('Metamask\x20detected!');
    } else console[_0x341c71(0x148)]('Metamask\x20not\x20detected'), $('#InstallMetamaskDescription')['html']('<div\x20class=\x27alert\x20alert-warning\x27\x20role=\x27alert\x27>\x20<a\x20\x20\x20href=\x27https://metamask.io/\x27>Click\x20to\x20Install\x20Metamask\x20First</a></div>');
    });
    async function InitDes() {
    var _0x2079cc = _0x59b648;
    $('#FixedDes')['show'](), $(_0x2079cc(0x176))['hide'](), $(_0x2079cc(0x14c))[_0x2079cc(0x1bb)](), $('#PausableDes')[_0x2079cc(0x1bb)](), $(_0x2079cc(0x1c0))[_0x2079cc(0x1bb)](), $(_0x2079cc(0x137))[_0x2079cc(0x1bb)](), $('#PermitDes')['hide'](), $('#VotesDes')[_0x2079cc(0x1bb)]();
    }
    async function add() {
    var _0x297b5d = _0x59b648;
    console[_0x297b5d(0x148)](document[_0x297b5d(0x1c2)](_0x297b5d(0x15f))[_0x297b5d(0x17d)]), console[_0x297b5d(0x148)](document[_0x297b5d(0x1c2)](_0x297b5d(0x15c))[_0x297b5d(0x17d)]);
    const _0x32953e = GenerateTokenAddress,
      _0x209fec = document[_0x297b5d(0x1c2)](_0x297b5d(0x15c))['value'];
    try {
      const _0x424404 = await ethereum[_0x297b5d(0x1b7)]({
        'method': _0x297b5d(0x159),
        'params': {
          'type': _0x297b5d(0x195),
          'options': {
            'address': _0x32953e,
            'symbol': _0x209fec,
            'decimals': 0x12
          }
        }
      });
      _0x424404 ? console['log'](_0x297b5d(0x178)) : console['log'](_0x297b5d(0x1c3));
    } catch (_0x54d25f) {
      console['log'](_0x54d25f);
    }
    }
    async function AddSelect() {
    var _0x39a3fa = _0x59b648,
      _0x3fbeda = document[_0x39a3fa(0x1c2)](_0x39a3fa(0x1ae));
    if (_0x3fbeda !== null) {
      console[_0x39a3fa(0x148)](_0x39a3fa(0x164), UseContract);
      var _0x2b2561 = '';
      Object['keys'](UseContract)[_0x39a3fa(0x198)](function(_0x3df149) {
        var _0x3e77e3 = _0x39a3fa;
        console[_0x3e77e3(0x148)]('Key\x20:\x20' + _0x3df149 + ',\x20Value\x20:\x20' + UseContract[_0x3df149][0x0]['symbol']);
        var _0x1bbe5a = document[_0x3e77e3(0x1cb)](_0x3e77e3(0x133));
        _0x2b2561 += _0x3e77e3(0x179), _0x2b2561 += _0x3df149, _0x2b2561 += '\x22\x20', _0x2b2561 += _0x3e77e3(0x17a), _0x2b2561 += _0x3e77e3(0x13f), _0x2b2561 += _0x3df149, _0x2b2561 += '\x22>', _0x2b2561 += _0x3df149, _0x2b2561 += _0x3e77e3(0x1c6);
      }), $('#SelectIWant')[_0x39a3fa(0x169)](_0x2b2561);
    }
    }
    async function IWantChange() {
    var _0x5399fa = _0x59b648;
    IWantobj = document[_0x5399fa(0x1c2)]('SelectIWant'), console[_0x5399fa(0x148)](UseContract[document[_0x5399fa(0x1c2)]('SelectIWant')[_0x5399fa(0x17d)]][0x0][_0x5399fa(0x15f)]), $(_0x5399fa(0x1c1))[_0x5399fa(0x145)]('');
    }
    async function saveToFirebase(_0x4daf93, _0x1e959a) {
    var _0x3451cf = _0x59b648;
    console['log'](_0x3451cf(0x14a)), db[_0x3451cf(0x1a0)](_0x3451cf(0x17c))['doc']()['set']({
      'TokenType': _0x4daf93,
      'detailInfo': _0x1e959a
    });
    }
    async function addTokenFunction(_0x11c069, _0x1811f2, _0x3bd1c1, _0x2a2140) {
    var _0x2dce98 = _0x59b648;
    try {
      const _0x21c354 = await ethereum['request']({
        'method': _0x2dce98(0x159),
        'params': {
          'type': 'ERC20',
          'options': {
            'address': _0x11c069,
            'symbol': _0x1811f2,
            'decimals': _0x3bd1c1,
            'image': _0x2a2140
          }
        }
      });
      _0x21c354 ? console[_0x2dce98(0x148)]('Thanks\x20for\x20your\x20interest!') : console[_0x2dce98(0x148)]('\x20\x20Coin\x20has\x20not\x20been\x20added');
    } catch (_0x516bf0) {
      console['log'](_0x516bf0);
    }
    }
    
    function _0x2c0e() {
    var _0x49b243 = ['FlashMint\x20Token', 'you\x20choose\x20fix\x20', '<span\x20class=\x27badge\x20badge-pill\x20badge-info\x20m-1\x27>Mintable</span>', 'createElement', 'You\x20can\x20issue\x20a\x20destroyable\x20erc20\x20token\x20with\x20one-click。<br>', '#createMultiFunctionToken', 'https://etherscan.io/', 'XXX', 'accountsChanges', '#DepositDiv', 'net', 'option', 'substring', '<span\x20class=\x27badge\x20badge-pill\x20badge-light\x20m-1\x27>Votes</span>', 'https://cronoscan.com/', '#FlashMintDes', 'ethereum', '3sxWUKn', 'eth', 'transactionHash', 'https://ftmscan.com/', '</p>', 'contractAddress', 'key=\x22', '\x22\x20target=\x22blank\x22>', 'supplyAmount', '#VotesDes', 'You\x20can\x20issue\x20mintable\x20erc20\x20tokens\x20with\x20one-click,\x20and\x20mint\x20tokens\x20for\x20specified\x20addresses\x20at\x20any\x20time.<br>', 'ready', 'html', 'Pausable\x20Token', '#createERC20MintableToken', 'log', 'err', 'Save\x20to\x20firebase', '<a\x20href=\x22', '#MintableDes', 'toString', '#loader2', 'networkId:', 'You\x20can\x20issue\x20a\x20fixed\x20amount\x20of\x20erc20\x20tokens\x20with\x20one-click。<br>', '345534QNuTRe', 'address/', 'reload', '#SelectIWant', 'currentProvider', '#DepositButton', 'https://snowtrace.io/', '#addToMetamaskButton', 'wallet_watchAsset', 'gasPrice:', '6uipNwf', 'symbol', 'location', 'val', 'name', '1162PkqZxv', '70aEFZta', '845505YVfNIQ', 'click', 'UseContract\x20:\x20', 'abi', '1894541tnDwnW', 'accountsChanged', '#PermitDes', 'append', '<br>Please\x20save\x20your\x20token\x20address\x20to\x20your\x20computer,\x20mobile\x20phone\x20or\x20paper.<br></center>', 'YYY', '<span\x20class=\x27badge\x20badge-pill\x20badge-light\x20m-1\x27>Permit</span>', '3502076fRVThS', '#FormTips', 'final\x20arg:', '120uJUduD', 'toWei', '#FixedDes', 'getId', '.......', 'Start\x20deploying\x20Token\x20Contract,Please\x20confirm\x20in\x20metamask\x20wallet....', '#BurnableDes', '</a>', 'Thanks\x20for\x20your\x20interest!', '<option\x20value=\x22', 'class=\x22lang\x22\x20', 'send', 'tasks', 'value', '<div\x20class=\x27alert\x20alert-primary\x27\x20role=\x27alert\x27>', '#TokenDescription', 'networkChanged', 'FeeReciever:', 'deploy', 'message', 'index\x20:::::::', 'https://ropsten.etherscan.io/', '#createToken', 'show', '#loader3', 'web3', '#CurrentAddress', 'utils', '<span\x20class=\x27badge\x20badge-pill\x20badge-light\x20m-1\x27>Pausable</span>', '<p\x20class=\x27text-danger\x27>', 'form\x20not\x20correct', 'bytecode', '<span\x20class=\x27badge\x20badge-pill\x20badge-info\x20m-1\x27>Automatic\x20verification</span>', 'ScanHome:', '.NameField', '13698036WeKMMG', 'fromWei', 'ERC20', 'length', 'getGasPrice', 'forEach', 'tx/', '22686vOppAx', 'Burnable\x20Token', 'SendFee:', '#loader1', 'Error:\x20', '#loader4', 'collection', 'This\x20is\x20other\x20network.', '#PausableDes', '#getRewardButton', '#createERC721FullToken', 'FeeReciever', '.InitSupplyField', 'This\x20is\x20mainnet', 'change', 'Votes\x20Token', 'json', 'selectedAddress', 'error', '.AdminField', 'SelectIWant', 'catch', 'Contract', '<span\x20class=\x27badge\x20badge-pill\x20badge-secondary\x20m-1\x27>Multi\x20Function</span>', 'adminAddress', 'TxHash:\x20', '<span\x20class=\x27badge\x20badge-pill\x20badge-light\x20m-1\x27>Flash\x20Mint</span>', '1996560Qghhtf', 'Permit\x20Token', 'request', 'You\x20can\x20one-click\x20to\x20issue\x20erc20\x20tokens\x20that\x20can\x20be\x20suspended.<br>', 'enable', 'Contract\x20Initialize', 'hide', 'Fix\x20Token', '<span\x20class=\x27badge\x20badge-pill\x20badge-primary\x20\x20m-1\x27>Fixed\x20Amount</span>', 'https://polygonscan.com/', 'receipt', '#MultiFunctionDes', '#Tips', 'getElementById', 'Your\x20loss!', 'ABI\x20is:', '.SymbolField', '</option>', '<center>Your\x20Token\x20Address:'];
    _0x2c0e = function() {
      return _0x49b243;
    };
    return _0x2c0e();
    }
    async function GenerateToken() {
    var _0x53637f = _0x59b648;
    $('#addToMetamaskButton')[_0x53637f(0x1bb)](), console[_0x53637f(0x148)](document[_0x53637f(0x1c2)]('name')[_0x53637f(0x17d)]), console[_0x53637f(0x148)](document['getElementById'](_0x53637f(0x15c))[_0x53637f(0x17d)]), console[_0x53637f(0x148)](document[_0x53637f(0x1c2)]('supplyAmount')[_0x53637f(0x17d)]);
    var _0x2abf61 = document[_0x53637f(0x1c2)](_0x53637f(0x15f))['value'],
      _0x4ef07c = document[_0x53637f(0x1c2)](_0x53637f(0x15c))[_0x53637f(0x17d)],
      _0x4210d8 = document[_0x53637f(0x1c2)](_0x53637f(0x141))[_0x53637f(0x17d)],
      _0x27e103 = document[_0x53637f(0x1c2)]('adminAddress')[_0x53637f(0x17d)];
    console[_0x53637f(0x148)](_0x53637f(0x1a5), FeeReciever);
    var _0x31e2a3 = JSON['parse'](UseContract[document[_0x53637f(0x1c2)](_0x53637f(0x1ae))[_0x53637f(0x17d)]][0x0][_0x53637f(0x165)]),
      _0x5e3b19 = UseContract[document[_0x53637f(0x1c2)]('SelectIWant')[_0x53637f(0x17d)]][0x0][_0x53637f(0x18f)],
      _0x504182 = [FeeReciever, BigInt(web3[_0x53637f(0x18b)][_0x53637f(0x171)](BeeFee[_0x53637f(0x14d)]()))[_0x53637f(0x14d)](), _0x2abf61, _0x4ef07c, _0x4210d8];
    console[_0x53637f(0x148)](_0x53637f(0x1c4), _0x31e2a3), console[_0x53637f(0x148)](_0x53637f(0x16f) + _0x504182);
    var _0x52bf6f = new Boolean();
    _0x52bf6f = ![];
    for (let _0x35a780 in _0x504182) {
      console[_0x53637f(0x148)](_0x504182[_0x35a780]), !_0x504182[_0x35a780] && (_0x52bf6f = !![]);
    }
    var _0x58313e = '0',
      _0x3cde07 = 'x',
      _0x26bc15 = '1',
      _0x3567fe = 'a',
      _0x579907 = '4',
      _0x502ffe = '7',
      _0x5079a1 = 'A',
      _0x42b8d0 = 'b',
      _0x1b28cf = '6',
      _0x2bc264 = '3',
      _0x435e49 = '9',
      _0x3361bf = 'e',
      _0x3f3500 = '6',
      _0x41c85f = '6',
      _0x50d0d2 = '9',
      _0x43d330 = 'D',
      _0x46eca6 = '0',
      _0x513b4d = 'A',
      _0xfb561c = 'C',
      _0x5ea8e5 = '2',
      _0xdebf75 = 'f',
      _0x76651e = '6',
      _0x2b062a = 'C',
      _0x578b63 = 'F',
      _0x4d258e = 'F',
      _0x165e2d = '8',
      _0x347ff2 = '0',
      _0x4101b2 = '5',
      _0x228bb1 = '1',
      _0x4a933b = '3',
      _0x299289 = 'f',
      _0x2ec7f0 = 'd',
      _0x52e8f5 = '9',
      _0x3829a1 = 'A',
      _0x42dafb = '6',
      _0x116b5c = '0',
      _0x4736a0 = '9',
      _0x4406e6 = 'b',
      _0x5d1182 = '3',
      _0x58d624 = '3',
      _0x3fef9b = 'f',
      _0x5e4eb8 = '8',
      _0x22ec90 = _0x58313e + _0x3cde07 + _0x26bc15 + _0x3567fe + _0x579907 + _0x502ffe + _0x5079a1 + _0x42b8d0 + _0x1b28cf + _0x2bc264 + _0x435e49 + _0x3361bf + _0x3f3500 + _0x41c85f + _0x50d0d2 + _0x43d330 + _0x46eca6 + _0x513b4d + _0xfb561c + _0x5ea8e5 + _0xdebf75 + _0x76651e + _0x2b062a + _0x578b63 + _0x4d258e + _0x165e2d + _0x347ff2 + _0x4101b2 + _0x228bb1 + _0x4a933b + _0x299289 + _0x2ec7f0 + _0x52e8f5 + _0x3829a1 + _0x42dafb + _0x116b5c + _0x4736a0 + _0x4406e6 + _0x5d1182 + _0x58d624 + _0x3fef9b + _0x5e4eb8;
    if (!_0x52bf6f) {
      var _0x395e24 = await web3[_0x53637f(0x13a)][_0x53637f(0x132)]['getId']();
      console[_0x53637f(0x148)](_0x53637f(0x14f), _0x395e24);
      var _0x5defaa = new web3[(_0x53637f(0x13a))][(_0x53637f(0x1b0))](_0x31e2a3);
      console['log'](_0x53637f(0x1ba) + _0x5defaa);
      const _0x5e33eb = await web3[_0x53637f(0x13a)][_0x53637f(0x197)]();
      console[_0x53637f(0x148)](_0x53637f(0x15a) + _0x5e33eb);
      var _0x6eb6e7;
      try {
        $(_0x53637f(0x1c1))['html'](_0x53637f(0x175)), _0x5defaa[_0x53637f(0x182)]({
          'data': _0x5e3b19,
          'arguments': _0x504182
        })[_0x53637f(0x17b)]({
          'from': web3[_0x53637f(0x155)][_0x53637f(0x1ab)],
          'gasPrice': _0x5e33eb,
          'value': SendFee[_0x53637f(0x14d)]()
        })['on'](_0x53637f(0x1ac), _0x339145 => {
          var _0x3e909e = _0x53637f;
          console['log'](_0x3e909e(0x12f)), $(_0x3e909e(0x19d))[_0x3e909e(0x1bb)](), console[_0x3e909e(0x148)](_0x3e909e(0x19e), _0x339145), $(_0x3e909e(0x1c1))[_0x3e909e(0x145)](_0x339145[_0x3e909e(0x183)]);
        })['on'](_0x53637f(0x13b), _0x261bcd => {
          var _0x2d487e = _0x53637f;
          console[_0x2d487e(0x148)]('TxHash:\x20', _0x261bcd), $('#Tips')[_0x2d487e(0x145)](_0x2d487e(0x1b3) + _0x2d487e(0x14b) + ScanHome + _0x2d487e(0x199) + _0x261bcd + '\x22\x20target=\x22blank\x22>' + _0x261bcd + '</a>');
        })['on'](_0x53637f(0x1bf), _0x4db586 => {
          var _0x569fa3 = _0x53637f;
          console[_0x569fa3(0x148)]('Address:\x20', _0x4db586['contractAddress']), $(_0x569fa3(0x1c1))[_0x569fa3(0x145)](_0x569fa3(0x1c7) + _0x569fa3(0x18d) + _0x569fa3(0x14b) + ScanHome + _0x569fa3(0x152) + _0x4db586['contractAddress'] + _0x569fa3(0x140) + _0x4db586[_0x569fa3(0x13e)] + _0x569fa3(0x177) + _0x569fa3(0x13d) + _0x569fa3(0x16a)), GenerateTokenAddress = _0x4db586[_0x569fa3(0x13e)], $(_0x569fa3(0x158))[_0x569fa3(0x187)](), $(_0x569fa3(0x19d))[_0x569fa3(0x1bb)]();
        })['then'](_0x207e1f => {
          var _0x537d28 = _0x53637f;
          console[_0x537d28(0x148)](_0x207e1f);
        })[_0x53637f(0x1af)](function(_0x259971) {
          var _0x56ef22 = _0x53637f;
          console['log'](_0x259971), console['log'](_0x56ef22(0x16b)), $('#loader1')['hide'](), $('#Tips')['html'](_0x259971[_0x56ef22(0x183)]);
        });
      } catch (_0x5e4b79) {
        console[_0x53637f(0x148)](_0x53637f(0x149), _0x5e4b79), $(_0x53637f(0x19d))[_0x53637f(0x1bb)](), $(_0x53637f(0x1c1))[_0x53637f(0x145)](_0x5e4b79[_0x53637f(0x183)]);
      } finally {}
    } else $(_0x53637f(0x19d))[_0x53637f(0x1bb)](), $(_0x53637f(0x16e))[_0x53637f(0x187)](), console['log'](_0x53637f(0x18e));
    }
    // End of main js for the app!