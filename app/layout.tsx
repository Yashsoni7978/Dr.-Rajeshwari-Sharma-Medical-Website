import type { Metadata } from "next";
import { Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Rajeshwari Sharma | Senior Consultant Physician in Jaipur (Internal Medicine)",
  description: "Dr. Rajeshwari Sharma (MD, FICP, FACP) is a leading Senior Consultant Physician in Jaipur, specializing in Diabetes Management, Hypertension, Thyroid Disorders, Geriatric Care, and Preventive Internal Medicine.",
  keywords: [
    "Dr Rajeshwari Sharma",
    "Internal Medicine Doctor Jaipur",
    "Physician in Jaipur",
    "Diabetes Specialist Jaipur",
    "Best General Physician Malviya Nagar Jaipur",
    "Hypertension Specialist Jaipur",
    "Preventive Health Checkup Jaipur"
  ],
  authors: [{ name: "Siyara Innovations", url: "https://siyarainnovations.com" }],
  openGraph: {
    title: "Dr. Rajeshwari Sharma | Senior Consultant Physician, Jaipur",
    description: "Expert, compassionate internal medicine & preventive primary healthcare in Jaipur. Over 18+ years of clinical excellence.",
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Rajeshwari Sharma Practice",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${sourceSans.variable}`}>
      <body className="bg-ivory text-slateBlue-900 antialiased min-h-screen flex flex-col font-body">
        {children}
      </body>
    </html>
  );
}
