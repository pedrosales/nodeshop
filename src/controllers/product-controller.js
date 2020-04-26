'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

exports.post = (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O Título deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.slug, 3, 'O Slug deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.description, 3, 'A descrição deve conter pelo menos 3 caracteres');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    repository.create(req.body).then((x) => {
        res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
    }).catch(error => {
        console.log(error);
        res.status(400).send({ message: 'Falha ao cadastrar produto', data: error });
    });
};

exports.put = (req, res, next) => {
    repository.update(req.params.id, req.body).then(x => {
        res.status(200).send({ message: 'Produto atualizado com sucesso!' });
    })
        .catch(error => {
            console.log(error);
            res.status(400).send({ message: 'Falha ao atualizar produto', data: error });
        });
};

exports.delete = (req, res, next) => {
    repository.delete(req.body.id)
        .then(x => {
            res.status(200).send({ message: 'Produto excluido com sucesso!' });
        })
        .catch(error => {
            console.log(error);
            res.status(400).send({ message: 'Falha ao excluir produto', data: error });
        });
};

exports.get = (req, res, next) => {
    repository.get().then(data => {
        res.status(200).send(data);
    }
    ).catch(error => {
        console.log(error);
        res.status(400).send({ message: 'Falha ao cadastrar produto', data: error });
    });
};

exports.getBySlug = (req, res, next) => {
    repository.getBySlug(req.params.slug).then(data => {
        res.status(200).send(data);
    }
    ).catch(error => {
        console.log(error);
        res.status(400).send({ message: 'Falha ao recuperar produto', data: error });
    });
};

exports.getById = (req, res, next) => {
    repository.getById(req.params.id).then(data => {
        res.status(200).send(data);
    }
    ).catch(error => {
        console.log(error);
        res.status(400).send({ message: 'Falha ao recuperar produto', data: error });
    });
};

exports.getByTag = (req, res, next) => {
    repository.getByTag(req.params.tag).then(data => {
        res.status(200).send(data);
    }
    ).catch(error => {
        console.log(error);
        res.status(400).send({ message: 'Falha ao recuperar produto', data: error });
    });
};