import express from 'express';
import { getProducts } from '../Controllers/productoController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Endpoints para la gestión de productos
 */

 
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtener todos los productos con stock
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: Lista de productos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                   brand:
 *                     type: string
 *                   inStock:
 *                     type: Boolean
 *                   price:
 *                     type: number  
 *       '404':
 *         description: No se encontraron productos
 *         content:
 *           application/json:
 *             example:
 *               message: No hay productos registrados.
 */
router.get('/', getProducts);


export default router;
