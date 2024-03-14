function PagesLayout ({ children }) {
  return(
    <div className="flex flex-col items-center mt-20 bg-black/5">
      {children}
    </div>
  );
}

export { PagesLayout };