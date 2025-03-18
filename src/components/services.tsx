import baby from "../assets/Baby1.jpg";
import babyBoy from "../assets/babyboy.jpg";
import pregnant from "../assets/pregnant2.jpg";
import mother from "../assets/mother.jpg";

const Services = () => {
  return (
    <div className="item-center flex w-full flex-col justify-center gap-4 bg-gray-100 px-8 py-12 md:gap-6" id="services">
      <p className="mb-6 max-w-3xl border-b border-red-300 pb-4 pt-8 text-center text-2xl italic text-gray-500 sm:text-3xl md:text-4xl">
        Our Services
      </p>

      {/* Prenatal Care Section */}
      <div className="mb-12 flex flex-col items-center justify-evenly gap-8 rounded-lg p-8 transition-shadow  duration-300 hover:bg-gray-200 hover:shadow-xl md:flex-row">
        <div className="flex max-w-md flex-col items-center md:items-start">
          <h3 className="mb-4 text-3xl font-semibold text-gray-800">
            Prenatal Care
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Prenatal massage is a gentle, therapeutic treatment tailored to the
            unique needs of expectant mothers. Using specialized techniques, we
            focus on alleviating common pregnancy discomforts such as back pain,
            swelling, joint stiffness, and muscle tension. Our goal is to create
            a safe, nurturing environment where you can unwind and reconnect
            with your body.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
          <img
            src={pregnant}
            alt="Prenatal Care"
            className="h-96 w-96 transform object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Newborn Baby Massage */}
      <div className=" mb-12 flex flex-col items-center justify-evenly gap-8 rounded-lg p-8 transition-shadow duration-300  hover:bg-gray-200 hover:shadow-xl md:flex-row-reverse">
        <div className="flex max-w-md flex-col items-center md:items-start">
          <h3 className="mb-4 text-3xl font-semibold text-gray-800">
            Postpartum Care
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Postpartum recovery, lactation support, and mental well-being
            assistance help mothers regain strength and confidence. Our
            personalized care ensures you feel supported and nurtured during
            this transformative time.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
          <img
            src={baby}
            alt="Postpartum Care"
            className="h-96 w-96 transform object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className=" mb-12 flex flex-col items-center justify-evenly gap-8 rounded-lg p-8 transition-shadow duration-300  hover:bg-gray-200 hover:shadow-xl md:flex-row">
        <div className="flex max-w-md flex-col items-center md:items-start">
          <h3 className="mb-4 text-3xl font-semibold text-gray-800">
            Newborn Baby Massage
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Newborn baby massage is a gentle, loving practice that promotes
            bonding, relaxation, and healthy development for your little one.
            Our specialized techniques are designed to soothe your baby, improve
            sleep patterns, aid digestion, and enhance overall well-being. Let
            us guide you in creating a nurturing experience for both you and
            your baby.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
          <img
            src={babyBoy}
            alt="Newborn Baby Massage"
            className="h-96 w-96 transform object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className=" mb-12 flex flex-col items-center justify-evenly gap-8 rounded-lg p-8 transition-shadow duration-300  hover:bg-gray-200 hover:shadow-xl md:flex-row-reverse">
        <div className="flex max-w-md flex-col items-center md:items-start">
          <h3 className="mb-4 text-3xl font-semibold text-gray-800">
            Relaxation Massage at Home
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Pregnancy and postpartum are transformative phases in a woman’s
            life, but they can also bring physical and emotional challenges. Our
            relaxation massage is specially designed to support pregnant mothers
            and women after delivery, helping them find relief, relaxation, and
            rejuvenation during this special time. Whether you’re expecting or
            recovering, our gentle and nurturing techniques are here to help you
            feel your best.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
          <img
            src={mother}
            alt="Newborn Baby Massage"
            className="h-96 w-96 transform object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Services;
