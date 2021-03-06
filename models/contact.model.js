let mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Minu27:<Minal27$>@clusterm.p42cm.mongodb.net/portfolio_db?retryWrites=true&w=majority", {'useNewUrlParser': true})
mongoose.set('useCreateIndex', true);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  subject:String,
  message:String,
})

module.exports = mongoose.model('ContactDetails', CustomerSchema);