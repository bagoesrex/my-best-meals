import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "My Best Meals",
  description: "A collection of my favorite meals made with love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
