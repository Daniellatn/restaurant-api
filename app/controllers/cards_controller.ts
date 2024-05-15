import type { HttpContext } from '@adonisjs/core/http'

import Card from "#models/card";

export default class CardsController {
  async index({request}: HttpContext) {
    const page = request.input('page')
    return await Card.query().paginate(page, 5)
  }

  async show({params}: HttpContext) {
    return await Card.findOrFail(params.id)
  }

  async store({request}: HttpContext) {
    const data = request.only(['table', 'datePayment', 'date', 'employeeId', 'clientId', 'paymentMethodId'])
    return await Card.create(data)
  }

  async update({params, request}: HttpContext) {
    const card = await Card.findOrFail(params.id)
    const data = request.only(['table', 'datePayment', 'date', 'employeeId', 'clientId', 'paymentMethodId'])

    try {
      card.merge(data)
      await card.save()
      return {message: 'Registro alterado com sucesso. ', card}
    } catch (error) {
      return {message: error}
    }
  }

  async destroy({params}: HttpContext) {
    const card = await Card.findOrFail(params.id)
    
    try {
      await card.delete()
      return {message: 'Registro deletado com sucesso. ', card}
    } catch (error) {
      return {message: error}
    }
  }
}