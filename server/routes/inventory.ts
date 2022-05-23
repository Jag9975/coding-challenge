import express from 'express';
const router = express.Router();
import * as inventoryController from "../controllers/inventory";

router.get('/get', inventoryController.viewItem);
router.post('/add', inventoryController.addItem);
router.put('/update', inventoryController.updateItem);
router.delete('/delete', inventoryController.deleteItem);

export { router };