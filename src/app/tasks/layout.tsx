import Navbar from "@/components/Navbar/Navbar";

export default function TaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
