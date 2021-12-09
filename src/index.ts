import { configServer } from "@mayajs/core";
import { AppModule } from "./app.module";
import bodyParser from 'body-parser'; // part of maya cli generation i think...
configServer(3333)
  .usePlugins([
    // Add plugins or middlewares here

    bodyParser.json(), 
    bodyParser.urlencoded({extended: true})
    // i.e. CORS, body-parser, multer and etc...
  ])
  .bootstrapModule(AppModule);