import Image from 'next/image'
const EventCard = () => {
    return (
        <div className="max-w-10xl mx-auto p-4">
          {/* Para escritorio */}
          <div className="hidden md:flex items-center space-x-20 bg-white border border-gray-300 rounded-lg p-4 shadow-md">
            <div className="flex items-center space-x-20">
              <h2 className="text-2xl font-bold text-custom-blue">Nombre del evento</h2>
              <p className="text-black">29 Agosto 2024 · 17:00 - 18:30</p>
              <p className="text-black font-bold">Nombre del expositor</p>
              <button className="bg-custom-orange text-white w-[134px] h-[29px] rounded-full">Publicado</button>
            </div>
            <div className="flex items-center space-x-4">
             
              <button >
                <Image
                    src="/icons/Group 15.svg" // Ruta al icono
                    alt="Pencil icon" // Descripción del icono
                    width={53} 
                    height={40}
  />
                 </button>
              <button>
              <Image
                    src="/icons/Group 14.svg"
                    alt="Pencil icon"
                    width={53}
                    height={40}
  />
              </button>
            </div>
          </div>
    
          {/* Para móvil */}
          <div className="md:hidden flex space-x-6 bg-white border border-gray-300 rounded-lg p-4 shadow-md">
            <div className="flex justify-between flex-col">
            <h2 className="text-xl font-semibold text-custom-blue pb-2 pt-2">Nombre del evento</h2>
            <div className='flex justify-between space-x-4'>
            <p className="text-black text-sm ">29 Agosto 2024</p>
            <p className="text-black text-sm ">17:00 - 18:30</p>
            </div>
            
            <p className="text-black font-bold pb-4">Nombre del expositor</p>
            <button className="bg-custom-orange text-white w-[134px] h-[29px] rounded-full">Publicado</button>
    
            </div>
           
            <div className="flex flex-col space-y-2 ">
              <button >
                <Image
                    src="/icons/Group 15.svg"
                    alt="Pencil icon"
                    width={53} 
                    height={40} />
                 </button>
              <button>
              <Image
                    src="/icons/Group 14.svg"
                    alt="Pencil icon"
                    width={53}
                    height={40}/>
              </button>
              </div>
          </div>
        </div>
      );
};

export default EventCard;