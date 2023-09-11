import { Datatypes } from "sequelize";
import { sequelize } from "../connection.js"

const UserModel = sequelize.define(
    "User", {
        name: {
            type: Datatypes.STRING,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: Datatypes.STRING
          },
          password: {
            type: Datatypes.STRING
          }
    }
);

export default UserModel;
      
