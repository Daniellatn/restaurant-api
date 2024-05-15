import type { HttpContext } from '@adonisjs/core/http'

import Employee from "#models/employee";

export default class EmployeesController {
  async index({request}: HttpContext) {
    const page = request.input('page')
    return await Employee.query().paginate(page, 5)
  }

  async show({params}: HttpContext) {
    return await Employee.findOrFail(params.id)
  }

  async store({request}: HttpContext) {
    const data = request.only(['name', 'cpf', 'adress', 'gender', 'telephone', 'roleId'])
    return await Employee.create(data)
  }

  async update({params, request}: HttpContext) {
    const employee = await Employee.findOrFail(params.id)
    const data = request.only(['name', 'cpf', 'adress', 'gender', 'telephone', 'roleId'])

    try {
      employee.merge(data)
      await employee.save()
      return {message: 'Registro alterado com sucesso. ', employee}
    } catch (error) {
      return {message: error}
    }
  }

  async destroy({params}: HttpContext) {
    const employee = await Employee.findOrFail(params.id)
    
    try {
      await employee.delete()
      return {message: 'Registro deletado com sucesso. ', employee}
    } catch (error) {
      return {message: error}
    }
  }
}