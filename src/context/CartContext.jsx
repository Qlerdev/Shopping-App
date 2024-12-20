import { createContext, useContext, useReducer, useEffect } from "react";
import cartReducer from "../reducer/cartReducer";
import products from "../data/Product";

// การสร้าง context
const CartContext = createContext();

// การกำหนด state เริ่มต้น
const initState = {
  products: products, // ต้องตรวจสอบว่า products เป็นอาร์เรย์ที่ถูกต้อง
  total: 0,
  amount: 0,
};

// Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);
  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  useEffect(() => {
    console.log("คำนวณ");
    dispatch({ type :"CALCULATE_TOTAL"}); //type คือ ชื่อรูปแบบการจัดการ state 
  }, [state.products]);
  return <CartContext.Provider value={{ ...state, dispatch, formatMoney }}>{children}</CartContext.Provider>;
};

// Hook สำหรับการใช้งาน context ด้านนอก
export const useCart = () => {
  return useContext(CartContext);
};

export default CartContext;
