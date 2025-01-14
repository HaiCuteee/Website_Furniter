import React from 'react';
import { useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';

export function Cart() {


  const carts = useSelector((state) => state.CartReducer.items || []);
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice || 0);

  console.log(carts);


  return (
    <div className='container mt-5 mb-5'>
      <h4 className='text-uppercase'>Giỏ hàng</h4>
      <table className="table mt-4 mb-4">
        <thead>
          <tr>
            <th scope="col">Ảnh sản phẩm</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá bán lẻ</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Tạm tính</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item) => {
            return (
              <tr key={item.id}>
                <td><img src={item.product.image} alt="" width={50} /></td>
                <td>{item.product.name}</td>
                <td>{item.product.price}.00 $</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.product.price}.00 $</td>
                <td><MdDelete /></td>
              </tr>
            );
          })}

        </tbody>
      </table>
      <h4 className='font-weight-bold mb-4 d-flex'>Tổng tiền : <span className='ml-5 text-success h4'>{totalPrice}.00 $</span></h4>
    </div>
  );
}

export default Cart;