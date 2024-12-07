// import PropTypes from 'prop-types';

const Person = ({ name, age, image }) => {
  console.log(name, age, image);
  return (
    <article className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

// Person.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
// };

export default Person;
