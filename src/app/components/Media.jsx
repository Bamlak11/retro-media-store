"use client";
import React, { useState } from "react";
import MediaList from "./MediaList";

const Media = () => {
  // create array for media items
  const [mediaItems, setMediaItems] = useState([
    { id: 1, type: "VHS", title: "Back to the Future" },
    { id: 2, type: "DVD", title: "The Matrix" },
    { id: 3, type: "CD", title: "Thriller - Michael Jackson" },
  ]);

  return (
    <div className="flex justify-between flex-col p-10">
      {/* gets medialist component and mediaitems prop and displays the content  */}
      <MediaList mediaItems={mediaItems}/>

    </div>
  );
};

export default Media;
