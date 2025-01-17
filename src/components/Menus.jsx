import React, { useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "motion/react";

export default function Menus() {
  const menus = [
    {
      Matcha: {
        Mocha: { iced: "150", hot: "100" },
        Makiatto: { iced: "150", hot: "100" },
        Chocolate: { iced: "150", hot: "100" },
        Oreo: { iced: "150", hot: "100" },
        Hazelnut: { iced: "150", hot: "100" },
        Strawberry: { iced: "150", hot: "100" },
      },
      Mojicha: {
        Mocha: { iced: "150", hot: "100" },
        Makiatto: { iced: "150", hot: "100" },
        Chocolate: { iced: "150", hot: "100" },
        Oreo: { iced: "150", hot: "100" },
        Hazelnut: { iced: "150", hot: "100" },
        Strawberry: { iced: "150", hot: "100" },
      },
      Coffee: {
        Mocha: { iced: "150", hot: "100" },
        Makiatto: { iced: "150", hot: "100" },
        Chocolate: { iced: "150", hot: "100" },
        Oreo: { iced: "150", hot: "100" },
        Hazelnut: { iced: "150", hot: "100" },
        Strawberry: { iced: "150", hot: "100" },
      },
      Meals: {
        Waffle: { price: "100" },
        Pancake: { price: "100" },
        Steak: { price: "100" },
        Fries: { price: "100" },
        Burger: { price: "100" },
        Katsudon: { price: "100" },
        Sausage: { price: "100" },
        Oyakudon: { price: "100" },
      },
    },
  ];

  return (
    <div id="menu" className="w-full bg-green">
      <div className="flex justify-center items-center mx-auto py-8 max-w-[1240px] text-center text-white">
        <div className="grid justify-center gap-10 p-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-24 md:p-16">
          {Object.entries(menus[0]).map(([menu, items], index) => (
            <Menu key={index} menu={menu} items={items} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Menu({ menu, items, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return(
    <motion.div 
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: index * 0.1 }} 
    >
      <h2 
        className="mb-1 text-2xl font-bold origin-bottom sm:text-3xl md:text-5xl"
      >
        {menu}
      </h2>
      <hr className="mb-5" />

      <div className="flex justify-between gap-14 sm:text-xl">
        <ul className="text-left">
          {menu === "Matcha" ||
          menu === "Mojicha" ||
          menu === "Coffee" ? (
            <li className="mb-1">&nbsp;</li>
          ) : (
            <></>
          )}

          {Object.keys(items).map((item) => (
            <li key={item} className="mb-1">
              {String(item)}
            </li>
          ))}
        </ul>

        <div className="flex justify-between gap-4">
          {menu === "Matcha" ||
          menu === "Mojicha" ||
          menu === "Coffee" ? (
            <>
              <ul className="text-center">
                <li className="font-bold mb-1">Iced</li>

                {Object.entries(items).map(([item, prices]) => (
                  <li key={item} className="mb-1">
                    {prices.iced}
                  </li>
                ))}
              </ul>

              <ul className="text-center">
                <li className="font-bold mb-1">Hot</li>

                {Object.entries(items).map(([item, prices]) => (
                  <li key={item} className="mb-1">
                    {prices.hot}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="text-center">
                {Object.entries(items).map(([item, prices]) => (
                  <li key={item} className="mb-1">
                    {prices.price}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
