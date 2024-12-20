import { useCart } from "../context/CartContext";

function Items(props) {
  const { formatMoney } = useCart();
  const { id, name, price, image, quantity } = props;
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-6 mx-4 border border-gray-200">
      <img src={image} alt={id} className="w-40 h-28 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
      <div className="flex-1 text-left md:mr-4">
        <p className="font-bold text-lg mb-2">ชื่อสินค้า: {name}</p>
        <p className="text-gray-600">
          ราคา: <span className="font-semibold">{formatMoney(price)} บาท</span>
        </p>
        <p className="text-gray-600">
          จำนวนสินค้า: <span className="font-semibold">{quantity}</span>
        </p>
      </div>
      <div className="flex items-center md:mr-4">
        <button className="bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600">+</button>
        <input type="text" value={quantity} disabled className="text-center w-12 mx-2 border border-gray-300 rounded-lg" />
        <button className="bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600">-</button>
      </div>
      <div className="flex flex-col items-center md:mr-4">
        <p className="text-gray-600 mb-2">ราคารวม:</p>
        <p className="font-bold text-lg text-green-600">{formatMoney(price * quantity)} บาท</p>
      </div>
      <div className="flex space-x-2">
        <button className="bg-yellow-400 text-white rounded-lg px-4 py-2 hover:bg-yellow-500">ใส่ตะกร้า</button>
        <button className="bg-green-400 text-white rounded-lg px-4 py-2 hover:bg-green-500">ซื้อสินค้า</button>
      </div>
      <button className="text-red-500 hover:text-red-700 mt-4 mx-5 md:mt-0">ลบสินค้า</button>
    </div>
  );
}

export default Items;
