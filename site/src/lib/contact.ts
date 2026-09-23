export type ContactChannel = {
  label: string;
  href: string | null;
  isConfigured: boolean;
};

export function createWhatsappChannel(phoneNumber?: string): ContactChannel {
  if (!phoneNumber) {
    return {
      label: "WhatsApp aguardando confirmação",
      href: null,
      isConfigured: false,
    };
  }

  const digits = phoneNumber.replace(/\D/g, "");

  return {
    label: "WhatsApp",
    href: `https://wa.me/${digits}`,
    isConfigured: true,
  };
}
