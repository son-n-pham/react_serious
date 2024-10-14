import React from 'react';

export const EventExample = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form is submitted');

    // Get all form elements
    const formElements = e.target.elements;

    // Iterate through form elements
    for (let element of formElements) {
      // Check if the element is an input of type 'text'
      if (element.tagName === 'INPUT' && element.type === 'text') {
        // Log the name and value of the text input
        console.log(`Input name: ${element.name}, Value: ${element.value}`);
      }
    }
  };
  const handleFormInput = (e) => {
    console.log('Form was changed');
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleButtonClick = (e) => {
    // e.preventDefault();
    console.log('Click me button was clicked');
  };
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Form</h2>
        <input
          type="text"
          onChange={handleFormInput}
          name="example"
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={handleButtonClick}>
        Click me
      </button>
    </section>
  );
};
