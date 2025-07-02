import React from "react";

export default function Section({id, title, children}) {
  return (
    <section id={id}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
