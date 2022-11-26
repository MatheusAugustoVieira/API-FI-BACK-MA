import { UserController } from "./controller/UserController";
import { SistemaMAController } from "./controller/UserController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},{
    method: "get",
    route: "/SistemaMA",
    controller: SistemaMAController,
    action: "all"
}, {
    method: "get",
    route: "/SistemaMA/:id",
    controller: SistemaMAController,
    action: "one"
}, {
    method: "post",
    route: "/SistemaMA",
    controller: SistemaMAController,
    action: "save"
},
{
    method: "delete",
    route: "/SistemaMA/:id",
    controller: SistemaMAController,
    action: "remove"
}]