"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const colors = require('colors/safe');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3001, () => {
        console.clear();
        console.log(colors.green('runing on port 3001...'));
    });
}
bootstrap();
//# sourceMappingURL=main.js.map