import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetasdb", "postgres", "teamodunia1", {
  host: "localhost",
  dialect: "postgres"
});