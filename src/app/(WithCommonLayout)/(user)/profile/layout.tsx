import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {" "}
      <h1>This is user layout</h1> {children}
    </div>
  );
}
