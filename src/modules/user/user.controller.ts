import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller } from "@mayajs/core";

@Controller()
export class UserController {
  @Post()
  async createUser({ body }: MayaJsContext): Promise<any> {
    // Create a User
    return { message: "From UserController POST route", body };
  }

  @Get()
  async readUser(): Promise<any> {
    // Read all User list
    return { message: "From UserController GET route" };
  }

  @Get("/:id")
  async readUserByID({ params }: MayaJsContext): Promise<any> {
    // Read User by ID from list
    return { message: "From UserController GET route with params ID", params };
  }

  @Put("/:id")
  async replaceUser({ body, params }: MayaJsContext): Promise<any> {
    // Replace User from list
    return { message: "From UserController PUT route", body, params };
  }

  @Patch("/:id")
  async updateUser({ body, params }: MayaJsContext): Promise<any> {
    // Update User from list
    return { message: "From UserController PATCH route", body, params };
  }

  @Delete("/:id")
  async deleteUser({ params }: MayaJsContext): Promise<any> {
    // Delete User from list
    return { message: "From UserController DELETE route", params };
  }
}
