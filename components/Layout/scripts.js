export const materialize = ({ textFields, textButtons, containedButtons  } = {}) => `
const materializeTextFields = selector => {
  if (selector) {
    const focusedClassName = 'Mui-focused'
    const errorClassName = 'Mui-error'
    const labelShrinkClassName = 'MuiInputLabel-shrink'
    const labelFilledClassName = 'MuiFormLabel-filled'
    const labelFocusedClasses = [labelShrinkClassName, focusedClassName]
    const rootFocusedClasses = [focusedClassName]
    const labelFilledClasses = [labelFilledClassName, labelShrinkClassName]
    const labelErrorClasses = [errorClassName]
    const rootErrorClasses = [errorClassName]
    const inputs = document.querySelectorAll(selector).forEach(input => {
      console.log(input.value)
      const control = input.parentNode
      const root = document.createElement('div')
      const label = control.querySelector('label') || document.createElement('label')
      const error = control.querySelector('.error.itemLevel p') || control.querySelector('.error.itemLevel')
      const inputError = document.createElement('p')

      control.classList.add('MuiFormControl-root', 'MuiTextField-root', 'materializedInput')
      root.className = 'MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl'
      input.classList.add('MuiInputBase-input', 'MuiInput-input')
      input.setAttribute('placeholder', '')
      label.classList.add('MuiFormLabel-root', 'MuiInputLabel-root', 'MuiInputLabel-formControl', 'MuiInputLabel-animated')
      inputError.className = 'MuiFormHelperText-root Mui-error MuiFormHelperText-filled'
  
      control.insertBefore(label, input)
      control.insertBefore(root, input)
      root.appendChild(error)
      root.appendChild(input)
      control.appendChild(inputError)

      input.addEventListener('focusin', () => {
        root.classList.add(...rootFocusedClasses)
        label.classList.add(...labelFocusedClasses)
      })
      input.addEventListener('focusout', () => {
        root.classList.remove(focusedClassName)
        label.classList.remove(focusedClassName)
        if (!input.value) {
          label.classList.remove(labelShrinkClassName)
        }
      })
      input.addEventListener('keyup', (e) => {
        console.log('keyup', input.value, e.target.value)
        if (input.value) {
          label.classList.add(...labelFilledClasses)
        } else {
          label.classList.remove(labelFilledClassName)
        }
      })
      const onErrorChange = () => {
        inputError.innerHTML = error.innerHTML
        if (error.innerHTML) {
          label.classList.add(...labelErrorClasses)
          root.classList.add(...rootErrorClasses)
        } else {
          label.classList.remove(...labelErrorClasses)
          root.classList.remove(...rootErrorClasses)
        }
      }
      const errorObserver = new MutationObserver(onErrorChange)
      errorObserver.observe(error, { childList: true })
    })

    return inputs
  }
}

const materializeTextButtons = selector => {
  if (selector) {
    const buttons = document.querySelectorAll(selector)
    buttons.forEach(button => {
      const label = document.createElement('span')

      label.className = 'MuiButton-label'
      button.classList.add('MuiButtonBase-root', 'MuiButton-root', 'MuiButton-text', 'MuiButton-textPrimary', 'MuiButton-textSizeLarge', 'MuiButton-sizeLarge')
    })

    return buttons
  }
}

const materializeContainedButtons = selector => {
  if (selector) {
    const buttons = document.querySelectorAll(selector)
    buttons.forEach(button => {
      const label = document.createElement('span')

      label.className = 'MuiButton-label'
      button.classList.add('MuiButtonBase-root', 'MuiButton-root', 'MuiButton-containedPrimary', 'MuiButton-contained')
    })

    return buttons
  }
}

materializeTextButtons('${textButtons}')
materializeContainedButtons('${containedButtons}')
materializeTextFields('${textFields}')
`

const commonScript = `
const cancelButton = document.querySelector('#cancel')
const goBack = () => (cancelButton ? cancelButton.click() : history.back())
document.querySelector('#backButton').addEventListener('click', goBack)
document.querySelector('#logo').addEventListener('click', goBack)
`

export default commonScript
