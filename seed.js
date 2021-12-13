const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SampleSchema = new Schema({
  name: String,
  age: Number
})

const Sample = mongoose.model('Sample', SampleSchema)

const seedData = {
  names: ['ash', 'basch', 'cass', 'dez', 'emz', 'franz', 'gem', 'hash'],
  getRandomAge: (min = 18, max = 60) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
}

const createData = () => {
  const dataArray = []
  seedData.names.map(name=>{
    dataArray.push({name, age: seedData.getRandomAge()})
  })
  return dataArray
}

const dbURL = "mongodb://localhost:27017/main"
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
}

mongoose.connect(dbURL, options)
const db = mongoose.connection;

db.on("error", console.error.bind(console, "error"))
db.once("open", () => console.log('db connected'))

const seedDB = async () => {
  const data = createData()
  await Sample.deleteMany({})
  await Sample.insertMany(data)
}

seedDB().then(() => db.close())
