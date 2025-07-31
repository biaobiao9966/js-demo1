export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <h2>我是根</h2>
      {children}
    </html>
  );
}
