# npm install sequelize sequelize-cli mysql2 express body-parser express-validator jsonwebtoken bcrypt


#For an advance, use sequelize-cli
npx sequelize-cli init
npx sequelize-cli migration:generate --name create_users_table

#If all the migrations done, do
npx sequelize-cli db:migrate