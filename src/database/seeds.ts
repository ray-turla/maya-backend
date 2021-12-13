// Your sample seed data which will be called on a controller route.
export const seedData = {
  names: ['ash', 'basch', 'cass', 'dez', 'emz', 'franz', 'gem', 'hash'],
  getRandomAge: (min: number = 18, max:number = 60) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
}