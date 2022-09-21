import styled from 'styled-components';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const step1Content = <h1>Step 1 Content</h1>;
  const step2Content = <h1>Step 2 Content</h1>;
  const step3Content = <h1>Step 3 Content</h1>;

  const step2Validator = () => {
    return true;
  };

  const step3Validator = () => {
    // return a boolean
  };

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  return (
    <StyledApp>
      <h1>Multi step Progress Bar</h1>
      <StepProgressBar
        startingStep={0}
        onSubmit={onFormSubmit}
        steps={[
          {
            label: 'Step 1',
            subtitle: '10%',
            name: 'step 1',
            content: step1Content,
          },
          {
            label: 'Step 2',
            subtitle: '50%',
            name: 'step 2',
            content: step2Content,
            validator: step2Validator,
          },
          {
            label: 'Step 3',
            subtitle: '100%',
            name: 'step 3',
            content: step3Content,
          },
        ]}
      />
      ;
    </StyledApp>
  );
}

export default App;
