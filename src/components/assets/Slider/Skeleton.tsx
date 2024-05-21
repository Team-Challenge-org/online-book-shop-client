import ContentLoader from 'react-content-loader';

const SkeletonSlider: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={1440}
    height={704}
    viewBox="0 0 1440 704"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="0" ry="0" width="1440" height="560" />
    <rect x="621" y="632" rx="0" ry="0" width="198" height="48" />
    <rect x="398" y="584" rx="5" ry="5" width="644" height="32" />
  </ContentLoader>
);

export default SkeletonSlider;
