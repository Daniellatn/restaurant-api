// import type { HttpContext } from '@adonisjs/core/http'

import ProductIngredient from "#models/product_ingredient";

export default class ProductIngredientsController {
  async index() {
    return await ProductIngredient.all()
  }
}