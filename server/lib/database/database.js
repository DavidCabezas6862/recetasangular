import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("railway", "postgres", "UXxImbxGDcoevxmloyKQ", {
  host: "containers-us-west-203.railway.app",
  logging: false,
  dialect: "postgres",
  port: 7939
});