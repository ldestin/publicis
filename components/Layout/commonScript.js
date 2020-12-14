export const generateScript = ({ inputs }) => `
const materialize = (selector) => {
  if (selector) {
    const inputs = document.querySelectorAll(selector).forEach(input => {
      const control = input.parentNode
      const root = document.createElement('div')
      const label = control.querySelector('label') || document.createElement('label')
      control.classList.add('MuiFormControl-root', 'MuiTextField-root')
      root.className = 'MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl'
      control.insertBefore(label, input)
      control.insertBefore(root, input)
      input.classList.add('MuiInputBase-input', 'MuiInput-input')
      input.setAttribute('placeholder', '')
      label.classList.add('MuiFormLabel-root', 'MuiInputLabel-root', 'MuiInputLabel-formControl', 'MuiInputLabel-animated')

      root.appendChild(input)
    })
  }
}

materialize('${inputs}')
`
