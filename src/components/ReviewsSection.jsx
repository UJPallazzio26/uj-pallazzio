import { useEffect } from "react";
import { motion } from "framer-motion";

const WIDGET_CLASS = "elfsight-app-dc9300db-19e8-4a9b-96cd-2a6f0ecc47b1";

/**
 * Scoped CSS overrides for the Elfsight Google Reviews widget.
 * All rules are prefixed with the unique widget class so they
 * never bleed into any other section of the site.
 *
 * Layout, filtering (4-5 ★), sorting, and max review count
 * must be configured once inside the Elfsight dashboard.
 */
const WIDGET_STYLES = `
  /* ── Section background ────────────────────────────────── */
  #reviews-section {
    background-color: #F59E0B;
  }

  /* ── Review card ────────────────────────────────────────── */
  .${WIDGET_CLASS} .eapps-google-reviews-review,
  .${WIDGET_CLASS} [class*="review-item"],
  .${WIDGET_CLASS} [class*="ReviewItem"],
  .${WIDGET_CLASS} [class*="review_item"] {
    background-color: #F59E0B !important;
    border-radius: 16px !important;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04) !important;
    border: none !important;
    transition: box-shadow 0.25s ease, transform 0.25s ease !important;
  }
  .${WIDGET_CLASS} .eapps-google-reviews-review:hover,
  .${WIDGET_CLASS} [class*="review-item"]:hover,
  .${WIDGET_CLASS} [class*="ReviewItem"]:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06) !important;
    transform: translateY(-3px) !important;
  }

  /* ── Star ratings — gold ────────────────────────────────── */
  .${WIDGET_CLASS} .eapps-google-reviews-review-rating svg,
  .${WIDGET_CLASS} .eapps-google-reviews-review-rating i,
  .${WIDGET_CLASS} .eapps-google-reviews-review-rating span,
  .${WIDGET_CLASS} [class*="rating"] svg,
  .${WIDGET_CLASS} [class*="Rating"] svg,
  .${WIDGET_CLASS} [class*="star"] svg,
  .${WIDGET_CLASS} [class*="Star"] svg {
    fill: #F59E0B !important;
    color: #F59E0B !important;
  }
  .${WIDGET_CLASS} [class*="star-fill"],
  .${WIDGET_CLASS} [class*="StarFill"],
  .${WIDGET_CLASS} [class*="rating-fill"],
  .${WIDGET_CLASS} [class*="RatingFill"] {
    background-color: #F59E0B !important;
    color: #F59E0B !important;
  }

  /* ── Review text ────────────────────────────────────────── */
  .${WIDGET_CLASS} .eapps-google-reviews-review-body,
  .${WIDGET_CLASS} .eapps-google-reviews-review-text,
  .${WIDGET_CLASS} [class*="review-text"],
  .${WIDGET_CLASS} [class*="ReviewText"],
  .${WIDGET_CLASS} [class*="review-body"],
  .${WIDGET_CLASS} [class*="ReviewBody"] {
    color: #6B7280 !important;
    text-align: center !important;
    line-height: 1.75 !important;
    font-size: 0.9rem !important;
  }

  /* ── Reviewer name ──────────────────────────────────────── */
  .${WIDGET_CLASS} .eapps-google-reviews-review-author-name,
  .${WIDGET_CLASS} [class*="author-name"],
  .${WIDGET_CLASS} [class*="AuthorName"],
  .${WIDGET_CLASS} [class*="reviewer-name"],
  .${WIDGET_CLASS} [class*="ReviewerName"] {
    color: #111827 !important;
    font-weight: 700 !important;
    text-align: center !important;
  }

  /* ── Reviewer location ──────────────────────────────────── */
  .${WIDGET_CLASS} .eapps-google-reviews-review-author-location,
  .${WIDGET_CLASS} [class*="author-location"],
  .${WIDGET_CLASS} [class*="AuthorLocation"],
  .${WIDGET_CLASS} [class*="reviewer-location"],
  .${WIDGET_CLASS} [class*="location"] {
    color: #9CA3AF !important;
    text-align: center !important;
    font-size: 0.8rem !important;
  }

  /* ── Hide profile/avatar image ──────────────────────────── */
  .${WIDGET_CLASS} .eapps-google-reviews-review-author-image,
  .${WIDGET_CLASS} .eapps-google-reviews-review-author-avatar,
  .${WIDGET_CLASS} [class*="author-image"],
  .${WIDGET_CLASS} [class*="AuthorImage"],
  .${WIDGET_CLASS} [class*="author-avatar"],
  .${WIDGET_CLASS} [class*="AuthorAvatar"],
  .${WIDGET_CLASS} [class*="reviewer-image"],
  .${WIDGET_CLASS} [class*="ReviewerImage"],
  .${WIDGET_CLASS} [class*="avatar"],
  .${WIDGET_CLASS} [class*="Avatar"] {
    display: none !important;
  }

  /* ── Author info centering (after avatar removed) ───────── */
  .${WIDGET_CLASS} .eapps-google-reviews-review-author,
  .${WIDGET_CLASS} [class*="review-author"],
  .${WIDGET_CLASS} [class*="ReviewAuthor"],
  .${WIDGET_CLASS} [class*="reviewer-info"],
  .${WIDGET_CLASS} [class*="ReviewerInfo"] {
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column !important;
    text-align: center !important;
    gap: 0.25rem !important;
  }

  /* ── Slider / dot navigation ────────────────────────────── */
  .${WIDGET_CLASS} [class*="dot"],
  .${WIDGET_CLASS} [class*="Dot"] {
    background-color: rgba(245, 158, 11, 0.35) !important;
    border-radius: 50% !important;
  }
  .${WIDGET_CLASS} [class*="dot-active"],
  .${WIDGET_CLASS} [class*="DotActive"],
  .${WIDGET_CLASS} [class*="dot--active"],
  .${WIDGET_CLASS} [class*="active"][class*="dot"] {
    background-color: #F59E0B !important;
  }

  /* ── Navigation arrows ──────────────────────────────────── */
  .${WIDGET_CLASS} [class*="arrow"],
  .${WIDGET_CLASS} [class*="Arrow"],
  .${WIDGET_CLASS} [class*="prev"],
  .${WIDGET_CLASS} [class*="Prev"],
  .${WIDGET_CLASS} [class*="next"],
  .${WIDGET_CLASS} [class*="Next"] {
    color: #F59E0B !important;
    border-color: rgba(245, 158, 11, 0.45) !important;
    background-color: #FFFFFF !important;
    border-radius: 50% !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
  }
  .${WIDGET_CLASS} [class*="arrow"] svg,
  .${WIDGET_CLASS} [class*="Arrow"] svg {
    fill: #F59E0B !important;
    stroke: #F59E0B !important;
  }

  /* ── Overall widget padding/spacing ─────────────────────── */
  .${WIDGET_CLASS} .eapps-google-reviews,
  .${WIDGET_CLASS} [class*="eapps-google-reviews"] {
    background: transparent !important;
    padding: 0 !important;
  }

  /* ── Remove any Elfsight branding footer ────────────────── */
  .${WIDGET_CLASS} .eapps-widget-show-more-button,
  .${WIDGET_CLASS} [class*="show-more"],
  .${WIDGET_CLASS} [class*="ShowMore"],
  .${WIDGET_CLASS} .eapps-link {
    display: none !important;
  }
`;

const ReviewsSection = () => {
  useEffect(() => {
    // If Elfsight platform is already loaded, re-init to pick up
    // any dynamically mounted widgets.
    if (window.eapps && typeof window.eapps.reload === "function") {
      window.eapps.reload();
    }
  }, []);

  return (
    <section
      id="reviews-section"
      style={{ backgroundColor: "#ffff", padding: "5rem 0" }}
    >
      {/* Inject scoped styles */}
      <style>{WIDGET_STYLES}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#111827",
              fontFamily: "'Poppins', sans-serif",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            Guest Reviews
          </h2>

          {/* Gold underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.18 }}
            style={{
              height: "3px",
              width: "56px",
              backgroundColor: "#F59E0B",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </motion.div>

        {/* Elfsight widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div
            className={WIDGET_CLASS}
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
