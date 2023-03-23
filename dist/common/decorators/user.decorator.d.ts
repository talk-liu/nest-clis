export declare enum UserEnum {
    'userId' = "userId",
    'userName' = "userName",
    'nickName' = "nickName",
    'deptId' = "deptId",
    'deptName' = "deptName"
}
export declare const User: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | UserEnum)[]) => ParameterDecorator;
