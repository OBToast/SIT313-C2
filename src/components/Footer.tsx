function Email() {
  return (
    <div className='py-5' id="email">
      <div className="mx-auto flex bg-gray-400 text-black py-1 px-2 items-center max-w-[600px] justify-center">
        <h2><strong>SIGN UP FOR OUR DAILY INSIDER!</strong></h2>
        <form method="POST" action="/">
          <input type="text" name="email" placeholder="Enter your email" className="m-2 border-1 bg-white" />
          <button type="submit" className="bg-gray-600 p-1">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div id="footer">
      <Email />
      <div className='bg-teal-700 text-black'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 py-5 gap-10 text-center">
          <ul>
            <li className='text-2xl'>
              Explore
            </li>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/home">Questions</a>
            </li>
            <li>
              <a href="/home#Articles">Articles</a>
            </li>
            <li>
              <a href="/home#Tutorials">Tutorials</a>
            </li>
          </ul>
          <ul>
            <li className='text-2xl'>
              <a href="/home">Support</a>
            </li>
            <li>
              <a href="/home">FAQs</a>
            </li>
            <li>
              <a href="/home">Help</a>
            </li>
            <li>
              <a href="/home">Contact us</a>
            </li>
          </ul>
          <ul>
            <div className='text-2xl'>
              Stay connected
              <div className='flex gap-5 justify-center'>
                <a href="https://www.facebook.com/">
                <img src="facebook.jpg" className='rounded max-w-[40px]' />
                </a>
                <a href="https://www.instagram.com/">
                <img src="ig.webp" className='rounded max-w-[40px]' />
                </a>
                <a href="https://www.x.com/">
                <img src="x.jpg" className='rounded max-w-[40px]' />
                </a>
              </div>
            </div>
          </ul>
        </div>
        <h2 className='text-2xl text-center'>Dev@Deakin2026</h2>
        <div className='flex items-center justify-center gap-4'>
          <a href="/home">Privacy Policy</a>
          <a href="/home">Terms</a>
          <a href="/home">Code of Conduct</a>
        </div>
        <br></br>
      </div>
    </div>
  )
}
export default Footer