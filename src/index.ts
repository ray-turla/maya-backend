import { configServer } from "@mayajs/core";
import { AppModule } from "./app.module";
import bodyParser from 'body-parser'; 
import cors from 'cors';

configServer(3333)
  .usePlugins([
    // Add plugins or middlewares here
    bodyParser.json(), 
    bodyParser.urlencoded({extended: true}),
    cors()
    // i.e. CORS, body-parser, multer and etc...
  ])
  .bootstrapModule(AppModule);

  console.log('hello')