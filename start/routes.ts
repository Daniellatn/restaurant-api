/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CardsController from '#controllers/cards_controller'
import ClientsController from '#controllers/clients_controller'
import EmployeesController from '#controllers/employees_controller'
import IngredientsController from '#controllers/ingredients_controller'
import ProductCardsController from '#controllers/product_cards_controller'
import ProductIngredientsController from '#controllers/product_ingredients_controller'
import ProductsController from '#controllers/products_controller'
import RolesController from '#controllers/roles_controller'
import TypesController from '#controllers/types_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/name', async () => {
  return {
    name: 'Daniella',
  }
})

router.resource('/products', ProductsController).apiOnly()
router.resource('/types', TypesController).apiOnly()
router.resource('/payment-methods', TypesController).apiOnly()
router.resource('/roles', RolesController).apiOnly()
router.resource('/ingredients', IngredientsController).apiOnly()
router.resource('/clients', ClientsController).apiOnly()
router.resource('/employees', EmployeesController).apiOnly()
router.resource('/cards', CardsController).apiOnly()
router.resource('/product-cards', ProductCardsController).apiOnly()
router.resource('/product-ingredients', ProductIngredientsController).apiOnly()
