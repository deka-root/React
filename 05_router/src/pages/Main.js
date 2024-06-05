import { Link } from "react-router-dom";

/* 메인 화면을 보여줄 페이지 */
function Main() {
    return (
        <div>
            <h1>메인</h1>
            <nav>
                <Link to="/">HOME</Link><br/>
                <Link to="/about">소개</Link><br/>
                <Link to="/menu">메뉴 목록</Link>
            </nav>
        </div>
    );
}
export default Main;