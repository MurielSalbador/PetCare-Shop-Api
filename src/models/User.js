const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const { UserRoles } = require('../enums/enums.js'); // Importa los roles de usuario desde el archivo de constantes

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM(Object.values(UserRoles)), 
        allowNull: false,
        defaultValue: UserRoles.USER,
    }
},{
    timestamps: false  
});

module.exports = User;