const router = require('express').Router();
import apiRoutes from './api/index.js';

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

export default router;