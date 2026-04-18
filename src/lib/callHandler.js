const PHONE = "919361677996";
const PHONE_TEL = "+919361677996";

/**
 * Unified call-icon click handler.
 *
 * Mobile  (≤ 768 px) → tel: (native dialler, unchanged)
 * Desktop (> 768 px) → tries WhatsApp desktop app via deep-link;
 *                       falls back to WhatsApp Web after 1.5 s if the
 *                       app did not steal window focus.
 */
export function handleCallClick() {
  if (window.innerWidth <= 768) {
    window.location.href = `tel:${PHONE_TEL}`;
    return;
  }

  // Desktop: attempt deep-link to WhatsApp Desktop
  const deepLink = `whatsapp://send?phone=${PHONE}`;
  const webFallback = `https://wa.me/${PHONE}`;

  let appOpened = false;

  const onBlur = () => {
    // Window lost focus → native app captured the link
    appOpened = true;
  };
  window.addEventListener("blur", onBlur, { once: true });

  window.location.href = deepLink;

  setTimeout(() => {
    window.removeEventListener("blur", onBlur);
    if (!appOpened) {
      // App not installed / didn't open → fall back to WhatsApp Web
      window.open(webFallback, "_blank");
    }
  }, 1500);
}
