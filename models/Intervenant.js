const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Intervenants = new Schema({
    identite: String,
    code: String,
    poste: String,
    mail: String,
});
module.exports = mongoose.model('Intervenants', Intervenants,'Intervenants');