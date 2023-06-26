import {Router} from 'express'
// ACÁ DEBERÍAMOS IMPORTAR LOS HANDLERS
import { 
  createOrderHandler, 
  captureOrderHandler, 
  cancelOrderHandler, 
  getAllDonationsHandler
} from '../handlers/paymentHandlers'

const payment = Router()

payment.post('/create-order', createOrderHandler)

payment.get('/capture-order', captureOrderHandler)

payment.get('/cancel-order', cancelOrderHandler)

payment.get('/all-donations', getAllDonationsHandler)

export default payment;