import React from "react";
import { useParams } from "react-router-dom";

function Github() {
  const { id } = useParams();
  return (
    <div className="w-full h-12 bg-amber-100 text-2xl text-center">
      Followers:{id}
    </div>
  );
}

export default Github;
