import React from "react";
import Image from "next/image";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/*Product container*/}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-auto lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/*single item container*/}
        <div className="flex items-center justify-between mb-4 ">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">pizza</h1>
            <span>large</span>
          </div>
          <h2 className="font-bold">80,90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/*single item container*/}
        <div className="flex items-center justify-between mb-4 ">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">pizza</h1>
            <span>large</span>
          </div>
          <h2 className="font-bold">80,90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/*single item container*/}
        <div className="flex items-center justify-between mb-4 ">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">pizza</h1>
            <span>large</span>
          </div>
          <h2 className="font-bold">80,90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/*payment container*/}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$80,-</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0,-</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>TOTAL (INC. VAT)</span>
          <span className="font-bold">$80,-</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
