import { GlobalErrorProps } from "@/types/sharedTypes";
import Link from "next/link";
import { FC } from "react";

const GlobalErrorComponent: FC<GlobalErrorProps> = ({
  statusCode,
  message,
}) => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-black tracking-widest">
        {statusCode}
      </h1>
      <div className="bg-[#FF6A3D] mt-4px-2 text-sm rounded rotate-12 absolute">
        {message}
      </div>
      <div className="mt-5">
        <button className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link href="/">Návrat domov</Link>
          </span>
        </button>
      </div>
    </main>
  );
};

export default GlobalErrorComponent;