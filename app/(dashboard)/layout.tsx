import Navbar from "@/components/navbar"
import { Sidebar } from "@/components/sidebar";

const DashboardLayout = ({children} :{children : React.ReactNode}) => {
  return (
    <div className="h-full relative ">
      <div className="hidden md:flex h-full md:flex-col md:inset-y-0 z-[80] bg-gray-900 md:fixed md:w-72">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout