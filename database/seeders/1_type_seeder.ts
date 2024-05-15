import Type from '#models/type'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Type.createMany([
      {name: 'Hamburguer'},
      {name: 'Bebidas'},
      {name: 'Cachorro-Quente'},
      {name: 'Sobremesas'},
      {name: 'Pastel'},
      {name: 'Crepe'},
      {name: 'Macarrão'},
      {name: 'Batata-Frita'},
    ])
  }
}