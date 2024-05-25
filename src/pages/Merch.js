import React from 'react';
import Navbar from "../components/Navbar";
import bg1 from "./../images/bg1.webp";
import deleteIcon from "./../images/delete-icon-cart.png";
import minusIcon from "./../images/minus-icon-cart.png";
import plusIcon from "./../images/plus-icon-cart.png";

export default function Progress() {
  const [products, setProducts] = React.useState([
    {
      namaProduk: 'GWF Tumbler',
      img: bg1,
      harga: 20000,
      quantity: 1,
    },
    {
      namaProduk: 'GWF Tumbler',
      img: bg1,
      harga: 15000,
      quantity: 1,
    },
    {
      namaProduk: 'GWF Tumbler',
      img: bg1,
      harga: 30000,
      quantity: 1,
    }
  ]);

  const handleDelete = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleQuantityChange = (index, delta) => {
    const newProducts = products.map((product, i) => 
      i === index ? { ...product, quantity: Math.max(1, product.quantity + delta) } : product
    );
    setProducts(newProducts);
  };

  const totalItems = products.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = products.reduce((total, product) => total + product.harga * product.quantity, 0);

  return (
    <div className="">
      <Navbar />

      <div className="flex justify-between items-center m-20">
        <h1 className="font-bold text-4xl">Keranjang Merch</h1>
        <h1 className="font-normal text-3xl mr-4">{totalItems} items</h1>
      </div>

      <div className="m-20">
        {products.map((product, index) => (
          <div key={index} className="bg-primary-1 bg-opacity-20 border-2 border-primary-2 p-4 mb-4 rounded-lg flex items-center">
            <input type="checkbox" className="appearance-none w-7 h-7 mr-4 border-2 border-primary-2 checked:bg-black rounded-md" />
            <img src={product.img} alt={product.namaProduk} className="w-32 h-20 mr-4 rounded-md border-1 border-primary-2" />
            <div className=" flex-1">
              <h2 className="font-semibold text-xl">{product.namaProduk}</h2>
              <h2 className="">{product.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h2>
            </div>
            <div className="flex items-center">
              <button onClick={() => handleDelete(index)} className="ml-2 p-4">
                <img src={deleteIcon} alt="Delete Icon" className="w-10 h-10"/>
              </button>
              <button onClick={() => handleQuantityChange(index, -1)} className="ml-2 p-2 mr-3">
                <img src={minusIcon} alt="Minus Icon" className="w-10 h-10"/>
              </button>
              <span className="mx-2 font-normal text-2xl">{product.quantity}</span>
              <button onClick={() => handleQuantityChange(index, 1)} className="ml-2 p-2">
                <img src={plusIcon} alt="Plus Icon" className="w-10 h-10"/>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='m-20 bg-purple-900 bg-opacity-30 border-2 border-primary-2 p-8 mb-4 rounded-lg items-center flex justify-between'>
        <div>
          <p className="text-2xl font-semibold text-black pb-2">Ringkasan belanja ({totalItems} item)</p>
          <p className="text-black">{totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
        </div>
        <button className='text-3xl text-white p-3 px-20 rounded-xl bg-purple-900'>Beli</button>
      </div>
    </div>
  );
}
