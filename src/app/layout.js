import {Inter} from "next/font/google";
import {Footer} from '@components/Footer';
import {Navbar} from "@components/Navbar";
import NextNProgressClient from '../components/NextNProgressClient';
import {ThemeContextProvider} from "@contexts/ThemeContext";
import {WriteContextProvider} from "@contexts/WriteContext";
import AuthProvider from "../provider/AuthProvider";
import {ThemeProvider} from "@provider/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diary Blog",
  description: "The best blog app!",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <WriteContextProvider>
              <ThemeProvider>
                <div className="container">
                  <div className="wrapper">
                    <NextNProgressClient/>
                    <Navbar />
                    {children}
                    <br />
                    <Footer />
                  </div>
                </div>
              </ThemeProvider>
            </WriteContextProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
