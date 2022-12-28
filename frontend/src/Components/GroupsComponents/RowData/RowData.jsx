//Styling
import "./RowData.css";

const RowData = ({ row, rowNumber }) => {
  return (
    <div className="row-container">
      {rowNumber}. {row.first_name} {row.last_name}, {row.phone}
    </div>
  );
};

export default RowData;
