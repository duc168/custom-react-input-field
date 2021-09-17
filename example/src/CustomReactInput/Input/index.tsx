import React, { useState } from 'react'
import classnames from 'classnames'
import IconEyeSlash from './Icons/EyeSlash'
import IconEye from './Icons/Eye'
import styles from './styles.module.scss'

type BaseProps = Omit<
  | React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  | React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  'value' | 'type' | 'onKeyDown' | 'onKeyUp' | 'onKeyPress' | 'onChange' | 'onFocus' | 'onBlur' | 'label' | 'rows'
>

type InputFieldProps = BaseProps & {
  label?: string
  placeholder?: string
  type?: string
  rows?: number
  disabled?: boolean
  required?: boolean
  readOnly?: boolean
  className?: string
  name?: string
  onChange?: (event: any) => void
  value?: string | number
  containerClassName?: string
  labelStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
  textareaStyle?: React.CSSProperties
} & {
  onKeyDown?: (event: any) => void
  onKeyPress?: (event: any) => void
  onKeyUp?: (event: any) => void
  onFocus?: (event: any) => void
  onBlur?: (event: any) => void
  onClickContainer?: (event: React.MouseEvent<HTMLElement>) => void
  icon?: React.ReactNode
}

const InputField: React.ForwardRefRenderFunction<unknown, InputFieldProps> = (allProps, ref) => {
  const {
    label,
    placeholder,
    type = 'text',
    rows = 1,
    onChange,
    value,
    disabled,
    required,
    readOnly,
    className,
    name,
    onClickContainer,
    icon,
    containerClassName,
    labelStyle,
    inputStyle,
    textareaStyle,
    ...props
  } = allProps
  const elementRef = (ref as any) || React.createRef<HTMLElement>()

  const [isFocusing, setIsFocusing] = useState(false)
  const [isShowingPassword, setIsShowingPassword] = useState(false)

  const onFocus = (event: any) => {
    setIsFocusing(true)
    if (typeof props.onFocus === 'function') {
      props.onFocus(event)
    }
  }

  const onBlur = (event: any) => {
    setIsFocusing(false)
    if (typeof props.onBlur === 'function') {
      props.onBlur(event)
    }
  }

  const renderIconComponent = () => {
    if (icon) {
      return icon
    }

    if (type === 'password') {
      const IconComp = isShowingPassword ? IconEyeSlash : IconEye
      return (
        <IconComp
          className={styles.iconPassword}
          width={14}
          height={14}
          onMouseUp={() => setIsShowingPassword(false)}
          onMouseDown={() => setIsShowingPassword(true)}
          onTouchStart={() => setIsShowingPassword(true)}
          onTouchEnd={() => setIsShowingPassword(false)}
        />
      )
    }

    return null
  }
  const currentValue = value?.toString() ?? ""
  return (
    <label
      className={classnames([
        styles.container,
        disabled ? styles.isDisabled : '',
        currentValue.length > 0 ? styles.hasValue : '',
        readOnly ? styles.isReadOnly : '',
        isFocusing ? styles.isFocus : '',
        rows > 1 ? styles.isTextArea : '',
        className,
        containerClassName ?? '',
      ])}
      onClick={onClickContainer}
      htmlFor={name}
    >
      <div className={`${styles.label}`} style={labelStyle}>
        {label} {required && <span className={styles.required}>*</span>}
        </div>

      {rows === 1 ? (
        <input
          {...(props as React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>)}
          ref={elementRef}
          placeholder={''}
          type={isShowingPassword ? 'text' : type}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={name}
          readOnly={readOnly}
          disabled={disabled}
          className={`${styles.input}`}
          style={inputStyle}
        />
      ) : (
        <textarea
          {...(props as React.DetailedHTMLProps<
            React.TextareaHTMLAttributes<HTMLTextAreaElement>,
            HTMLTextAreaElement
          >)}
          ref={elementRef}
          name={name}
          placeholder={''}
          rows={rows}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
          className={`${styles.textarea}`}
          style={textareaStyle}
        />
      )}
      {renderIconComponent()}
    </label>
  )
}

export default React.forwardRef<unknown, InputFieldProps>(InputField)
