import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export default function PlainButton(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <div
      className={
        "border-gray-200 bg-white border py-2 px-3 rounded-xl transition duration-75 " +
        (props.disabled ? "" : " hover:border-gray-400 active:bg-gray-400")
      }
      onClick={props.disabled ? undefined : props.onClick}
    >
      {props.children}
    </div>
  );
}
