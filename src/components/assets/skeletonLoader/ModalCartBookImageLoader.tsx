import ContentLoader from "react-content-loader";

export function ModalCartBookImageLoader() {
  return (
    <ContentLoader
      speed={2}
      width={122}
      height={153}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="122" height="153" />
    </ContentLoader>
  );
}
