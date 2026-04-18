import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import axios from "axios";

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [actionLoading, setActionLoading] = useState(null);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const url = filter === 'all' 
        ? '/api/bookings' 
        : `/api/bookings?status=${filter}`;
      
      const response = await axios.get(url);
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [filter]);

  const handleConfirm = async (bookingId) => {
    try {
      setActionLoading(bookingId);
      await axios.put(`/api/bookings/${bookingId}`);
      fetchBookings();
    } catch (error) {
      alert('Error confirming booking');
    } finally {
      setActionLoading(null);
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      pending: { bg: '#fef08a', color: '#854d0e', text: 'Pending' },
      confirmed: { bg: '#bbf7d0', color: '#166534', text: 'Confirmed' }
    };
    
    const style = styles[status] || styles.pending;
    
    return (
      <span 
        style={{ 
          padding: '0.25rem 0.75rem', 
          borderRadius: '9999px', 
          fontSize: '0.8rem', 
          fontWeight: 600,
          backgroundColor: style.bg,
          color: style.color
        }}
      >
        {style.text}
      </span>
    );
  };

  return (
    <>
      <Helmet>
        <title>Admin Panel - UJ Pallazzio</title>
      </Helmet>

      <Navbar />

      <div style={{ height: "72px", backgroundColor: "#ffffff" }} />

      <div className="container py-5" style={{ minHeight: "calc(100vh - 72px)" }}>
        <h1 
          style={{ 
            fontFamily: "'Poppins', sans-serif", 
            fontWeight: 700, 
            marginBottom: '2rem'
          }}
        >
          Booking Management
        </h1>

        {/* Filters */}
        <div className="d-flex gap-2 mb-4 flex-wrap">
          <button 
            onClick={() => setFilter('all')}
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-secondary'}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('pending')}
            className={`btn ${filter === 'pending' ? 'btn-warning' : 'btn-outline-warning'}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Pending
          </button>
          <button 
            onClick={() => setFilter('confirmed')}
            className={`btn ${filter === 'confirmed' ? 'btn-success' : 'btn-outline-success'}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Confirmed
          </button>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : bookings.length === 0 ? (
          <p style={{ fontFamily: "'Poppins', sans-serif", color: '#6b7280' }}>No bookings found</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem' }}>
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Room</th>
                  <th>Amount</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>UTR</th>
                  <th>Status</th>
                  <th>Date Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.name}</td>
                    <td>{booking.room}</td>
                    <td>₹{booking.amount}</td>
                    <td>{new Date(booking.checkIn).toLocaleDateString()}</td>
                    <td>{new Date(booking.checkOut).toLocaleDateString()}</td>
                    <td><code>{booking.utr}</code></td>
                    <td>{getStatusBadge(booking.paymentStatus)}</td>
                    <td>{new Date(booking.createdAt).toLocaleString()}</td>
                    <td>
                      {booking.paymentStatus === 'pending' && (
                        <button
                          onClick={() => handleConfirm(booking._id)}
                          disabled={actionLoading === booking._id}
                          className="btn btn-sm btn-success"
                        >
                          {actionLoading === booking._id ? (
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          ) : 'Confirm'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPanel;