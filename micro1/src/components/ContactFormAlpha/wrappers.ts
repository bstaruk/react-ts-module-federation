import styled from 'styled-components';

export const SuccessWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 2px solid ${(p) => p.theme.colors.red};
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
  border: 2px solid ${(p) => p.theme.colors.red};
  border-radius: 0.375rem;
  padding: 1rem;
`;

export const Title = styled.h4`
  font-family: ${(p) => p.theme.fonts.serif};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.black};
`;

export const Label = styled.label`
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  row-gap: 0.375rem;
`;

export const Input = styled.input`
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 1rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.black};
  border: 1px solid #333;
  outline: none;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;

  &:focus {
    border-color: ${(p) => p.theme.colors.red};
  }
`;

export const TextArea = styled.textarea`
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 1rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.black};
  border: 1px solid #333;
  outline: none;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;

  &:focus {
    border-color: ${(p) => p.theme.colors.red};
  }
`;

export const SubmitButton = styled.button`
  font-family: ${(p) => p.theme.fonts.sans};
  font-size: 1rem;
  background-color: ${(p) => p.theme.colors.red};
  color: ${(p) => p.theme.colors.white};
  border: 0;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;

  &:hover {
    text-decoration: underline;
  }
`;
