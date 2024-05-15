import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ProductsController {
  // getAll
  async index({request}: HttpContext) {
    const page = request.input('page')
    return await Product.query().paginate(page, 5)

    // Para filtrar
    // return await Product.query().where('typeId',1)
  }

  // async index() {
  //   return await Role.all()
  // }

  // get
  async show({params}: HttpContext) {
    return await Product.findOrFail(params.id)
  }

  // post
  async store({request}: HttpContext) {
    const data = request.only(['name', 'price', 'size', 'typeId'])
    return await Product.create(data)
  }

  // update
  async update({params, request}: HttpContext) {
    const product = await Product.findOrFail(params.id)
    const data = request.only(['name', 'price', 'size', 'typeId'])

    try {
      product.merge(data)
      await product.save()
      return {message: 'Registro alterado com sucesso. ', product}
    } catch (error) {
      return {message: error}
    }
  }

  // delete
  async destroy({params}: HttpContext) {
    const product = await Product.findOrFail(params.id)
    
    try {
      await product.delete()
      return {message: 'Registro deletado com sucesso. ', product}
    } catch (error) {
      return {message: error}
    }
  }
}