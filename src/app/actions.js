import axios from 'axios';
import Product from "@/app/models/Product";
import dbConnect from "@/app/database/dbConnect";

 const getAllProducts = async () => {//Obtener todos los productos desde una API
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      return response.data.products;
    } catch (error) {
      console.log(error);
    }
  };

  const getOneProduct = async (id) => {//Obtener un solo producto desde una API
    try {
      const response = await axios.post('http://localhost:3000/api/products', {
        id,
      });
      //Se usa axios.post() para enviar el ID del producto a la API en 
    //la URL http://localhost:3000/api/products. La solicitud POST envía el id como parte del cuerpo de la petición.
      return response.data.products;
      //Si la solicitud tiene éxito, el producto se devuelve desde response.data.products.
    } catch (error) {
      console.log(error);
    }
  };

  export async function getAllProductsDB() {//Obtener todos los productos desde MongoDB y devolverlos como un objeto JSON.
    await dbConnect();//asegura que la conexión con la base de datos está activa antes de realizar cualquier operación. 
    //Esto es importante porque MongoDB no siempre está conectado de forma predeterminada.
    try {
      const products = await Product.find().sort({ name: "asc" });
      return { products: JSON.parse(JSON.stringify(products)) };//Los resultados se devuelven como un objeto JSON
      //lo que convierte los objetos de Mongoose a objetos JavaScript simples.
    } catch (error) {
      console.log("Error: ", error.message);
      return { products: [], category: null };
    }
  }//toma los dato de la base de datos, los ordena y los devuelve como un json donde lo pidamos.
  
  export async function getOneProductDB(id){//Obtener un solo producto desde MongoDB
    await dbConnect();
    try{
      const product = await Product.findById(id)//busca en la base de datos el producto cuyo _id coincida con el id proporcionado
      return {product: JSON.parse(JSON.stringify(product)) };
    } catch(error){
        console.log(error);
        return null;
    }
  }
  
  export { getAllProducts, getOneProduct };