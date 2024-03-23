import mongoose from 'mongoose';
 
const clientSchema = new mongoose.Schema({
  username: {
    type:     String,
    required: true, 
  },
  specialPricing: [{
    brand:   String,
    price:   Number
  }]

});
 
const Client = mongoose.model('client',clientSchema);
 
export default Client;