const Input = ({ type, placeholder, Icon, name }) => {
  return (
    <div className='bg-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-4'>
      {Icon}
      <input
        name={name}
        type={type}
        className='ring-0 outline-none bg-transparent'
        placeholder={placeholder}
        required
      />
    </div>
  )
}

export default Input
