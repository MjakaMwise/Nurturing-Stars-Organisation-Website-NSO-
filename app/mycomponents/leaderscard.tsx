import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Leaders() {
  const testimonials = [
    {
      quote:
        "I am passionate about youth and women empowerment, mentorship, and supporting survivors of gender-based violence. As a co-founder of Nurturing Stars Organization, I am committed to creating a better future for young people and advocating for gender equality.",
      name: "Sameer Hashim",
      designation:
        "Senior Gender and Social Development officer at County Government of Mombasa",
      src: "https://i.ibb.co/TqRqPgv4/sameerr.png",
    },
    {
      quote:
        "Beyond pharmacy, I serve on the board of Nurturing Stars Organization, a community based organization in Mombasa that mentors and empowers young girls and boys through digital literacy, tutoring, and career development.",
      name: "Dr. Nur SAID",
      designation:
        "Pharmacist| Dermatology in Clinical practice | Medical Content Creator | Regulatory Affairs",
      src: "https://i.ibb.co/wrj6J6v7/dr-nur.jpg",
    },
    {
      quote:
        "An Experienced Procurement Officer with a proven track record at Alpha Logistics Services (EPZ) Ltd. Expert in strategic sourcing, ERP systems, and project coordination, driving cost reductions and efficiency improvements. Renowned for analytical prowess and negotiation skills.",
      name: "Mohamed Zuber Ahmed    ",
      designation:
        "Founder of Haulken Logistics Ltd | Supply Chain | Maritime | Transport | Oil and Gas",
      src: "https://i.ibb.co/MDXJ2HsF/bilal.jpg",
    },
  ];
  return (
    <>
      <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Our Empowering Leaders
      </div>
      <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
        Good Leadership is at the Core Of our Succes
      </div>
      <div className="flex justify-center">
        <p className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          NSO BOARD OF DIRECTORS
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </>
  );
}
