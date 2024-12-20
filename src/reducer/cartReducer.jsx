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
};
export default cartReducer;
