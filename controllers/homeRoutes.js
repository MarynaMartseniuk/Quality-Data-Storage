const router = require('express').Router();
const { Machine,  Operator } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // const userData = await Operator.findAll({
    //   attributes: { exclude: ['password'] },
    //   order: [['operator_name', 'ASC']],
    // });

    // const operators = userData.map((user) => user.get({ plain: true }));

    // res.render('homepage', {
    //   operators,
    //   logged_in: req.session.logged_in,
    // });

    const machineData = await Machine.findAll({
      include: [
        {
          model: Operator,
          attributes: ['operator_name', 'employee_id'],
        },
      ],
    });

    const machines = machineData.map((machine) => machine.get({ plain: true }));

    res.render('homepage', { 
      machines, 
      logged_in: req.session.logged_in 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
