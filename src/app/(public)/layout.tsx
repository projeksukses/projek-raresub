import { Navbar } from "@/components/public";

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-primary">
        <Navbar />
        <main className="container mx-auto">
            {children}
        </main>
    </div>
  );
}