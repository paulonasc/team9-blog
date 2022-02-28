import Link from "next/link"

function Navbar({ href, text }) {
    return (
        <li>
            <Link href={href}>
                <a className="text-sm font-bold text-gray-700 px-2 py-1 hover:bg-gray-300 rounded transition-colors duration-300">
                    {text}
                </a>
            </Link>
        </li>
    )
}

export default Navbar
