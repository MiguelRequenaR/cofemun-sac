
export default function WhatsAppButton() {

  const phone = '51981067345'
  const defaultMessage = 'Hola, me interesan sus servicios'
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMessage}`

  const handleClick = () => {
    window.open(whatsappUrl, '_blank')

  }
  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-6 right-6 z-50
        bg-[#25D366] hover:bg-[#20BA5A]
        text-white
        rounded-full
        p-4
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:scale-110
        group
        flex items-center justify-center
        w-16 h-16
        md:w-20 md:h-20 cursor-pointer
      "
      aria-label="Contactar por WhatsApp"
    >
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Fimages%2Flarge%2F2x%2Fwhatsapp-logo-transparent.png&f=1&nofb=1&ipt=32eb3e8172bbbb98c5d7c8f98ec1f90a42bc584c442a0590604141610897af63" alt="WhatsApp" className="w-10 h-10 object-cover" />
      
      <span className="
        absolute right-full mr-3
        bg-gray-900 text-white text-sm
        px-3 py-2 rounded-lg
        whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
        hidden md:block
      ">
        ¡Escríbenos!
      </span>
    </button>
  )
}
