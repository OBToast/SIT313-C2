import '../App.css'

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
} from "../data.ts"

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
    <div id={text}>
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



function HomePage() {
  return (
    <div>
      <HeroImage heroImage={heroImage} welcomeText={welcomeText} />
      <Profile profileImage={profileImage} profileText={profileText} />
      <Articles articles={articles} text={artcileText} />
      <Articles articles={tutorials} text={tutorialText} />
      <Projects projects={projects} />
      <Photos photos={photos} />
    </div>
  )
}

export default HomePage
