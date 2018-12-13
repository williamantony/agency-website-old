import React from 'react';
import './Title.css';

const Title = (props) => {
  const {
    tag,
    align,
    style,
    children,
  } = props;

  const TitleTag = tag;
  const className = `Title Title--${tag}`;
  const tagStyle = style || {};

  if (new RegExp(/^(left|center|right)$/i).test(align)) {
    tagStyle.textAlign = align.toLowerCase();
  }

  return (
    <TitleTag className={className} style={tagStyle}>
      { children }
    </TitleTag>
  );
}

export default Title;
