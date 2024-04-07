import styled from 'styled-components';

export const SuccessWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${(p) => p.theme.colors.wine};
  border-radius: 0.375rem;
  padding: 1rem;
  font-family: ${(p) => p.theme.fonts.sans};
  color: ${(p) => p.theme.colors.black};
  font-style: italic;
`;

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border: 1px solid ${(p) => p.theme.colors.wine};
  border-radius: 0.375rem;
  padding: 1rem;
`;

export const Title = styled.h4`
  color: ${(p) => p.theme.colors.black};
  font-size: 1.25rem;
  letter-spacing: 0.03em;
  font-weight: 700;
`;

export const Label = styled.label`
  font-family: ${(p) => p.theme.fonts.sans};
  display: flex;
  flex-direction: column;
  row-gap: 0.375rem;

  span {
    letter-spacing: 0.02rem;
  }
`;

export const Input = styled.input`
  font-family: ${(p) => p.theme.fonts.sans};
  color: ${(p) => p.theme.colors.black};
  border: 1px solid #333;
  font-size: 1rem;
  letter-spacing: 0.02em;
  font-weight: 400;
  outline: none;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;

  &:focus {
    border-color: ${(p) => p.theme.colors.wine};
  }
`;

export const TextArea = styled.textarea`
  font-family: ${(p) => p.theme.fonts.sans};
  color: ${(p) => p.theme.colors.black};
  border: 1px solid #333;
  font-size: 1rem;
  letter-spacing: 0.02em;
  font-weight: 400;
  outline: none;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;

  &:focus {
    border-color: ${(p) => p.theme.colors.wine};
  }
`;

export const SubmitButton = styled.button`
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 1rem;
  background-color: ${(p) => p.theme.colors.wine};
  color: ${(p) => p.theme.colors.white};
  border: 0;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;

  &:hover {
    text-decoration: underline;
  }
`;
