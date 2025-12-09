
import Button from '../componetns/common/Button'
import ChildreanProps from '../componetns/common/ChildreanProps'

const About = () => {
  return (
 <section id="about" className="py-20 md:px-20 lg:px-20 bg-[#ffff]">
  <div className="container mx-auto px-4">
    <div className="mb-12">
      {/* Heading */}
      <h2 className="text-purple-400 text-lg mb-2" data-aos="fade-down">
        About Us
      </h2>
      <h3 className="mb-4 text-3xl font-bold text-black section-title" data-aos="fade-down">
        Capturing Moments That Last Forever
      </h3>
      <p className="mb-8 max-w-3xl text-gray-400" data-aos="fade-down">
        With over a decade of experience in professional photography,
        we've mastered the art of storytelling through our lens. Our passion lies in capturing authentic moments and turning them into timeless memories.
      </p>
      {/* About Cards Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="rounded-lg border border-gray-800 bg-[#1A1A1A] p-6 text-center">
          <h4 className="mb-2 text-3xl font-bold text-purple-400">10+</h4>
          <p className="text-gray-400">Years Experience</p>
        </div>
        <div className="rounded-lg border border-gray-800 bg-[#1A1A1A] p-6 text-center">
          <h4 className="mb-2 text-3xl font-bold text-purple-400">10+</h4>
          <p className="text-gray-400">Years Experience</p>
        </div>
        <div className="rounded-lg border border-gray-800 bg-[#1A1A1A] p-6 text-center">
          <h4 className="mb-2 text-3xl font-bold text-purple-400">10+</h4>
          <p className="text-gray-400">Years Experience</p>
        </div>
        <div className="rounded-lg border border-gray-800 bg-[#1A1A1A] p-6 text-center">
          <h4 className="mb-2 text-3xl font-bold text-purple-400">10+</h4>
          <p className="text-gray-400">Years Experience</p>
        </div>
      </div>
    </div>
    {/* Buttons Section */}
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8" data-aos="fade-up">
      <Button text="get more" color="text-white bg-green-400" />
      <Button  text="learn more" color=" text-red-900"/>
      <Button  text="call us" color= "text-red-900"/>
    </div>

    <ChildreanProps>

        this is children props


    </ChildreanProps>
  </div>
</section>

  )
}

export default About