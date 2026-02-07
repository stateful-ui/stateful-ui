import styles from "./Brand.module.css";

type BrandOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
  size?: "small" | "medium" | "large";
};

type BrandProps<E extends React.ElementType> = BrandOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof BrandOwnProps>;

const defaultElement = "div";

export default function Brand<
  E extends React.ElementType = typeof defaultElement,
>({ as, size, ...restProps }: BrandProps<E>) {
  const Component = as || defaultElement;
  return (
    <Component className={styles.Brand} data-size={size} {...restProps}>
      <div className={styles.BrandIcon} />
      Stateful UI
    </Component>
  );
}
