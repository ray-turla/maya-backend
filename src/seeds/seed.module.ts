import { CustomModule, ModuleWithProviders } from '@mayajs/router'
import { model } from 'mongoose'
import fakerData from './fakerData'
import sampleModel from '../models/sample.model'

export class SeederModule extends CustomModule{
  invoke(){
    const Model = model(sampleModel.name, sampleModel.schema)
    const seedDB = async () => {
      await Model.deleteMany({})
      await Model.insertMany(fakerData)
    }
    seedDB()
  }
  static forRoot(): ModuleWithProviders {
    return {
      module: SeederModule,
      providers: [],
    }
  }
}

