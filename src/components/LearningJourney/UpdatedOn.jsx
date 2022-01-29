import { Fragment } from "react";

const UpdatedOn = ({ createdOn, updatedOn }) => {
  return (
    <div className="updated-on-container flex space-x-2">
      <span className="text-sm">Published two weeks ago</span>
      {updatedOn !== createdOn && updatedOn && (
        <Fragment>
          <span className="text-sm">|</span>
          <span className="text-sm">Updated two days ago</span>
        </Fragment>
      )}
    </div>
  );
};

export default UpdatedOn;