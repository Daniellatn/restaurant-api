import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Card extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare table: string

  @column.dateTime()
  declare datePayment: DateTime

  @column.dateTime()
  declare date: DateTime

  @column()
  declare employeeId: number

  @column()
  declare clientId: number

  @column()
  declare paymentMethodId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}