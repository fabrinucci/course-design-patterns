import styled from 'styled-components';

interface Props {
  left: () => JSX.Element;
  right: () => JSX.Element;
}

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: 1;
`;

export const SplitScreen = ({ left: Left, right: Right }: Props) => {
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
};
