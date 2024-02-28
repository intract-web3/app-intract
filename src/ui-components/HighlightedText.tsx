import React from "react";

const HighlightedText = ({
  highlighted,
  normal,
}: {
  highlighted: string;
  normal: string;
}) => {
  // Split the normal text by the highlighted text
  const parts = normal.split(highlighted);

  // Reconstruct the sentence with the highlighted text emphasized
  return (
    <span>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index !== parts.length - 1 && (
            <>
              <strong>{highlighted}</strong>
              <strong>{normal}</strong>
            </>
          )}
        </span>
      ))}
    </span>
  );
};

export default HighlightedText;
