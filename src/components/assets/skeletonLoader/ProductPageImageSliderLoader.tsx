import ContentLoader from "react-content-loader";

export function ProductPageImageSliderLoader() {
  return (
    <ContentLoader
      speed={2}
      width={510}
      height={640}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="510" height="640" />
    </ContentLoader>
  );
}
