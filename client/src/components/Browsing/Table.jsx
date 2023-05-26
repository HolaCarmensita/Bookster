function Table({ data, column }) {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item, index) => (
            <TableHeadItem key={index} item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index} item={item} column={column} />
        ))}
      </tbody>
    </table>
  );
}

const TableHeadItem = ({ item }) => {
  return <th>{item.heading}</th>;
};

const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      return <td key={index}>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);
export default Table;
