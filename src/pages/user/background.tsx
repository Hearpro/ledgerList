import Container from '@/components/container/index';

interface Props {
  children?: React.ReactNode;
  customStyle: Record<string, any>;
}
const Background: React.FC<Props> = ({ children, customStyle = {} }) => {
  return (
    <Container customer-style={{ backgroundImage: 'linear-gradient(to bottom, #4571db 30%,#f5f5f5, 30.2%,#f5f5f5 100%)', ...customStyle }}>
      {children}
    </Container>
  );
};

export default Background;
