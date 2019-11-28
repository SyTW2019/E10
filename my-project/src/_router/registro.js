const express = require('express');
const router = express.Router();

const reg = require('../components/Registro/reg_model.js');

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