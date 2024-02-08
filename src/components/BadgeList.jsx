import React from "react";
import Badge from "./Badge";

function BadgeList({ label, badgeList }) {
  return (
    <p className="mt-2 flex flex-wrap">
      <span className="mr-2 font-semibold">{label}</span>
      {badgeList?.map((badge) => (
        <Badge text={badge} />
      ))}
    </p>
  );
}

export default BadgeList;
