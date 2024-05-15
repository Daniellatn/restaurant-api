import type { HttpContext } from '@adonisjs/core/http'

import Role from "#models/role";

export default class RolesController {
  async index({request}: HttpContext) {
    const page = request.input('page')
    return await Role.query().paginate(page, 5)
  }

  async show({params}: HttpContext) {
    return await Role.findOrFail(params.id)
  }

  async store({request}: HttpContext) {
    const data = request.only(['name'])
    return await Role.create(data)
  }

  async update({params, request}: HttpContext) {
    const role = await Role.findOrFail(params.id)
    const data = request.only(['name'])

    try {
      role.merge(data)
      await role.save()
      return {message: 'Registro alterado com sucesso. ', role}
    } catch (error) {
      return {message: error}
    }
  }

  async destroy({params}: HttpContext) {
    const role = await Role.findOrFail(params.id)
    
    try {
      await role.delete()
      return {message: 'Registro deletado com sucesso. ', role}
    } catch (error) {
      return {message: error}
    }
  }
}