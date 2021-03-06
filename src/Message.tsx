import React from "react";
import messageHoc from "./Hoc";

// defined the types for the props
// interface UserMessage {
//   name: string;
//   message: string;
// }

// when you don't specific the type for a function
// typescript interpret it as any type
// can also define the type (props: { message: string }): any
// const Message = (props: UserMessage) => {
//   return (
//     <p>
//       {props.name}, {props.message}
//     </p>
//   );
// };

const example = (props: any): any => (
  <p>
    {props.name}, {props.message}
  </p>
);

const Message = messageHoc(example);

export default Message;
