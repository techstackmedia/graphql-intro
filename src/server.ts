const app = require('./demo')
const debug = require('debug')
const log = debug('app:log');
const port = 4500;
app.listen(port, () => {
    log(`Running on port ${port}`);
})
