import type { HttpContext } from '@adonisjs/core/http'

import Client from "#models/client";

export default class ClientsController {
  async index({request}: HttpContext) {
    const page = request.input('page')
    return await Client.query().paginate(page, 5)
  }

  async show({params}: HttpContext) {
    return await Client.findOrFail(params.id)
  }

  async store({request}: HttpContext) {
    const data = request.only(['name', 'cpf', 'telephone', 'email'])
    return await Client.create(data)
  }

  async update({params, request}: HttpContext) {
    const client = await Client.findOrFail(params.id)
    const data = request.only(['name', 'cpf', 'telephone', 'email'])

    try {
      client.merge(data)
      await client.save()
      return {message: 'Registro alterado com sucesso. ', client}
    } catch (error) {
      return {message: error}
    }
  }

  async destroy({params}: HttpContext) {
    const client = await Client.findOrFail(params.id)
    
    try {
      await client.delete()
      return {message: 'Registro deletado com sucesso. ', client}
    } catch (error) {
      return {message: error}
    }
  }
}