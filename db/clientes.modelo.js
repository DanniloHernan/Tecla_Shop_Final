const {DataTypes, Model } = require('sequelize');
const sequelize = require('./conexion')

//Defino los modelos de DB que voy a utilizar

const Usuarios = sequelize.define('clientes' , {
    nombres : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    pass : {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    tipo : {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    cumple:{
        type: DataTypes.DATE,
        allowNull: true
    },
}, {
    timestamps: true
})

module.exports = Usuarios