import React from 'react';

export const Default = (props) => <span>{props.children}</span>;

const isCase = (c) => c.type === Case;
const isDefaultCase = (c) => c.type === Default;

export const Switch = (props) => {
  if(!Array.isArray(props.children)) return props.children;
  const childrenCase = props.children.filter(isCase);
  const childDefault = props.children.filter(isDefaultCase)[0];
  const reduceExprs = (all, child) => all || child.props.expr;
  const showDefaultCase = !childrenCase.reduce(reduceExprs, false);
  const childrenToShow = showDefaultCase ? childDefault : childrenCase;
  return <span>{childrenToShow}</span>;
}

export const Case = (props) => props.expr ? props.children : null;
