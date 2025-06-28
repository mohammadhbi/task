import { InputHTMLAttributes, forwardRef } from 'react'
import styles from "../styles/input.module.scss";
type Props = InputHTMLAttributes<HTMLInputElement>

export const InputNum = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div>
      <label htmlFor="input"> Phone Number</label>  
    <input
      className={styles.input}
      type="number"
      placeholder="09120000000"
      ref={ref}
      {...props}
    />
    </div>
  )
})
