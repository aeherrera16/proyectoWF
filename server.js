const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Configuración de conexión
const config = {
  user: "sa",
  password: "sa",
  server: "localhost", // o el nombre de tu servidor
  database: "RegistroPersonas",
  options: {
    encrypt: false, // poner true si estás usando Azure
    trustServerCertificate: true,
  },
};

app.get("/persona/:cedula", async (req, res) => {
    const { cedula } = req.params;
  
    try {
      await sql.connect(config);
      const result = await sql.query`SELECT * FROM Personas WHERE cedula = ${cedula}`;
      
      console.log("Resultado SQL:", result.recordset);
  
      if (result.recordset.length > 0) {
        const persona = result.recordset[0];
        res.json({
          nombres: `${persona.primer_nombre} ${persona.segundo_nombre}`,
          apellidos: `${persona.apellido_paterno} ${persona.apellido_materno}`,
          id: persona.id
        });
      } else {
        res.status(404).json({ error: "No se encontró la persona" });
      }
    } catch (err) {
      console.error("Error de conexión o consulta:", err);
      res.status(500).json({ error: "Error al conectar con la base de datos" });
    }
  });
  

app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});
