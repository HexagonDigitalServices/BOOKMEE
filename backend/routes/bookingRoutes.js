import express from 'express';
import { listBookings, rescheduleBooking, updateBookingStatus } from '../controllers/bookingController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Route to list bookings with optional query filters (status, date)
router.get('/', auth, listBookings);

// Route to update the status of a specific booking (e.g., mark as cancelled, confirmed)
router.patch('/:id', auth, updateBookingStatus);

// Route to reschedule a specific booking to a new time slot
router.patch('/:id/reschedule', auth, rescheduleBooking);

export default router;
