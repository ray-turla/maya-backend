import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller, Service } from "@mayajs/core";
import { SampleServices } from "./sample.service";
import multer from "multer";
const upload = multer({dest: 'uploads'})

@Controller()
export class SampleController {
  constructor(private services: SampleServices) {}
  // @Post(middelewares: [appropriate middleware])
  @Post()
  async createSample({ body }: MayaJsContext): Promise<any> {
    // Create a Sample
    const {model} = this.services
    const sample = new model(body)
    await sample.save()
    return sample;
  }

  @Get()
  async readSample(): Promise<any> {
    // Read all Sample list
    const { model } = this.services
    const data = await model.find({}).sort({name: 1})
    return data;
  }
  
  @Get("/:id")
  async readSampleByID({ params }: MayaJsContext): Promise<any> {
    // Read Sample by ID from list
    const {model} = this.services
    const { id } = params
    const person = await model.findById(id)
    return person;
  }

  @Put("/:id")
  async replaceSample({ body, params }: MayaJsContext): Promise<any> {
    // Replace Sample from list
    const {model} = this.services
    const { id } = params
    const person = await model.findByIdAndUpdate(id, {...body})
    return person;
  }
  @Delete("/:id")
  async deleteSample({ params }: MayaJsContext): Promise<any> {
    // Delete Sample from list
    const {model} = this.services
    const { id } = params
    const person = await model.findByIdAndDelete(id)
    return person
  }
}
