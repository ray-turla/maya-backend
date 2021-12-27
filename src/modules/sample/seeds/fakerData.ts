import { datatype, name } from 'faker'
const generateFakeData = (maxItems:number) => {
  const dataArray: any[] = []
  for(let i = 0; i < maxItems; i++){
    dataArray.push({name: name.findName(), age: datatype.number({min:18, max:60})})
  }
  return dataArray;
}

export default generateFakeData(10)