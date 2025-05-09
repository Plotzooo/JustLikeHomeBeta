const Listing = require('../models/Listing');

exports.createListing = async (req, res) => {
  try {
    const listing = new Listing(req.body);
    await listing.save();
    res.status(201).json(listing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllListings = async (req, res) => {
  const listings = await Listing.find().populate('host');
  res.json(listings);
};
