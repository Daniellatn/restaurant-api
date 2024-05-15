import Ingredient from '#models/ingredient'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Ingredient.createMany([
      {name: 'Carne de Hamburguer', description: 'Bovino'},
      {name: 'Pão de Hamburguer'},
      {name: 'Pão de Cachorro-Quente'},
      {name: 'Salsicha'},
      {name: 'Queijo'},
      {name: 'Presunto'},
      {name: 'Milho'},
      {name: 'Batata'},
    ])
  }
}