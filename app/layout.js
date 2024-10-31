import "./globals.css";

export const metadata = {
  title: "AllRox",
  description: "Tecnologia, Marketing e Negócios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
