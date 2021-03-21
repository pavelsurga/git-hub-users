import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { actions as ProfileActions } from "../features";
import UserProfile from "../../../components/UserProfile/UserProfile";
import { MainProfileLayout } from "./ProfileLayout.style";

export const ProfileLayout = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProfileActions.loadProfile(match.params.username));
  }, [match.params.username]);
  const user = useSelector((state) => state.profile.userData, shallowEqual);

  return (
    <MainProfileLayout>
      <UserProfile
        avatarUrl={user.avatar_url}
        name={user.name}
        location={user.location}
        from={user.created_at}
      />
    </MainProfileLayout>
  );
};
