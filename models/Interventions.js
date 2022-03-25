const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Interventions = new Schema({
    identite: String,
    code: String,
    poste: String,
    mail: String,
    HeureDébutInitiale: String,
    HeureDébut: String,
    HeureFin: String,
});
module.exports = mongoose.model('Interventions', Interventions,'Interventions');