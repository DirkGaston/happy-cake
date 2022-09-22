export default function Container({ children }) {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-168px)]">
      {children}
    </div>
  );
}
