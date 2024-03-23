import Product from '../Models/productSchema.js'; 

// Controlador para obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const productos = await Product.find({ inStock: true });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

