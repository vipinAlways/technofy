export default function Loading() {
  return (
   <div className="h-screen md:max-w-7xl  lg:px-0 px-6 w-full ">
     <div className="inset-0 flex items-center justify-center bg-background z-50">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
   </div>
  );
}
