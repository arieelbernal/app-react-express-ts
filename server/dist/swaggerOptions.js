const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API de prueba",
        version: "1.0.0",
        description: "Documentación de la API REST Prueba técnica.",
      },
    },
    apis: ["./routes/*.js"],
  };
  
  module.exports = options;