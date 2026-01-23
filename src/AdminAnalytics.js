import { useEffect, useState } from "react";

function AdminAnalytics() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders/stats")
      .then(res => res.json())
      .then(setStats);
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Analytics</h2>

      <div style={{ marginTop: 20 }}>
        <h3>Total Orders: {stats.totalOrders}</h3>
        <h3>Total Sales: ₹{stats.totalSales}</h3>
      </div>
    </div>
  );
}

export default AdminAnalytics;
