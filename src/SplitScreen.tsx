import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode[];
  leftWeight?: number;
  rightWeight?: number;
}

interface SCProps {
  weight: number;
}

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div<SCProps>`
  flex: ${(props) => props.weight};
`;

export const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: Props) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};
