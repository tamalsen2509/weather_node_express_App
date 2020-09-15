let express = require('express');
let router = express.Router();
let controller = require('./controllers/controller')




router.get('/',controller.renderHomePage)
router.post('/',controller.getWeather)

router.get('/about',controller.renderAboutPage)

module.exports = router;