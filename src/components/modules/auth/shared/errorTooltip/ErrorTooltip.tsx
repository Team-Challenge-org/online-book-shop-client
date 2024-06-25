import styles from "./errorTooltip.module.scss";

export function ErrorTooltip({
  errorTips,
}: {
  errorTips: string[] | undefined;
}) {
  return (
    <ul className={styles.container}>
      {errorTips?.map((tip) => (
        <li key={tip} className={styles.tip_message}>
          <span>●</span>

          <p>{tip}</p>
        </li>
      ))}
    </ul>
  );
}
