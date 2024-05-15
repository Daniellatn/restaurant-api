import type { HttpContext } from '@adonisjs/core/http'

import PaymentMethod from "#models/payment_method";

export default class PaymentMethodsController {
  async index({request}: HttpContext) {
    const page = request.input('page')
    return await PaymentMethod.query().paginate(page, 5)
  }

  async show({params}: HttpContext) {
    return await PaymentMethod.findOrFail(params.id)
  }

  async store({request}: HttpContext) {
    const data = request.only(['name'])
    return await PaymentMethod.create(data)
  }

  async update({params, request}: HttpContext) {
    const paymentMethod = await PaymentMethod.findOrFail(params.id)
    const data = request.only(['name'])

    try {
      paymentMethod.merge(data)
      await paymentMethod.save()
      return {message: 'Registro alterado com sucesso. ', paymentMethod}
    } catch (error) {
      return {message: error}
    }
  }

  async destroy({params}: HttpContext) {
    const paymentMethod = await PaymentMethod.findOrFail(params.id)
    
    try {
      await paymentMethod.delete()
      return {message: 'Registro deletado com sucesso. ', paymentMethod}
    } catch (error) {
      return {message: error}
    }
  }
}