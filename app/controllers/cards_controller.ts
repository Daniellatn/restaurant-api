// import type { HttpContext } from '@adonisjs/core/http'

import Card from "#models/card";

export default class CardsController {
  async index() {
    return await Card.all()
  }
}