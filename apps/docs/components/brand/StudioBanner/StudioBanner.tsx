import styles from "./StudioBanner.module.css";

export default function StudioBanner() {
  return (
    <div className={`${styles.StudioBanner} container-padded`}>
      <span>
        Made by{" "}
        <a href="https://humaninterface.studio" rel="noopener noreferrer">
          Human Interface Studio<sup>&reg;</sup>
        </a>
      </span>
    </div>
  );
}
