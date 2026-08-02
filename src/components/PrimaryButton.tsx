function PrimaryButton(props) {
  return (
    <button className={`bg-blue-500 hover:bg-white hover:text-blue-500 py-2 px-4 border border-blue-500 hover:underline ${props.className}`} type={props.type}>
          {props.text}
    </button>
  )
}
export default PrimaryButton