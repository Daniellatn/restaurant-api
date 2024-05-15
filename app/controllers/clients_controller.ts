// import type { HttpContext } from '@adonisjs/core/http'

import Client from "#models/client";

export default class ClientsController {
  async index() {
    return await Client.all()
  }
}