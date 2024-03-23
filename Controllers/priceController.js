import Product from '../Models/productSchema.js';
import Client from '../Models/clientSChema.js';

export const getPrice = async (req, res) => {
  try {
    const { user_id, nombre_producto } = req.params;

    // Buscar el cliente por su ID
    const client = await Client.findById(user_id);

    if (!client) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    // Buscar el producto por su nombre
    const product = await Product.findOne({ name: nombre_producto });

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    let precioEspecial = product.price;  

    if (client.specialPricing) {
      const specialPrice = client.specialPricing.find(sp => sp.brand.toLowerCase() === product.brand.toLowerCase());
      console.log(specialPrice)
      if (specialPrice) {
        precioEspecial = specialPrice.price;
      }
    }

    res.json({ precioEspecial });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
