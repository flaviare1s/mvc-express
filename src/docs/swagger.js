import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Escola',
      version: '1.0.0',
      description: 'API RESTful para gerenciamento de alunos, usuários e endereços',
      contact: {
        name: 'Suporte API',
        email: 'suporte@geracaotech.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'integer', format: 'int64' },
            nome: { type: 'string' },
            email: { type: 'string', format: 'email' },
            senha: { type: 'string', format: 'password' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Aluno: {
          type: 'object',
          properties: {
            id: { type: 'integer', format: 'int64' },
            nome: { type: 'string' },
            matricula: { type: 'string' },
            dataNascimento: { type: 'string', format: 'date' },
            enderecoId: { type: 'integer', format: 'int64' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Endereco: {
          type: 'object',
          properties: {
            id: { type: 'integer', format: 'int64' },
            rua: { type: 'string' },
            numero: { type: 'string' },
            bairro: { type: 'string' },
            cidade: { type: 'string' },
            estado: { type: 'string' },
            cep: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Error: {
          type: 'object',
          properties: {
            status: { type: 'integer' },
            message: { type: 'string' }
          }
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec; 
