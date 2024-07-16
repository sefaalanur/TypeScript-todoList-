import React from "react";

export const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
        {props.items.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
  )
}
