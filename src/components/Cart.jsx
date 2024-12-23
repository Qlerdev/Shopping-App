import Items from "./Items";
import { useCart } from "../context/CartContext";

function Cart() {
  const { products, total, formatMoney } = useCart();
  return (
    <div className="">
      <h1 className="text-center text-[45px]"> {products.length > 0 ? `ยอดที่ต้องชำระเงินรวม ${formatMoney(total)} บาท` : <h1>ไม่มีสินค้าในตะกร้า</h1>}</h1>
      {products.map((data) => {
        return <Items key={data.id} {...data} />;
      })}
    </div>
  );
}

export default Cart;
