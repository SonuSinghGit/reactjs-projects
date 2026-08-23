import React, { useState } from "react";

function ShoppingCard() {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, quantity)
    if(!name || !quantity){
        alert("enter name or quantity")
        return;
    }
    const newItems= {
        name,
        quantity:parseInt(quantity)
    }
    setItems((preItems)=> [...preItems,newItems])
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Project 3 - Add Shopping card</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter itms name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button type="submit">Add Items</button>
        </form>
        {items.map((items,index) => (
          <ul key={index}>
            <h2>Items: {items.name} "Qty:" {items.quantity}  </h2>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCard;
