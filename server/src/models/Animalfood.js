module.exports = (sequelize, DataTypes) => {
    const Animalfood = sequelize.define("Animalfood", {
        typeanimal : DataTypes.STRING,
        brand : DataTypes.STRING,
        foodrecipes : DataTypes.STRING,
        registrationnumber : DataTypes.STRING,
        type : DataTypes.STRING,
        weight : DataTypes.STRING,
        component : DataTypes.STRING,
        nutritionalvalue : DataTypes.STRING,
        expirationdate : DataTypes.STRING,
        storage : DataTypes.STRING,
        price : DataTypes.STRING,
        temperature : DataTypes.STRING,
    })
    return Animalfood;
  };