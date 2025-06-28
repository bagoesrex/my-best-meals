import "./globals.css";

export const metadata = {
  title: "My Best Meals",
  description: "A collection of my favorite meals made with love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased flex justify-center items-center h-screen`}>
        {children}
      </body>
    </html>
  );
}
