import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Product.createMany([
      {name: 'X-burguer', price: 7.5, size: 'P', typeId: 1},
      {name: 'Cachorro- Quente Tracional', price: 11, size: 'P', typeId: 3},
    ])
  }
}