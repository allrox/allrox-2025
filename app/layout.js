import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"

export const metadata = {
  title: "AllRox • Tecnologia para Negócios",
  description: "Soluções personalizadas em tecnologia, transformação digital, desenvolvimento de Sites, Landing Pages, Design de UX, UI, Squads Ágeis e Projetos Personalizados.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-darkBackground pb-14">
        {children}
      </body>
    </html>
  );
}
