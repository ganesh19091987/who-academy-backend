const course = require('../services/course');
const resobj = require('../_helpers/responsejson');

module.exports = {
    add,
    get,
    getById,
    update
};

function add(req, res) {
    course.add(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}

function get(req, res) {
    course.get(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}

function getById(req, res) {
    course.getById(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}

function update(req, res) {
    course.update(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}