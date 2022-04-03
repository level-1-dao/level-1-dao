import { Fragment } from "react";
import dateFormat from "dateformat";

const UpdatedOn = ({ createdOn, updatedOn }) => {
  return (
    <div className="updated-on-container flex space-x-2">
      <span className="text-sm">
        Published on: {dateFormat(createdOn, "mmmm dS yyyy")}
      </span>
      {updatedOn !== createdOn && updatedOn && (
        <Fragment>
          <span className="text-sm"> |</span>
          <span className="text-sm">
            Updated on: {dateFormat(updatedOn, "mmmm dS yyyy")}
          </span>
        </Fragment>
      )}
    </div>
  );
};

export default UpdatedOn;
