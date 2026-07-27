import './App.css'

import {
  heroImage,
  welcomeText,
  profileImage,
  profileText,
  projects,
  photos,
  articles,
  artcileText,
  tutorials,
  tutorialText
} from "./data.ts"

function NavBar() {
  return (
    <div>
      <header>
        <div className="container py-5 flex items-center justify-between">
          <nav>
            <ul className="flex items-center gap-4">
              <li className="hover:underline">
                <a href="#">About</a>
              </li>
              <li className="hover:underline">
                <a href="#work">Work</a>
              </li>
              <li className="hover:underline">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

function HeroImage({ heroImage, welcomeText }) {
  return (
    <section id="hero" className="group bg-center bg-cover min-h-[300px] flex items-end justify-center text-center" style={{ backgroundImage: "url('/" + heroImage + "')" }}>
      <div className="container">
        <h1 className="text-7xl opacity-0 group-hover:opacity-100 bg-gray-800/30 text-white">{welcomeText}</h1>
      </div>
    </section>
  )
}

function Profile({ profileImage, profileText }) {
  return (
    <div className="flex items-center flex-col py-5" id="profile">
      <img src={profileImage} className="rounded-full h-52 w-52 object-cover" />
      <h2 className="text-2xl py-5" id="about">{profileText}</h2>
    </div>
  )
}

function Article({ name, desc, image, author, rating }) {
  return (
    <div className="max-w-[400px] mx-auto" >
      <img src={image} className=" rounded-2xl max-h-[300px] mx-auto" />
      <h3 className='text-center text-2xl py-2'>{name}</h3>
      <p>{desc}</p>
      <div className='flex items-center justify-between'>
        <h4 className='text-2xl'>⭐{rating}</h4>
        <h4 className='text-2xl'>{author}</h4>
      </div>
    </div>
  )
}

function Articles({ articles, text }) {
  return (
    <div id="article">
      <h2 className='text-3xl text-center'>Featured {text}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-10 py-5 gap-10 items-center">
        {articles.map((article) => (
          <Article
            key={article.name}
            name={article.name}
            desc={article.desc}
            image={article.image}
            author={article.author}
            rating={article.rating}
          />
        ))}
      </div>
      <button className="bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-full block mx-auto my-5">See all {text.toLowerCase()}</button>
    </div>
  )
}

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

function Project({ name, desc, image }) {
  return (
    <div>
      <h3 className="text-2xl">{name}</h3>
      <div className="flex items-center px-32 py-2">
        <img src={image} className="rounded-2xl w-[500px]" />
        <p className="max-w-[500px] px-5">{desc}</p>
      </div>
    </div>
  )
}

function Projects({ projects }) {
  return (
    <div className='mx-auto text-center flex items-center flex-col py-5' id="projects">
      <h3 className="text-4xl py-5">Here are some things I've done so far</h3>
      {projects.map((project) => (
        <Project
          key={project.name}
          name={project.name}
          desc={project.desc}
          image={project.image}
        />
      ))}
      <hr className="w-1/2"></hr>
    </div>
  )
}

function Photos({ photos }) {
  return (
    <div id="photos">
      <h2 className="text-4xl py-3 text-center" id="gallery">My Photos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 px-5 py-5 gap-5">
        {photos.map((photo) => (
          <img src={photo} className="rounded-2xl aspect-square object-cover" />
        ))}
      </div>
    </div >
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Questions</a>
            </li>
            <li>
              <a href="#articles">Articles</a>
            </li>
            <li>
              <a href="#articles">Tutorials</a>
            </li>
          </ul>
          <ul>
            <li className='text-2xl'>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Contact us</a>
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
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Code of Conduct</p>
        </div>
        <br></br>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <HeroImage heroImage={heroImage} welcomeText={welcomeText} />
      <Profile profileImage={profileImage} profileText={profileText} />
      <Articles articles={articles} text={artcileText} />
      <Articles articles={tutorials} text={tutorialText} />
      <Projects projects={projects} />
      <Photos photos={photos} />
      <Footer />
    </div>
  )
}

export default App
