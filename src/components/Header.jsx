import { useCart } from "../context/CartContext";
function Header() {
  const { amount } = useCart();
  return (
    <>
      <header className="flex justify-between items-center max-w-[1200px] m-auto p-[10px] h-[70px] border-b-[1px] border-#eee text-[18px] font-bold">
        <p>Shopping Application</p>
        <p>จำนวนสินค้า : {amount}</p>
      </header>
    </>
  );
}

export default Header;
