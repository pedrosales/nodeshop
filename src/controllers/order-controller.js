'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/order-repository');
const guid = require('guid');

exports.get = async (req, res, next) => {

    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ message: 'Falha ao processar requisição' })
    }
};

exports.post = async (req, res, next) => {
    // let contract = new ValidationContract();
    // contract.hasMinLen(req.body.name, 3, 'O Nome deve conter pelo menos 3 caracteres');
    // contract.isEmail(req.body.email, 'O email é inválido');
    // contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 3 caracteres');

    // if (!contract.isValid()) {
    //     res.status(400).send(contract.errors()).end();
    //     return;
    // }

    try {
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(201).send({ message: 'Pedido cadastrado com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Falha ao cadastrar pedido', data: error });
    }
};