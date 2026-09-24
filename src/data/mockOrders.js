export const mockOrders = {
  active: {
    orderId: "ORD-98421",
    productName: "Wireless Noise-Canceling Headphones",
    productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    price: "$129.99",
    quantity: 1,
    currentStatus: "Out for Delivery",
    estimatedDelivery: "Today, by 6:00 PM",
    carrier: "FastEx Logistics (#FE-992834)",
    steps: [
      { title: "Order Placed", date: "Oct 24, 10:20 AM", completed: true },
      { title: "Processing", date: "Oct 24, 02:15 PM", completed: true },
      { title: "Shipped", date: "Oct 25, 08:00 AM", completed: true },
      { title: "Out for Delivery", date: "Today, 09:30 AM", completed: true, active: true },
      { title: "Delivered", date: "Estimated 6:00 PM", completed: false }
    ],
    stateType: "active"
  },
  delayed: {
    orderId: "ORD-77312",
    productName: "Smart Fitness Watch Series 5",
    productImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
    price: "$199.50",
    quantity: 1,
    currentStatus: "Delayed",
    estimatedDelivery: "Delayed (Originally Oct 24)",
    carrier: "Global Cargo (#GC-443102)",
    steps: [
      { title: "Order Placed", date: "Oct 22, 11:00 AM", completed: true },
      { title: "Processing", date: "Oct 23, 09:00 AM", completed: true },
      { title: "Shipped", date: "Oct 24, 04:00 PM", completed: true },
      { title: "In Transit (Delayed)", date: "Severe weather delay at regional hub", completed: false, delayed: true },
      { title: "Delivered", date: "Pending new estimate", completed: false }
    ],
    stateType: "delayed",
    delayReason: "Your package is currently held up at the regional sorting facility due to unexpected logistics congestion. We are working with the carrier to expedite it."
  },
  notReceived: {
    orderId: "ORD-55420",
    productName: "Ergonomic Mechanical Keyboard",
    productImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60",
    price: "$89.00",
    quantity: 1,
    currentStatus: "Delivered",
    estimatedDelivery: "Delivered Today at 2:15 PM",
    carrier: "SpeedyDrop (#SD-881923)",
    steps: [
      { title: "Order Placed", date: "Oct 20, 1:00 PM", completed: true },
      { title: "Processing", date: "Oct 21, 10:00 AM", completed: true },
      { title: "Shipped", date: "Oct 22, 12:00 PM", completed: true },
      { title: "Out for Delivery", date: "Today, 8:00 AM", completed: true },
      { title: "Delivered", date: "Today, 2:15 PM - Left at front door", completed: true, active: true }
    ],
    stateType: "notReceived",
    issueNotice: "The system shows your package was delivered, but you haven't received it? Let's fix this right away."
  },
  noTracking: {
    orderId: "ORD-11029",
    productName: "Handmade Ceramic Coffee Mug",
    productImage: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60",
    price: "$24.00",
    quantity: 2,
    currentStatus: "Processing / Preparing",
    estimatedDelivery: "Calculating upon shipment",
    carrier: "Local Artisan Post",
    steps: [],
    stateType: "noTracking",
    noticeMessage: "Tracking details are not available yet because your item is currently being handcrafted/packaged by the seller. Tracking numbers usually generate within 24–48 hours."
  }
};