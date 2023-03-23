import { LogicalEnum } from '../enums/logical.enum';
export type PermissionObj = {
    permissionArr: string[];
    logical: LogicalEnum;
};
export declare const RequiresPermissions: (permissions: string | string[], logical?: LogicalEnum) => import("@nestjs/common").CustomDecorator<string>;
