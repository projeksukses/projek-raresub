import Sidebar from "@/components/admin/Sidebar";
import { userData } from "@/mocks/userData";
import { LayoutDashboard, Users, Calendar, HelpCircle, Settings } from "lucide-react";




export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus = [
  { label: "Overview", icon: <LayoutDashboard size={20} />, href: "/admin/overview" },
  { label: "Analytics", icon: <Users size={20} />, href: "/admin/analytics" },
  { label: "Customers", icon: <Users size={20} />, href: "/admin/customers" },
  { label: "Calendar", icon: <Calendar size={20} />, href: "/admin/calendar" },
  { label: "Support", icon: <HelpCircle size={20} />, href: "/admin/support" },
  { label: "Settings", icon: <Settings size={20} />, href: "/admin/settings" },
];
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        user={userData}
        menus={menus}
      />
      {/* Main Content Area */}
      <div
        className={
          "flex-1 min-h-screen bg-white text-black container mx-auto pl-70 py-8 pr-6 transition-all duration-300"
        }
      >
        {children}
      </div>
    </div>
  );
}