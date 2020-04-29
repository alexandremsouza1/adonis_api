'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('users', 'UserController.create')
  Route.post('sessions', 'SessionController.create')
  Route.post('show', 'UserController.show')
}).prefix('api')

Route.group(() => {
  Route.post('createProduct', 'ProductController.create')
  Route.post('storeProduct', 'ProductController.store')
  Route.post('showProduct', 'ProductController.show')
  Route.post('editProduct', 'ProductController.edit')
  Route.post('updateProduct', 'ProductController.update')
  Route.post('deleteProduct', 'ProductController.destroy')
}).middleware(['auth'])

