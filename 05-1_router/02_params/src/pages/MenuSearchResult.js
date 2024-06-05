import { useSearchParams } from 'react-router-dom';
import { searchMenu } from '../api/MenuAPI';
import { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';

function MenuSearchResult() {
    
    /* 쿼리 스트링 형태로 전달 된 값은 useSearchParams hook을 통해 꺼낼 수 있다. */
    const [searchParam] = useSearchParams();
    /** 쿼리 스트링의 키 값을 get함수에 전달하여 해당 파라미터 값을 읽어온다. */
    const searchMenuName = searchParam.get('menuName');
    // console.log(searchParam.get('menuName'));
    const [menuList, setMenuList] = useState([]);
    
    useEffect(
        () => {
            /* 쿼리스트링 방식으로 menuName이라는 키로 넘어온 검색어를 바탕으로
               해당 메뉴 이름과 매칭되는 검색 결과 객체를 반환받는다. */
            setMenuList(searchMenu(searchMenuName));
        }, []);

    return (
        <>
            <h1>메뉴 검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
            </div>
        </>
    );
}
export default MenuSearchResult;
