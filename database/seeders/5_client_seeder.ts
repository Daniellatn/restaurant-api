import Client from '#models/client'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Client.createMany([
      {name: 'Maria', cpf: '12345678922', email: 'maria@gmail.com', telephone: '61985423642'},
      {name: 'Jose', cpf: '98765432177', email: 'jose@gmail.com', telephone: '61999453612'}
    ])
  }
}