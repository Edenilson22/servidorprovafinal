"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./shared/server");
server_1.server.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT || 3000}`);
});
