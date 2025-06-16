import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import uploadProduct from "../middleware/productUpload.js";

const router = express.Router();

router.post("/", uploadProduct.single("image"), createProduct);
router.put("/:id", uploadProduct.single("image"), updateProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);

export default router;
