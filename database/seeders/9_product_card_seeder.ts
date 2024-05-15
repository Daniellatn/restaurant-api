import ProductCard from '#models/product_card'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await ProductCard.createMany([
      {quantity: 1, cardId: 1, productId: 1}
    ])
  }
}