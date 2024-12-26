import NavbarComp from "@/components/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      {/* Navbar Component */}
      <NavbarComp />

      {/* Main content area */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
