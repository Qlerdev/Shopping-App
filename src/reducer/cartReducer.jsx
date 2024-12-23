import products from "../data/Product";

const cartReducer = (state, action) => {
  //กระบวนการจัดการ state ผ่าน action = การกระทำกับตัว state
  if (action.type === "CALCULATE_TOTAL") {
    const { total, amount } = state.products.reduce(
      (cartTotal, item) => {
        //item = สมาชิกแต่ละตัวใน state product
        const { price, quantity } = item;
        const totalPrice = price * quantity; //ยอดรวมสิ้นค้าแต่ละรายการ
        cartTotal.total += totalPrice; //เอายอดรวมสินค้าแต่ละรายการเอามารวมในตัวแปร total ด้านล่าง
        cartTotal.amount += quantity;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
        //ผลรวมของสิ้นค้าทั้งหมด
      }
    );
    return {
      ...state,
      total,
      amount,
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      // products: state.products.filter((item) => {
      //   item.id !== action.payload;
      // }),
      products: state.products.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "ADD") {
    let updateProduct = state.products.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    return {
      ...state,
      products: updateProduct,
    };
  }
  if (action.type === "SUBTRACT") {
    let updateProduct = state.products
      .map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity != 0);
    return {
      ...state,
      products: updateProduct,
    };
  }
};

export default cartReducer;
