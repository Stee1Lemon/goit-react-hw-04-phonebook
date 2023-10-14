export const Filter = ({ handleFilter }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleFilter} />
    </label>
  );
};
