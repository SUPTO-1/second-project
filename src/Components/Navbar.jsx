"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const links = [
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "time",
      path: "/time",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    }
  ];
  // const handleLogin = () => {
  //   router.push("/api/auth/signin");
  // };
  if (pathName.includes("dashboards"))
    return (
      <div className="bg-gray-800">
        <h1>Dashboard</h1>
      </div>
    );
  return (
    <div className="bg-gray-800 flex justify-between px-4 text-white text-sm font-bold py-10">
      <div>
        <Link
          href={"/"}
          className="text-3xl font-bold"
          onClick={() => router.push("/")}
        >
          <h2 className="text-3xl font-bold">Next Js</h2>
        </Link>
      </div>
      <div className="flex gap-4">
        {links?.map((link) => (
          <Link
            className={`${
              pathName === link.path && "underline underline-offset-8"
            }`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
      {session.status === "unauthenticated" ? (
        <Link href={"/api/auth/signin"}>
        <button
          className="bg-white text-black px-4 py-2 rounded-md"
        >
          Login
        </button>
        <Link href={"/api/auth/signup"}>
        <button
          className="bg-white text-black px-4 py-2 rounded-md"
        >
          Signup
        </button>
        </Link>
        </Link>
      ) : (
          <button
          onClick={()=>signOut()}
          className="bg-white text-black px-4 py-2 rounded-md"
        > Logout
        </button>
      )}
      <div>
        <Image height={40} width={40} alt={session?.data?.user?.name} src={session?.data?.user?.image}></Image>
        <h6>{session?.data?.user?.name}</h6>
        <h6>{session?.data?.user?.type}</h6>
      </div>
    </div>
  );
};

export default Navbar;
