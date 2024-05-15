import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cards'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('table', 45)
      table.timestamp('date_payment')
      table.timestamp('date')
      table.integer('employee_id').unsigned().references('employees.id')
      table.integer('client_id').unsigned().references('clients.id')
      table.integer('payment_method_id').unsigned().references('payment_methods.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}