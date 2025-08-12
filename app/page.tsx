import Image from "next/image"
let Home = () =>{
  return(
    <>
    <PartnersSection/>

    </>
  )
}

let PartnersSection = ()=>{
    let PartnerList = [
        {
            name: "Nurturing Stars Organization",
            logo: "https://i.ibb.co/LdCPvJhJ/nso3.jpg",
            link: "#"
        },
        // Add more partners here as needed
    ];
    
    // This component can be used to display partners or sponsors
    // It can be customized to include more logos or links
    // For now, it will just display a single logo as an example
    return (
        
        <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Our Partners6
            </h2>
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
                <Image src={"https://i.ibb.co/LdCPvJhJ/nso3.jpg"} width={300} height={100} alt="Partner Logo"></Image>
            </a>
            </div>
        </div>
        </section>
    )
}
export default Home

