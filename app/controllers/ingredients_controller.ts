import type { HttpContext } from '@adonisjs/core/http'

import Ingredient from "#models/ingredient";

export default class IngredientsController {
  async index({request}: HttpContext) {
    const page = request.input('page')
    return await Ingredient.query().paginate(page, 5)
  }

  async show({params}: HttpContext) {
    return await Ingredient.findOrFail(params.id)
  }

  async store({request}: HttpContext) {
    const data = request.only(['name', 'description'])
    return await Ingredient.create(data)
  }

  async update({params, request}: HttpContext) {
    const ingredient = await Ingredient.findOrFail(params.id)
    const data = request.only(['name', 'description'])

    try {
      ingredient.merge(data)
      await ingredient.save()
      return {message: 'Registro alterado com sucesso. ', ingredient}
    } catch (error) {
      return {message: error}
    }
  }

  async destroy({params}: HttpContext) {
    const ingredient = await Ingredient.findOrFail(params.id)
    
    try {
      await ingredient.delete()
      return {message: 'Registro deletado com sucesso. ', ingredient}
    } catch (error) {
      return {message: error}
    }
  }
}