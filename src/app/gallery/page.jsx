import Image from "next/image";
import React from "react";
import { Montserrat_Alternates } from "next/font/google";
const montserrat = Montserrat_Alternates({
    subsets: ["latin"],
    variable: "--font-mont",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const page = () => {
  return (
    <div className={`p-12 ${montserrat.className}`}>
      <h2 className="text-2xl text-center mb-10">Gallery Page</h2>
      <div>
        {
            [1,2,3,4]?.map((img)=>(
                <Image key={img} src={`/images/${img}.jpg`} alt="" height="1080" width="1920" />
            ))
        }
      </div>
    </div>
  );
};

export default page;
