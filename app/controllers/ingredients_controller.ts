// import type { HttpContext } from '@adonisjs/core/http'

import Ingredient from "#models/ingredient";

export default class IngredientsController {
  async index() {
    return await Ingredient.all()
  }
}