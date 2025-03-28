import { classNames } from "../helpers/dom";

export function Button({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classNames(
        "px-4 py-2 shadow hover:shadow-md rounded-md",
        className
      )}
      {...rest}
    />
  );
}
