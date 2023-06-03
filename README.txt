# npm install sequelize sequelize-cli mysql2 express body-parser express-validator jsonwebtoken bcrypt


#For an advance, use sequelize-cli
npx sequelize-cli init
npx sequelize-cli migration:generate --name create_users_table

#If all the migrations done, do
npx sequelize-cli db:migrate


#tables
CREATE TABLE users(`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(255) NOT NULL, `email` VARCHAR(200) NOT NULL, `password` VARCHAR(255) NOT NULL, `is_admin` ENUM('1', '0') NOT NULL DEFAULT '0' ,`created_at` DATE NULL, `updated_at` DATE NULL, `deleted_at` DATE NULL, PRIMARY KEY(id));
CREATE TABLE pricelists(`id` INT NOT NULL AUTO_INCREMENT, `year_id` INT NOT NULL, `model_id` INT NOT NULL, `name` VARCHAR(200) NOT NULL, `price` VARCHAR(255) NOT NULL, `descrition` VARCHAR(255) NOT NULL, `code` VARCHAR(10) NOT NULL, `varian` VARCHAR(200) NOT NULL, `discount` INT NOT NULL, `created_at` DATE NULL, `updated_at` DATE NULL, `deleted_at` DATE NULL, PRIMARY KEY(id));
CREATE TABLE vehicle_brands(`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(255) NOT NULL, `created_at` DATE NULL, `updated_at` DATE NULL, `deleted_at` DATE NULL, PRIMARY KEY(id));
CREATE TABLE vehicle_models(`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(255) NOT NULL, `type_id` INT NOT NULL, `karoseri` VARCHAR(200) NOT NULL, `machine` VARCHAR(200) NOT NULL, `transmission` VARCHAR(200) NOT NULL, `history` VARCHAR(255) NOT NULL, `created_at` DATE NULL, `updated_at` DATE NULL, delete_at DATE NULL, PRIMARY KEY(id));
CREATE TABLE vehicle_types(`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(200) NOT NULL, `brand_id` INT NOT NULL, `created_at` DATE NULL, `updated_at` DATE NULL, `deleted_at` DATE NULL, PRIMARY KEY(id));
CREATE TABLE vehicle_years(`id` INT NOT NULL AUTO_INCREMENT, `year` INT NOT NULL, `kilometer` INT NOT NULL, `previous_owner` VARCHAR(200) NOT NULL, `maintenance_record` VARCHAR(255) NOT NULL, `accident_history` VARCHAR(255) NOT NULL, `service_history` VARCHAR(255) NOT NULL, `created_at` DATE NULL, `updated_at` DATE NULL, `deleted_at` DATE NULL, PRIMARY KEY(id));