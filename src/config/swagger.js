import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Escola",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

export default swaggerJSDoc(options);
