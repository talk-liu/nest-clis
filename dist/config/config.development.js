"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defineConfig_1 = require("./defineConfig");
exports.default = (0, defineConfig_1.defineConfig)({
    jwt: {
        secret: process.env.JWT_SECRET || '123456',
    },
    database: {
        type: 'mysql',
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3306,
        username: process.env.MYSQL_USERNAME || 'root',
        password: process.env.MYSQL_PASSWORD || '123456',
        database: process.env.MYSQL_DATABASE || 'foodie',
        autoLoadModels: true,
        synchronize: true,
        logging: false,
    },
    redis: {
        config: {
            url: 'redis://:123456@localhost:6379/0',
        },
    },
    bullRedis: {
        host: 'localhost',
        port: '6379',
        password: '123456',
    },
    uploadPath: '',
    isDemoEnvironment: false,
});
//# sourceMappingURL=config.development.js.map