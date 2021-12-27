import { Controller, Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { SampleController } from "./sample.controller";
import { MongoDbModule, MongoDbServices } from '@mayajs/mongo'
import { SampleServices } from "./sample.service";
import { SeederModule } from "./seeds/seed.module";
import { mongoOptions } from "../../database/mongo";
import { routes as sampleRoutes } from "./sample.routing.module";

@Module({
  declarations: [SampleController],
  imports: [RouterModule.forRoot(sampleRoutes), SeederModule.forRoot()],
  providers: [SampleServices],
})
export class SampleModule {}
