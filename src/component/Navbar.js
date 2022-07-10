import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom"


const Navbar = () => {

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    const navigate = useNavigate();

    const search = (event) => {
        if(event.key == "Enter") {
            let keyword = event.target.value;

            navigate(`/?q=${keyword}`)
        }
    }

    const goToLogin = () => {
        navigate('/login')
    }

  return (
    <div>
        <div>
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>

        <div className="nav-section">
            <img width={100} src="https://blog.kakaocdn.net/dn/bo63iq/btqzoAPf4Al/XQIT4z12vggX4ooDu926JK/img.jpg"></img>
        </div>

        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu, idx) => ( 
                        <li key={idx}>{menu}</li>
                ))}
            </ul>
            <div className="menu-search">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder='제품 검색' onKeyPress={(event) => search(event)}/>  
            </div>
        </div>


    </div>
  )
}

export default Navbar