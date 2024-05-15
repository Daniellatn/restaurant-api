import PaymentMethod from '#models/payment_method'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await PaymentMethod.createMany([
      {name: 'Crédito'},
      {name: 'Débito'},
      {name: 'Pix'},
      {name: 'Dinheiro'},
    ])
  }
}