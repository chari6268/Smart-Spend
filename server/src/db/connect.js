const mongoose = require("mongoose");
// Middleware
// const db = 'mongodb+srv://personalexpense:personalexpense@cluster0.eg4rfsk.mongodb.net/personalexpense?retryWrites=true&w=majority'
const db = 'mongodb+srv://amreenshaik2003:mzEzzyZMzNVWaRrc@demoapp.c2xdtd4.mongodb.net/?retryWrites=true&w=majority&appName=DEMOAPP'
// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017