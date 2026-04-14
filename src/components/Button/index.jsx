import './button.style.css'

export function Button({children, ...otherProps}) {
  return (
    <button {...otherProps} className="button" type='submit'>
      {children}
    </button>
  ) 
}