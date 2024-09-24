import { Request, Response } from "express";
import product from "../db/product";

const getAll = (req: Request, res: Response) => {
};
// // Handler to delete a product by ID
const deleteById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).send({
      message: "Invalid ID format",
    });
  }

  try {
    await product.deleteProductById(id);
    res.status(204).send(); // No Content
  } catch (err) {
    console.error(`Error deleting product with ID ${id}:`, err); // Log the full error
    res.status(500).send({
      message: "DATABASE ERROR",
      error: (err as Error).message || "Unknown error", // Ensure error.message is used safely
    });
  }
};
export default { getAll, deleteById};