// import type { HttpContext } from '@adonisjs/core/http'

import PaymentMethod from "#models/payment_method";

export default class PaymentMethodsController {
  async index() {
    return await PaymentMethod.all()
  }
}