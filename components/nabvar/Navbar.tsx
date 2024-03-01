
import { ActiveLink } from "../active-link/ActiveLink";

const links = [
  { path: '/about', text: 'About' },
  { path: '/contact', text: 'Contact' },
  { path: '/pricing', text: 'Pricing' }
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

        <span>Home</span>
        <div className="flex flex-1"></div>
        {
            links.map((e) => 
                <ActiveLink key={ e.path } {...e}/>
            )
        }
        
    </nav>
  )
}
