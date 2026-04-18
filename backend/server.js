const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Booking = require('./models/Booking');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ujpallazzio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Create new booking
app.post('/api/bookings', async (req, res) => {
  try {
    const { name, phone, room, amount, checkIn, checkOut, utr, paymentStatus } = req.body;

    // Check if UTR already exists
    const existingBooking = await Booking.findOne({ utr: utr.trim() });
    
    if (existingBooking) {
      return res.status(400).json({
        error: "UTR already used"
      });
    }

    const booking = new Booking({
      name,
      phone,
      room,
      amount,
      checkIn,
      checkOut,
      utr: utr.trim(),
      paymentStatus: paymentStatus || 'pending'
    });

    await booking.save();

    res.json({ success: true, booking });
  } catch (error) {
    console.error('Booking creation error:', error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// Get all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const { status } = req.query;
    let filter = {};
    
    if (status && ['pending', 'confirmed'].includes(status)) {
      filter.paymentStatus = status;
    }

    const bookings = await Booking.find(filter).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ error: "Server error" });
  }
});

// Update booking status to confirmed
app.put('/api/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { paymentStatus: 'confirmed' },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json({ success: true, booking });
  } catch (error) {
    console.error('Confirm booking error:', error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});