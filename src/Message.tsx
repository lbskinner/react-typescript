import React from "react";

// when you don't specific the type for a function
// typescript interpret it as any type
// can also define the type (props: { message: string }): any
const Message = (props: { message: string }) => {
  return <p>{props.message}</p>;
};

export default Message;
