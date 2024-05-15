// import type { HttpContext } from '@adonisjs/core/http'

import Type from "#models/type";

export default class TypesController {
  async index() {
    return await Type.all()
  }
}