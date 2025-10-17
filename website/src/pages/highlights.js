// src/pages/Highlights.js
import React from "react";
import Layout from "@theme/Layout";
import HighlightCard from "../components/HighlightsComponents/HighlightCard";
import styles from "./Highlights.module.css";

export default function Highlights() {
  return (
    <Layout title="Highlights">
      <main className={styles.highlightsPage}>
        <section className={styles.highlightsHeader}>
            <h1 className={styles.pageTitle}>Highlights</h1>
            <p className={styles.pageSubtitle}>
            Explore GBADs highlights including publications, presentations, and
            events where our work has been featured.
            </p>
        </section>
        <section className={styles.highlightsContent}>
          <HighlightCard />
        </section>
      </main>
    </Layout>
  );
}
