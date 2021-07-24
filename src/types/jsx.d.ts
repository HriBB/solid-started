import { AttributifyAttributes } from 'windicss/types/jsx'

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}