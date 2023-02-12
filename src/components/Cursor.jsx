import AnimatedCursor from 'react-animated-cursor';

export const Cursor = () => {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color="220, 90, 90"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
    </div>
  );
};
