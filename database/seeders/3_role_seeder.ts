import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Role.createMany([
      {name: 'Gerente'},
      {name: 'Chapeiro'},
      {name: 'Cozinheiro'},
      {name: 'Auxiliar de Limpeza'},
      {name: 'Auxiliar de Atendimento'},
    ])
  }
}