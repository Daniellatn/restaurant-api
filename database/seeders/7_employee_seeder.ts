import Employee from '#models/employee'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Employee.createMany([
      {name: 'João', adress: 'QNP 01 Conjunto A casa 2', cpf: '12345678944', gender: 'M', telephone: '61984523614', roleId: 1},
      {name: 'Maria Silva', adress: 'Show de Morar', cpf: '32165478945', gender: 'F', telephone: '61985963214', roleId: 5},
    ])
  }
}