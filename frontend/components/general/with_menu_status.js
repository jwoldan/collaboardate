import useMenuStatus from './use_menu_status';

const WithMenuStatus = ({ children, menuKey, disabled = false, leaveOthers = false }) => {
  const [show, toggle] = useMenuStatus(menuKey, disabled, leaveOthers);

  return children({ show, toggle });
};

export default WithMenuStatus;
