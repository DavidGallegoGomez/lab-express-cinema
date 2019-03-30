const mongoose = require('mongoose');
const MONGODB_URI = "mongodb://localhost:27017/lab-express-cinema";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
  .then(() => console.info(`TODO OK ${MONGODB_URI}`))
  .catch(error => console.error(`ERROR EN: ${MONGODB_URI}`, error))