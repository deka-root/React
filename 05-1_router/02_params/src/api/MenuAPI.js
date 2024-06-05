import menus from '../data/menu-detail.json';

/* 전체 메뉴 목록 조회용 API */
export function getMenuList() {
    return menus;
}

/* MenuDetails에서 넘겨준 메뉴코드를 이용하여 한 개의 상세 내용 조회 */
export function getMenuDetail(menuCode) {
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
}

/* 메뉴명 전달 받아 메뉴 이름을 포함하고 있는 메뉴 목록 조회 */
export function searchMenu(searchMenuName) {
    return menus.filter(menu => menu.menuName.match(searchMenuName));
}
