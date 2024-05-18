import Link from "next/link";

const Nav = () => {
    return (
        <ul className="flex list-none justify-between h-12 items-center ">
            <li className=""><Link href="/">Home</Link></li>
            <li><Link href="/about">Register</Link></li>
            <li><Link href="/contact">Login</Link></li>
            <li></li>
        </ul>
    );
}

export default Nav;