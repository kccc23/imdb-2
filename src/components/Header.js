import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6x1 sm:mx-auto items-start">
      <div className="">
        <MenuItem title="Home" address="/" Icon={AiOutlineHome} />
      </div>
      <div className="">
        <MenuItem title="About" address="/about" Icon={AiOutlineInfoCircle} />
      </div>
      <div className="">
        <Link href="/">
          <h2 className=""><span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDB-2</span></h2>
        </Link>

      </div>
    </div>
  )
}
