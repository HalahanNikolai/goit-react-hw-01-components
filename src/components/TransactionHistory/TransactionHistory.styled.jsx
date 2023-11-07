
// import styled from '@emotion/styled';


// export const BaseTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;

//   background-color: ${({ theme2 }) => theme2.colors.white};
//   text-align: center;

//   box-shadow: ${({ theme2 }) => theme2.shadows.small};
// `;

// export const THead = styled.thead`
//  color: ${({ theme2 }) => theme2.colors.white};
//   background-color: ${({ theme2 }) => theme2.colors.accent};
//   text-transform: uppercase;
// `;

// export const Td = styled.td`
//   padding: 10px;
//   border: 1px solid ${({ theme2 }) => theme2.colors.gray};
//   color: ${({ theme2 }) => theme2.colors.dark};
// `;

// export const Th = styled.th`
// padding: 10px;
//   border: 1px solid ${({ theme2 }) => theme2.colors.gray};
//   color: ${({ theme2 }) => theme2.colors.white};
// `;

// export const Tr = styled.tr`
//  &:nth-of-type(odd) {
//     background-color: ${({ theme2 }) => theme2.colors.light};
//   }
// `;
// todo **************************************************************************

import styled from 'styled-components';

export const BaseTable = styled.table`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
 
  max-width: 90%;
  width: 90%;
  border-radius: ${props => props.theme.radii.medium};
  box-shadow: -0.0625rem -0.0625rem 0.0625rem #fff,
    0.0625rem 0.0625rem 0.0625rem #babecc;
`;

export const THead = styled.thead`
  border-radius: ${props => props.theme.radii.medium};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.accent};
  text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
   background-color: rgb(92, 182, 174);
-webkit-box-shadow: 0 6px 6px -6px #0E1119;
     -moz-box-shadow: 0 6px 6px -6px #0E1119;
          box-shadow: 0 6px 6px -6px #0E1119;
           color: #ffffff;
    text-shadow: .0625rem .0625rem .0625rem #400075;}
`;

// export const ExtendedTr = styled(Tr)`
//   background-color: ${props =>
//     props.indx % 2 === 0 ? props.theme.colors.muted : 'transparent'};
// `;

export const Th = styled.th`
  padding: 0.5rem 0;
  padding-left: ${props => props.theme.space[4]}px;
  text-align: left;
`;

// export const Tb = styled.tbody`
//   background-color: ${props => props.theme.colors.white};
// `;

export const Td = styled.td`
  padding-left: ${props => props.theme.space[4]}px;
  border-right: 0.125rem solid #e9edff;
`;

// export const Type = styled(Td)`
//   text-transform: capitalize;
// `;


