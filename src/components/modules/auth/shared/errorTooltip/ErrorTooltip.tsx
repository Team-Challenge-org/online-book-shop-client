import styles from "./errorTooltip.module.scss";

type TErrorTooltipTypes = {
  errorTips: string[] | undefined;
  addListStyle: boolean;
  isWeakPass?: boolean;
  tooltipType?: "passwordTooltip" | "commonTooltip";
};

export function ErrorTooltip({
  errorTips,
  addListStyle,
  isWeakPass,
  tooltipType,
}: TErrorTooltipTypes) {
  let tooltipTypeStyle;

  if (tooltipType === "commonTooltip") tooltipTypeStyle = styles.common_tooltip;

  if (tooltipType === "passwordTooltip" && isWeakPass) {
    tooltipTypeStyle = styles.weak_container;
  }

  if (tooltipType === "passwordTooltip" && !isWeakPass)
    tooltipTypeStyle = styles.medium_container;

  return (
    <ul className={tooltipTypeStyle}>
      {errorTips?.map((tip) => (
        <li key={tip} className={styles.tip_message}>
          {addListStyle && <span>●</span>}

          <p>{tip}</p>
        </li>
      ))}
    </ul>
  );
}
