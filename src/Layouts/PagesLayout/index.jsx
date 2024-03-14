import './index.css';
function PagesLayout ({ children }) {
  return(
    <div className="store-layout flex flex-col items-center mt-20 pb-5 bg-purple-50">
      {children}
    </div>
  );
}

export { PagesLayout };