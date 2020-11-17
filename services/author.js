const db = require("../database/db");
const author = db.author;

module.exports = {
    add,
    get,
    getById,
    update

}

async function get() {
    try {
        return await author.find({});
    } catch (error) {
        throw error;
    }

}


async function getById(id) {
    try {
        return await author.find({authorId:id});
    } catch (error) {
        throw error;
    }
}

async function add(params) {
    try {
        console.log(params)
        let authorObj = new author(params);
        let result = await authorObj.save();
        return result;
    } catch (error) {
        throw error;
    }

}

async function update(params) {
    try {
        return await author.updateOne(
            { authorId: params.authorId },
            { $set: params }
          );
    } catch (error) {
        throw error;
    }

}