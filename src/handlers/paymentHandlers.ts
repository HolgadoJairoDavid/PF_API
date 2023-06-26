import { RequestHandler } from "express";
import Donation from "./../models/Donation"
import createOrder from "../controllers/paymentController/createOrder";
import captureOrder from "../controllers/paymentController/captureOrder";
import getAllDonations from "../controllers/paymentController/getAllDonations";

export const createOrderHandler: RequestHandler = async (req, res) => {
  try {

    const data = await createOrder(req.body);
    return res.status(200).json(data);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const captureOrderHandler: RequestHandler = async (req, res) => {

  const {token, name, email} = req.query

  console.log(token)

  try {
    const {purchase_units} = await captureOrder(token);
    const amount = purchase_units[0].payments.captures[0].amount
    const paymentInfo = {
      name,
      email,
      ...amount
    }
    const newDonation = await Donation.create(paymentInfo)
    res.redirect("http://localhost:5173/donation")
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const cancelOrderHandler: RequestHandler = async (req, res) => {
  return res.redirect("http://localhost:5173/donation");
};

export const getAllDonationsHandler: RequestHandler = async (req,res) => {
  
  try {
    
    const allDonations = await getAllDonations()

    return res.status(200).json(allDonations)

  } catch (err: any) {
    
    return res.status(500).json({error: err.message})

  }

}
