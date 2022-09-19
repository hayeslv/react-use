import React, { useContext, useEffect, useState } from 'react';
import iconImg from '../../asset/bag.png';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout';

export default function Cart() {
  const ctx = useContext(CartContext);

  const [showDetails, setShowDetails] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  // 在组件每次重新渲染的时候，检查一下商品的总数量，如果数量为0，则修改showDetails为false
  useEffect(() => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      setShowCheckout(false);
    }
  }, [ctx, setShowDetails, setShowCheckout]);

  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails(prevState => !prevState);
  };

  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  };
  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };

  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
      {/* 购物车详情 */}
      { showDetails && <CartDetails />}

      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        {
          ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
        }
      </div>

      {
        ctx.totalPrice === 0
          ? <p className={classes.UnGoods}>未选购商品</p>
          : <p className={classes.Price}>{ctx.totalPrice}</p>
      }

      <button
        className={`${classes.Button} ${ctx.totalPrice === 0 ? classes.Disabled : ''}`}
        onClick={showCheckoutHandler}
      >去结算</button>
    </div>
  );
}
