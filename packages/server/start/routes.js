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
const Route = use('Route');

Route.post('/register', 'UserController.create').validator('StoreUser');

Route.post('/login', 'SessionController.create').validator('StoreSession');

Route.get('/', () => ({ greeting: 'Hello world in JSON' })).middleware('auth');
