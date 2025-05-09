// models/Listing.js
const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  pricePerNight: { type: Number, required: true },
  location: String,
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  images: [String],
  amenities: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Listing', listingSchema);
