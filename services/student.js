const db = require("../database/db");
const student = db.student;

module.exports = {
    add,
    get,
    getById,
    update

}

async function get() {
    try {
        return await student.find({});
    } catch (error) {
        throw error;
    }

}


async function getById(id) {
    try {
        return await student.find({studentId:id});
    } catch (error) {
        throw error;
    }
}

async function add(params) {
    try {
        const studentObj = new student(params);
        let result = await studentObj.save();
        return result;
    } catch (error) {
        throw error;
    }

}

async function update(params) {
    try {
        return await student.updateOne(
            { studentId: params.studentId },
            { $set: params }
          );
    } catch (error) {
        throw error;
    }

}