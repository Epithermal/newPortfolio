export default function About() {
  return (
    <>
<section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
  <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
    <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
      IT Support Specialist, Fullstack Developer, Self-Taught Technologist
    </h2>
    <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
      <div className="relative mb-6 sm:mb-0">
        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
          <img
            src="https://i.postimg.cc/X7HHBs6W/IT-Technician-in-Server-Room.png"
            className="rounded-[15px] shadow block"
            alt="IT systems and development"
            width={1207}
            height={929}
          />
        </div>
      </div>

      <div className="relative space-y-4">
        <p className="text-white">
          Hi, I'm Callum from Scotland, A driven and optimistic IT professional with a deep passion for technology, problem-solving, and building efficient systems.
        </p>
        <p className="text-white">
          My journey started during the COVID-19 lockdown when I self-taught programming and web development through online resources and real-world gigs on Fiverr. Since then, I've worked across several IT support roles, bringing energy and results to every position.
        </p>
        <p className="text-white">
          From resolving hundreds of backlog tickets at The Richmond Fellowship Scotland, to delivering on-site and remote support at Weatherproofing Advisors and [READACTED], I've built a strong foundation in both 1st and 2nd line support, asset management, and network troubleshooting.
        </p>
        <p className="text-white">
          I also develop websites and tools on the side, bringing fullstack knowledge and creative thinking to every project I take on. I'm always learning, growing, and pushing my limits — looking for new ways to make an impact in IT and software development.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
