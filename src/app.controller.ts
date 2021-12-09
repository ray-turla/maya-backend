import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller } from "@mayajs/core";

@Controller()
export class AppController {
  @Post()
  async createApp({ body }: MayaJsContext): Promise<any> {
    // Create a App
    return { message: "From AppController POST route", body };
  }

  @Get()
  async readApp(): Promise<any> {
    // Read all App list
    return { message: "From AppController GET route" };
  }

  @Get("/:id")
  async readAppByID({ params }: MayaJsContext): Promise<any> {
    // Read App by ID from list
    return { message: "From AppController GET route with params ID", params };
  }

  @Put("/:id")
  async replaceApp({ body, params }: MayaJsContext): Promise<any> {
    // Replace App from list
    return { message: "From AppController PUT route", body, params };
  }

  @Patch("/:id")
  async updateApp({ body, params }: MayaJsContext): Promise<any> {
    // Update App from list
    return { message: "From AppController PATCH route", body, params };
  }

  @Delete("/:id")
  async deleteApp({ params }: MayaJsContext): Promise<any> {
    // Delete App from list
    return { message: "From AppController DELETE route", params };
  }
}
