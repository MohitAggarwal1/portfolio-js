import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-4">
                
                {/* Profile Image */}
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={testimonial.imgPath}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover border border-white/20"
                  />
                </div>

                {/* Name & Mention */}
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-white-50">
                    {testimonial.mentions}
                  </p>
                </div>

              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
