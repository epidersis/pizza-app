function Order(props) {
  <div className="order">
    <p>
      We&apos;re open until {props.closeHour}:00. Come visit us or order online.
    </p>
    <button className="btn">Order</button>
  </div>
}

export default Order;
