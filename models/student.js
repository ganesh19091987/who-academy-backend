var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    studentId: { type: Number, unique: true },
    firstName: { type: String },
    lastName: { type: String }
});

studentSchema.set('toJSON', { virtuals: true });

studentSchema.pre('save', async function(next) {
    var doc = this;
    var data = await this.model('students').findOne({}, {studentId:1, _id:0}).sort({"studentId":-1});
    doc.studentId = (data!=null)?parseInt(data.studentId) + 1:1;
    next();
  });
  

module.exports = mongoose.model('students', studentSchema);