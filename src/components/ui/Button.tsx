import { classNames } from "../../helpers/dom";

export function Button({ as, className, ...rest }: ButtonProps) {
  const classname = classNames(
    "px-4 py-2 shadow hover:shadow-md rounded-md",
    className
  );
  return as == "label" ? (
    <label className={classname} {...rest} />
  ) : as == "link" ? (
    <a className={classname} {...rest} />
  ) : (
    <button className={classname} {...rest} />
  );
}

export type BtnAllProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.LabelHTMLAttributes<HTMLLabelElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>

interface ButtonProps extends BtnAllProps {
  as?: "link" | "label" | "button";
}
