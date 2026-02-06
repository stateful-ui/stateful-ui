import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
} from "@base-ui/react";
import styles from "./Button.module.css";

export type ButtonProps = BaseButtonProps;

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={`${styles.Button}${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
}
