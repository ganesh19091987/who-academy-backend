const student = require('../services/student');
const resobj = require('../_helpers/responsejson');

module.exports = {
    add,
    get,
    getById,
    update
  
};

function add(req, res) {
    student.add(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}

function get(req, res) {
    student.get(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}

function getById(req, res) {
    student.getById(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}


function update(req, res) {
    student.update(req.body)
    .then(data => data ? res.json(resobj.buildJsonRes("Complete", data)) : res.sendStatus(404))
    .catch(err => res.json(resobj.buildJsonRes("Error", err)));
}