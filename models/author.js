var mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    authorId: { type: Number, unique: true },
    firstName: { type: String },
    lastName: { type: String }
});

authorSchema.set('toJSON', { virtuals: true });

authorSchema.pre('save', async function(next) {
    var doc = this;
    var data = await this.model('authors').findOne({}, {authorId:1, _id:0}).sort({"authorId":-1});
    doc.authorId =  (data!=null)?parseInt(data.authorId) + 1:1;
    next();
  });

module.exports = mongoose.model('authors', authorSchema);