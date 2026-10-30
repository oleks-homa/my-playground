export default function F1Layout({ children }: LayoutProps<'/'>) {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1">{children}</main>
    </div>
  );
}
