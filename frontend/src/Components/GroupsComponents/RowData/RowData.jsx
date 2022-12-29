//Styling
import "./RowData.css";

const RowData = ({ row, rowNumber }) => {
  return (
    <div className="row-container">
      <span
        style={{ color: "white", fontWeight: "800", letterSpacing: "0.1rem" }}
      >
        {rowNumber}.
      </span>{" "}
      {row.first_name} {row.last_name}, {row.phone}
    </div>
  );
};

export default RowData;
