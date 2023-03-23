"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserEnum = void 0;
const common_1 = require("@nestjs/common");
var UserEnum;
(function (UserEnum) {
    UserEnum["userId"] = "userId";
    UserEnum["userName"] = "userName";
    UserEnum["nickName"] = "nickName";
    UserEnum["deptId"] = "deptId";
    UserEnum["deptName"] = "deptName";
})(UserEnum = exports.UserEnum || (exports.UserEnum = {}));
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user && user.userId : user;
});
//# sourceMappingURL=user.decorator.js.map