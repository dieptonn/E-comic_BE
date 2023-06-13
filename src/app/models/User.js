const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slugUpdater = require('mongoose-slug-updater');
// mongoose.plugin(slug);
const mongooseDelete = require('mongoose-delete');

const UserSchema = new Schema({});

module.exports = mongoose.model('User', UserSchema);
