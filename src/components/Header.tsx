function Header() {
  return (
    <div className="bg-gray-400  text-black text-xl">
      <header>
        <div className="container flex items-center justify-between">
          <nav className="w-full">
            <ul className="flex items-center gap-10 w-full">
              <li className="hover:underline w-fit">
                <a href="/home" className='font-extrabold w-fit'>Dev@Deakin</a>
              </li>
              <li className='w-full max-w[500] flex items-center m-2 bg-white px-1 py-1'>
                <img src="/search.png" width={24} height={24} />
                <input type="text" placeholder="Search..." className=' w-full'/>
              </li>
              <li className="hover:underline">
                <a href="/home">Post</a>
              </li>
              <li className="hover:underline">
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
export default Header