const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    },
    host: 'https://localhost:300
    0',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);