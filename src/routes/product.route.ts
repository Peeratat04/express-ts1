
import { Router } from 'express';
import productController from '../controller/product.controller';
const productRouter = Router();
// Endpoint to get all products
productRouter.get("/", productController.getAll);

// Endpoint to delete a product by ID
productRouter.delete("/:id", productController.deleteById);

export default productRouter;