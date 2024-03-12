import React, { memo } from "react";

const TitleCard = (props) => {
  const { title, description } = props;
  return (
    <div className="row">
      <div className="offset-3 col-6 text-center">
        <p className="fs-32 fw-700">{title}</p>
        <p className="fs-16 fw-400">{description} </p>
      </div>
    </div>
  );
};

export default memo(TitleCard);
