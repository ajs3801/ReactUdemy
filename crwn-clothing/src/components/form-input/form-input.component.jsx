import { FormInputLabel, Input, Group}from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {/* ...otherProps: Spread Syntax(전개구문) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax */}
      <Input {...otherProps}/> 
      {label && (
        <FormInputLabel shrink={otherProps.value.lenght}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;