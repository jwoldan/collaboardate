import React from 'react';

import ToggleMenu from '../general/toggle_menu';
import WithMenuStatus from '../general/with_menu_status';

const colors = [
  'blue',
  'orange',
  'green',
  'red',
  'purple',
  'pink',
  'light-green',
  'light-blue',
  'grey',
];

class BoardBackgroundMenu extends React.Component {
  updateBackground = (background) => {
    const { boardId } = this.props;

    return (e) =>
      this.props.updateBoard({
        id: boardId,
        background,
      });
  };

  render() {
    const { disabled } = this.props;

    const menuContent = (
      <section className="menu-section">
        <ul className="board-background-options">
          {colors.map((color) => (
            <li key={color} className={color} onClick={this.updateBackground(color)} />
          ))}
        </ul>
      </section>
    );

    return (
      <section className="board-menu-item">
        <WithMenuStatus menuKey="showBoardBackgroundMenu" leaveOthers>
          {({ show, toggle }) => (
            <>
              <a onClick={toggle}>Change Background</a>
              <ToggleMenu
                disabled={disabled}
                menuTitle="Change Background"
                show={show}
                toggle={toggle}
              >
                {menuContent}
              </ToggleMenu>
            </>
          )}
        </WithMenuStatus>
      </section>
    );
  }
}

export default BoardBackgroundMenu;
