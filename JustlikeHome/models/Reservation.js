// models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  guest: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reservation', reservationSchema);
