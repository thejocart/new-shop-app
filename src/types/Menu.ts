export interface MenuProps {
  isMenuOpen?: boolean;
  toggleCart: () => void;
  closeMenu: () => void;
  totalQuantity: number;
}
