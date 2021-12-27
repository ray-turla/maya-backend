import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { UserController } from "./user.controller";

const routes = [
  {
    path: 'users',
    controller: UserController
  }
];

@Module({
  declarations: [UserController],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
})
export class UserModule {}
