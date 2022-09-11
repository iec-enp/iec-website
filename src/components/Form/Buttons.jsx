const Button = ({ loading }) => {
  return (
    <button
      type='submit'
      className={`col-span-2 py-2 bg-iec-orange-2-500 rounded-md hover:bg-transparent hover:text-iec-orange-2-500 border-iec-orange-2-500 border-2 ${
        loading ? 'bg-iec-orange-2-300' : ''
      }`}>
      Envoyer
    </button>
  )
}

export default Button
