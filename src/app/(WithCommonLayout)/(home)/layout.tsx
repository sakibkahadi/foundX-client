import { ReactNode } from "react";

export default function layout({
  children,
  recentPosts,
}: {
  children: ReactNode;
  recentPosts: ReactNode;
}) {
  return (
    <div>
      {children}
      {recentPosts}
    </div>
  );
}
