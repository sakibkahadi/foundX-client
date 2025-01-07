export default function page() {
  return (
    <div>
      <h1>This is a test page</h1>

      <div className="h-96 border bg-yellow-600 rounded-lg">
        static contennt
      </div>
      <div className="h-96 border bg-blue-600 rounded-lg">dynamic content</div>
    </div>
  );
}
