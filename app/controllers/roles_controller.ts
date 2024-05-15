// import type { HttpContext } from '@adonisjs/core/http'

import Role from "#models/role";

export default class RolesController {
  async index() {
    return await Role.all()
  }
}