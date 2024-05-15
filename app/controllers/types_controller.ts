import type { HttpContext } from '@adonisjs/core/http'

import Type from "#models/type";

export default class TypesController {
  async index({request}: HttpContext) {
    const page = request.input('page')
    return await Type.query().paginate(page, 5)
  }

  async show({params}: HttpContext) {
    return await Type.findOrFail(params.id)
  }

  async store({request}: HttpContext) {
    const data = request.only(['name'])
    return await Type.create(data)
  }

  async update({params, request}: HttpContext) {
    const type = await Type.findOrFail(params.id)
    const data = request.only(['name'])

    try {
      type.merge(data)
      await type.save()
      return {message: 'Registro alterado com sucesso. ', type}
    } catch (error) {
      return {message: error}
    }
  }

  async destroy({params}: HttpContext) {
    const type = await Type.findOrFail(params.id)
    
    try {
      await type.delete()
      return {message: 'Registro deletado com sucesso. ', type}
    } catch (error) {
      return {message: error}
    }
  }
}