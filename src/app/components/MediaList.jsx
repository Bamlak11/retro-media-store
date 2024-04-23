import React from "react";
import MediaItem from "./MediaItem";

const MediaList = ({ mediaItems }) => {
  return (
        // creates a container and iterates through the mediaitems array 
    <div className="flex flex-col align-middle text-black">
      {mediaItems.map((item) => (
        // gets mediaitem components, assigns a key to each item and passes item prop
        <MediaItem key={item.id} item={item} />

      ))}
    </div>
  );
};

export default MediaList;
