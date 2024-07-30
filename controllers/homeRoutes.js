const router = require('express').Router();
const { Machine,  Operator } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // console.log(req.session);
    // const userData = await Operator.findByPk(req.session.user_id, {

    //   // attributes: { exclude: ['password'] },
    //   // order: [['operator_name', 'ASC']],
    //   // include: [
    //   //   {
    //   //     model: machine,
    //   //     attributes: ["machine_name", "id"],
    //   //   }
    //   // ]
    // });

    // const operators = userData.map((user) => user.get({ plain: true }));
    // console.log(operators);
    // res.render('homepage', {
    //   operators,
    //   logged_in: req.session.logged_in,
    // });

    const machineData = await Machine.findAll({
      include: [
        {
          model: Operator,
          attributes: {exclude: ["password"]},
        },
      ],
    });

    const machines = machineData.map((machine) => machine.get({ plain: true }));
    console.log(machines);
    
    // console.log(req.session);

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
