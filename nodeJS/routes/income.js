const {addIncome, getIncomes, updateIncome} = require('../controllers/income');

const router = require('express').Router();

router.post('/add-income/:userId', addIncome);// userId is just a parameter from the income controller(line 6), named userId, it can also be just id.
//http://localhost:3000/add-income/e12qwr3qref@#d232sd
router.get('/get-incomes/:userId', getIncomes);
router.patch('/update-income/:userId/:incomeId', updateIncome);
module.exports = router;
