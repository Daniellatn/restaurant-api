import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'employees'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 45).notNullable()
      table.string('cpf', 14).notNullable()
      table.string('adress', 200).notNullable()
      table.string('gender', 1).notNullable()
      table.string('telephone', 15).notNullable()
      table.integer('role_id').unsigned().references('roles.id').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}