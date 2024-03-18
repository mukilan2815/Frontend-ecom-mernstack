import React from "react";
import new_collections from "../Assets/new_collections";
import Item from "../Items/items";
const Newcollections = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold flex justify-center">Newcollections</h1>
      <div className="flex flex-wrap justify-center ">
        {new_collections.map((item) => {
          return (
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.new_price}
              oldprice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Newcollections;
