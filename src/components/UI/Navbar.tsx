import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Navbar() {
    return (
        <header className="bg-steel-blue">
            <div className="container flex mx-auto justify-between">
                <nav className="flex">
                    <Link href="/"><a className="inline-flex text-center py-6 px-3 mr-4 text-steel-blue-100 hover:text-steel-blue-800 text-4xl font-bold cursive tracking-widest capitalize">Sudeep Joel</a></Link>
                    <Link href="/blog"><a className="inline-flex text-center py-3 px-3 text-steel-blue-200 hover:text-steel-blue-800 my-6 rounded">Blog</a></Link>
                    <Link href="/projects"><a className="inline-flex text-center py-3 px-3 text-steel-blue-200 hover:text-steel-blue-800 my-6 rounded">Projects</a></Link>
                    <Link href="/about"><a className="inline-flex text-center py-3 px-3 text-steel-blue-200 hover:text-steel-blue-800 my-6 rounded">About Me!</a></Link>
                </nav>
                <div className="flex my-6 px-3 py-3 items-center space-x-4">
                    <div>
                        <FaTwitter className="  text-white cursor-pointer " size='25px' />
                    </div>
                    <div>
                        <FaInstagram className=" text-white cursor-pointer" size='25px' />
                    </div>
                    <div>
                        <FaLinkedin className=" text-white cursor-pointer" size='25px' />
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Navbar;
