import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap  items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex" >
        <img src={offer} alt="d"   width={733} height={687} className="w-full" />
      </div>
      <div>
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg" >
      <span className="text-coral-red " >Special
      </span>
           Offer
        
          </h2>
          <p className="mt-4 lg:max-w-lg info-text" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel pariatur corporis, qui dolorem quia, consequuntur velit nihil error incidunt quidem odio temporibus
          </p>
          <p className="mt-6 lg:max-w-lg info-text" >Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11 flex flex-wrap gap-4 " > 
              <Button label="Shop now" iconURL={arrowRight}  />
              <Button 
              label="Learn More"
              backgroundColor = "bg-white"
              borderColor = "border-slate-gray"
              textColor = "border-slate-gray"

              />
          </div>

      </div>
      
    </section>
  )
}

export default SpecialOffer
