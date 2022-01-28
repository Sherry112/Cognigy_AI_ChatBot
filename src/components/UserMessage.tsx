import React from "react";
type Props = {
  text: string
}
export default function UserMessage({ text }: Props) {
  return (
    <div className="message-container">
      <div className="user-message">{text}</div>
    </div>
  );
}
