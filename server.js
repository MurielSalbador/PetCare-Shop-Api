const express = require('express');
const sequelize = require('./src/config/database.js');
const authRoutes = require('./src/routes/auth.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
  console.log('Base de datos conectada y modelos sincronizados');
  app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
  });
});