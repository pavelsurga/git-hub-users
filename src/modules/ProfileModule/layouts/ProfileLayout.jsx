import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const ProfileLayout = ({ match }) => {
  console.log('match', match.params);
  const dipsatch = useDispatch();
  return (<div>PROFILE LAYOUT</div>)
};