const db = require("../database/db");
const course = db.course;

module.exports = {
    add,
    get,
    getById,
    update

}

async function get() {
    try {
        return await course.aggregate([
            {
                $lookup: {
                    from: "students",
                    localField: "studentId",
                    foreignField: "studentId",
                    as: "students"
                }
            },
            {
                $lookup: {
                    from: "authors",
                    localField: "authorId",
                    foreignField: "authorId",
                    as: "authors"
                }
            },
            {
                $unwind: "$authors"
            }
        ]);
    } catch (error) {
        throw error;
    }

}


async function getById(id) {
    try {
        return await course.find({ courseId: id });
    } catch (error) {
        throw error;
    }
}

async function add(params) {
    try {
        let courseObj = new course(params);
        let result = await courseObj.save();
        return result;
    } catch (error) {
        throw error;
    }

}

async function update(params) {
    try {
        return await course.updateOne(
            { courseId: params.courseId },
            { $set: params }
        );
    } catch (error) {
        throw error;
    }

}