const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const clientRoutes = require('./routes/clientRoutes');
const courierRoutes = require('./routes/courierRoutes');
const orderRoutes = require('./routes/orderRoutes');
const db = require('./config/db');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Delivery Service API',
        version: '1.0.0',
        description: 'API for managing clients, couriers, and orders.',
      },
      servers: [{ url: `http://localhost:${PORT}` }],
    },
    apis: ['./routes/*.js', './controllers/*.js', './models/*.js'], 
  };
  
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/courier', courierRoutes);
app.use('/api/orders', orderRoutes);

// Database Connection
db.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
