const { MouseActions } = require('../15-js-modules/MouseActions.js')

// static method
MouseActions.click();

// non-static method
const ma = new MouseActions();
ma.clickAndHold();


