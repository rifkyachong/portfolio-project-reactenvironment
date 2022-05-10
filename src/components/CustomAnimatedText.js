import "./styles/CustomAnimatedText.css";
import React from "react";

export default function CustomAnimatedMultilineText({ children }) {
  if (!Array.isArray(children)) {
    return (
      <CustomAnimatedSinglelineText>{children}</CustomAnimatedSinglelineText>
    );
  }

  let indexIterator = 0;
  let nextIndexIterator = 0;
  const firstLetterIndexes = children.map((child) => {
    indexIterator = nextIndexIterator;
    if (typeof child === "string") {
      const textContent = child;
      nextIndexIterator = indexIterator + textContent.length;
      return indexIterator;
    }

    const {
      props: { children: textContent },
    } = child;

    nextIndexIterator = indexIterator + textContent.length;
    return indexIterator;
  });

  return children.map((child, childIndex) => (
    <CustomAnimatedSinglelineText
      firstLetterIndex={firstLetterIndexes[childIndex]}
    >
      {child}
    </CustomAnimatedSinglelineText>
  ));
}

function CustomAnimatedSinglelineText({ children, firstLetterIndex = 0 }) {
  if (typeof children === "string") {
    const textContent = children;
    return textContent.split("").map((letter, letterIndex) =>
      /\s+/.test(letter) ? (
        <span> </span>
      ) : (
        <span
          className="animated-letter"
          style={{ ["--animation-index"]: firstLetterIndex + letterIndex }}
        >
          {letter}
        </span>
      )
    );
  }

  const {
    type,
    props: { children: textContent },
  } = children;

  return React.createElement(
    type,
    {},
    ...textContent.split("").map((letter, letterIndex) =>
      /\s+/.test(letter) ? (
        <span> </span>
      ) : (
        <span
          className="animated-letter"
          style={{ ["--animation-index"]: firstLetterIndex + letterIndex }}
        >
          {letter}
        </span>
      )
    )
  );
}
