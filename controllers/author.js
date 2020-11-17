const author = require('../services/author');
const resobj = require('../_helpers/responsejson');

module.exports = {
    add,
    get,
    getById,
    update
 };

function add(req, res) {
    author.add(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}

function get(req, res) {
    author.get(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}

function getById(req, res) {
    author.getById(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}

function update(req, res) {
    author.update(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}