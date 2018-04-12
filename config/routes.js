const router = require('express').Router();
const users = require('../controllers/users');
const auth  = require('../controllers/auth');
const diary = require('../controllers/diary');
const crisisPlan = require('../controllers/crisisPlan');
const secureRoute = require('../lib/secureRoute');

router.route('/users/:id')
  .get(users.show)
  .put(users.update);

router.route('/users/:id/familyandfriends')
  .post(users.addFamilyandFriends);

router.route('/users/:id/professionals')
  .post(users.addProfessional);

router.route('/users/:id/organizations')
  .post(users.addOrganization);

router.route('/diaries')
  .post(secureRoute, diary.create);

router.route('/diaries/:id')
  .get(secureRoute, diary.show)
  .delete(secureRoute, diary.delete);
// .put(secureRoute, diary.update)


router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/crisisPlan')
  .get(secureRoute, crisisPlan.getAnyPlan);

router.route('/crisisPlan/:id')
  .get(secureRoute, crisisPlan.getSpecificPlan);

router.route('/crisisPlan/:id/signs')
  .post(secureRoute, crisisPlan.createSign);

router.route('/crisisPlan/:id/strategies')
  .post(secureRoute, crisisPlan.createStrategy);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
