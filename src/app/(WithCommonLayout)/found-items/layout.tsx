export default function layout({
  children,
  posts,
}: {
  children: React.ReactNode;
  posts: React.ReactNode;
}) {
  return (
    <div className="">
      <h1>hi </h1>
      <main>{children}</main>
      <h1>{posts}</h1>
    </div>
  );
}
