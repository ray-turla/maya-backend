import { CustomModule, ModuleWithProviders, MayaJSModule } from "@mayajs/router";
import { model } from "mongoose";
import fakerData from "./fakerData";
import sampleModel from "../sample.model";
import env from "../../../environments";

export class SeederModule extends CustomModule {
  invoke() {
    if(env.production) return;
    const Model = model(sampleModel.name, sampleModel.schema);
    const seedDB = async () => {
      await Model.deleteMany({});
      await Model.insertMany(fakerData);
    };
    seedDB();
  }
  static forRoot(): ModuleWithProviders {
    return {
      module: SeederModule,
      providers: [],
    };
  }
}