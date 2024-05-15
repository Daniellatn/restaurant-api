// import type { HttpContext } from '@adonisjs/core/http'

import ProductCard from "#models/product_card";

export default class ProductCardsController {
  async index() {
    return await ProductCard.all()
  }
}