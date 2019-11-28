const express = require('express');
const router = express.Router();

const reg = require('../server/registro/reg_model.js/index.js.js');

router.get('/', async (req, res) => {
    const regs = await reg.find();
    res.json(regs);
});

router.post('/', async (req, res) => {
    const regs = new reg(req.body);
    await regs.save();
    res.json({
        status: "Reg saved"
    });
});

module.exports = router;