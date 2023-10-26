module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("contact", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

    });
    return Contact;
};