//css
require("../style/style1.less");
require('../style/style2.less');
//js
var setFontSize = require('./setFontSize.js');
var setFontColor = require('./setFontColor.js');

//turn on HMR
if (module.hot) { module.hot.accept(); }

setFontColor("#ccc");
setFontSize("30px");

