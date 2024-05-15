import type { HttpContext } from '@adonisjs/core/http'

import ProductCard from "#models/product_card";

export default class ProductCardsController {
  async index({request}: HttpContext) {
    const page = request.input('page')
    return await ProductCard.query().paginate(page, 5)
  }

  async show({params}: HttpContext) {
    return await ProductCard.findOrFail(params.id)
  }

  async store({request}: HttpContext) {
    const data = request.only(['quantity', 'productId', 'cardId'])
    return await ProductCard.create(data)
  }

  async update({params, request}: HttpContext) {
    const productCard = await ProductCard.findOrFail(params.id)
    const data = request.only(['quantity', 'productId', 'cardId'])

    try {
      productCard.merge(data)
      await productCard.save()
      return {message: 'Registro alterado com sucesso. ', productCard}
    } catch (error) {
      return {message: error}
    }
  }

  async destroy({params}: HttpContext) {
    const productCard = await ProductCard.findOrFail(params.id)
    
    try {
      await productCard.delete()
      return {message: 'Registro deletado com sucesso. ', productCard}
    } catch (error) {
      return {message: error}
    }
  }
}