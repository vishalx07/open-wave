import type { MenuBarItem as MenuBarItemType } from "./types";

type Props = MenuBarItemType & { isNested: boolean };

export const MenuBarItem = (menuBarItem: Props) => {
  const { title, url = "#", items = [], isNested } = menuBarItem;

  return (
    <>
      <div>MenuBarItems</div>
    </>
  );
};
