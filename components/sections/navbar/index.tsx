import Logo from '../../elements/logo'
import NavLinks from '../../elements/nav-links'

const Navbar = () => {
  return (
    <nav id="home" className="grid grid-cols-[1fr,auto] items-center py-4 lg:py-8">
      <Logo />
      <NavLinks sidebar={false}/>
    </nav>
  )
}

export default Navbar
