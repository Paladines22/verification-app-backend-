const EmailCode = require("./EmailCode");
const User = require("./User");

User.hasOne(EmailCode);
EmailCode.belongsTo(User); // el belongsTo crea la llave foranea, es decir el modelo que esta antesediendo a belongsTo es en donde se creara la llave foranea
