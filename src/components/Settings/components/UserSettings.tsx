import React, { FC } from 'react';
import AvatarOption from './AvatarOption';
import { Avatar } from '../../../redux/User';

interface UserSettingsProps {
  classes: any;
  inputtedName: string;
  setInputtedName: (value: string) => void;
  selectedAvatar: Avatar;
  setSelectedAvatar: (selected: Avatar) => void;
}

export const UserSettings: FC<UserSettingsProps> = ({
  classes,
  inputtedName,
  setInputtedName,
  selectedAvatar,
  setSelectedAvatar,
}) => {

  return (
    <section className={classes.userSettings}>
      <span className={classes.name}>Enter a name:</span>
      <input
        className={classes.nameInput}
        type={'text'}
        value={inputtedName}
        aria-label={'name'}
        onChange={e => setInputtedName(e.target.value)}
      />
      <span className={classes.avatarOptions}>Select an Avatar</span>
      <AvatarOption
        avatar={Avatar.Bot}
        selected={selectedAvatar === Avatar.Bot}
        onSelect={() => setSelectedAvatar(Avatar.Bot)}
        classes={classes}
        rootClassName={classes.bot}
      />
      <AvatarOption
        avatar={Avatar.Boy}
        selected={selectedAvatar === Avatar.Boy}
        onSelect={() => setSelectedAvatar(Avatar.Boy)}
        classes={classes}
        rootClassName={classes.boy}
      />
      <AvatarOption
        avatar={Avatar.Girl}
        selected={selectedAvatar === Avatar.Girl}
        onSelect={() => setSelectedAvatar(Avatar.Girl)}
        classes={classes}
        rootClassName={classes.girl}
      />
    </section>
  );
};

export default UserSettings;