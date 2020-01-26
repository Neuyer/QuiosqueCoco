const Adm = require('../models/ADMSchema');
const bcrypt = require('bcrypt');

module.exports = {
    async signIn(req, res) {
        const { nome, login, pswd } = req.body; 
        const adm = await Adm.findOne({"nome": nome});

        if(adm){
            res.status(409);
            return res.json('Usuário já existente!');
        }

        try {
            // o bcrypt entende q o 10 como numero de rodadas do gensalt
            const hashedPswd =  await bcrypt.hash(pswd, 10);
            newAdm = await Adm.create({
                nome,
                login,
                pswd: hashedPswd
            });
            res.status(201);
           return res.json(newAdm.nome +' seu login é: '+ newAdm.login )
        } catch (error) {
            console.log(error);
            res.status(500);
        }
        
    },
    async logIn(req, res) {
        const { login, pswd } = req.body;
        const adm = await Adm.findOne({"login": login});
        
        try {
            const itsOK = await bcrypt.compare(pswd, adm.pswd);
            if (itsOK) {
                res.status(200);
                return  res.redirect('/movimentos');
            }else {
                res.status(400);
                return res.json("senha ou login inválidos");
            }
        } catch (error) {
            res.status(400);
            return res.json("senha ou login inválidos");
        }
    },
}