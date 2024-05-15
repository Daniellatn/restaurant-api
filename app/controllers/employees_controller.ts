// import type { HttpContext } from '@adonisjs/core/http'

import Employee from "#models/employee";

export default class EmployeesController {
  async index() {
    return await Employee.all()
  }
}