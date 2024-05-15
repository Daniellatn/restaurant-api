import Card from '#models/card'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    return await Card.createMany([
      {table: 'Mesa 01', datePayment: DateTime.now(), date: DateTime.now(), employeeId: 2, clientId:1, paymentMethodId: 4}
    ])
  }
}