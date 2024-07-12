import { Inter } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Providers from "@/components/Providers";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Rental",
  description: "Clark Cars Rental Philippines",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
