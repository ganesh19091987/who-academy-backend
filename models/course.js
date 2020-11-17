var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    courseId: { type: Number, unique: true },
    name: { type: String },
    studentId: { type: [Number] },
    authorId: { type: Number }
});

courseSchema.set('toJSON', { virtuals: true });

courseSchema.pre('save', async function(next) {
    var doc = this;
    var data = await this.model('courses').findOne({}, {courseId:1, _id:0}).sort({"courseId":-1});
    doc.courseId =  (data!=null)?parseInt(data.courseId) + 1:1;
    next();
  });

module.exports = mongoose.model('courses', courseSchema);