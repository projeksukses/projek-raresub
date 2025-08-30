import { Navbar } from "@/components/public";

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar />
        <main className="container mx-auto">
            {children}
        </main>
    </>
  );
}