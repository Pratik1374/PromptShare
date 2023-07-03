import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> AI Prompts </span>
        </h1> 
        <p className="desc text-center">PromptShare revolutionizes the way we engage with creativity in the modern world, providing a platform to discover, create, and share unique prompts.</p>
        <Feed/>
    </section>
  )
}

export default Home