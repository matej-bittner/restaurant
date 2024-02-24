import React from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4 flex items-center justify-center">
      {/*box*/}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/*image container*/}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/*form container*/}
        <div className="h-2/3 p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button className="flex gap-2 p-4 ring-1 ring-orange-100 rounded-md">
            <Image src="/google.png" alt="" width={20} height={20} />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-2 p-4 ring-1 ring-orange-100 rounded-md">
            <Image src="/facebook.png" alt="" width={20} height={20} />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?{" "}
            <Link className="underline" href="">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
