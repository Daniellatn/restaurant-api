import type { HttpContext } from '@adonisjs/core/http'

import ProductIngredient from "#models/product_ingredient";

export default class ProductIngredientsController {
  async index({request}: HttpContext) {
    const page = request.input('page')
    return await ProductIngredient.query().paginate(page, 5)
  }

  async show({params}: HttpContext) {
    return await ProductIngredient.findOrFail(params.id)
  }

  async store({request}: HttpContext) {
    const data = request.only(['productId', 'ingredientId'])
    return await ProductIngredient.create(data)
  }

  async update({params, request}: HttpContext) {
    const productIngredient = await ProductIngredient.findOrFail(params.id)
    const data = request.only(['productId', 'ingredientId'])

    try {
      productIngredient.merge(data)
      await productIngredient.save()
      return {message: 'Registro alterado com sucesso. ', productIngredient}
    } catch (error) {
      return {message: error}
    }
  }

  async destroy({params}: HttpContext) {
    const productIngredient = await ProductIngredient.findOrFail(params.id)
    
    try {
      await productIngredient.delete()
      return {message: 'Registro deletado com sucesso. ', productIngredient}
    } catch (error) {
      return {message: error}
    }
  }
}