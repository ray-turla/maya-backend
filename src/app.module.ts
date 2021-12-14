import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { routes } from "./app.routing.module";
import { AppController } from "./app.controller";
import { SampleController } from "./controllers/sample/sample.controller";
import { SampleServices } from "./controllers/sample/sample.service";
import { MongoDbModule, MongoDbServices } from "@mayajs/mongo";
import { mongoOptions } from "./database/mongo";
import { SeederModule } from "./seeds/seed.module";

@Module({
  declarations: [AppController, SampleController],
  imports: [RouterModule.forRoot(routes), MongoDbModule.forRoot(mongoOptions), SeederModule.forRoot()],
  providers: [SampleServices, MongoDbServices],
  bootstrap: AppController,
})

export class AppModule {}
