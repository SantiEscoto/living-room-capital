import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { WhatsAppButton } from "./whatsapp-button";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
