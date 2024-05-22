import React from 'react';
import { DropDownContent } from '../dropdown_content/dropdownContent';
import { Person } from '../../types/Person';

interface Props {
  list: Person[];
  setTitle: (arg: string) => void;
  setFocused: (arg: boolean) => void;
}

export const DropDownMenu: React.FC<Props> = ({
  list,
  setTitle,
  setFocused,
}) => {
  return (
    <div className="dropdown-menu" role="menu" data-cy="suggestions-list">
      <DropDownContent
        people={list}
        setTitle={setTitle}
        setFocused={setFocused}
      />
    </div>
  );
};