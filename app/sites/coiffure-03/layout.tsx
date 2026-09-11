import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { FormFooter } from "@/src/templates/coiffure-03/components/FormFooter";
import { FormHeader } from "@/src/templates/coiffure-03/components/FormHeader";
import { formStudioThemeStyle } from "@/src/templates/coiffure-03/lib/theme";
import { formStudioSite } from "@/src/templates/coiffure-03/src/data/site";
import "@/src/templates/coiffure-03/styles/form-studio.css";

const formSans = Inter({
  subsets: ["latin"],
  variable: "--font-form",
  display: "swap",
});

export const metadata: Metadata = {
  title: formStudioSite.seo.title,
  description: formStudioSite.seo.description,
  robots: { index: false, follow: true },
};

export default function FormStudioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`form-studio-site ${formSans.variable}`} style={formStudioThemeStyle}>
      <FormHeader />
      <main>{children}</main>
      <FormFooter />
    </div>
  );
}
