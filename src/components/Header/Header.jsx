import { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: black;
  padding: 10px 0;
  border-bottom: 3px solid #0e0e0e;

  @media screen and (max-width: 480px) {
    padding: 20px 0;
  }
`;

const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeaderLogoArea = styled.div``;

const LogoLink = styled(NavLink)`
  color: #e6aa13;
  text-shadow: 0.1em 0.1em #333;
  padding: 6px;

  &:hover {
    transition: 0.3s;
    border-bottom: 4px solid #e6aa13;
  }

  &.active {
    border-bottom: 4px solid #e6aa13;
  }
`;


const NavbarSearchArea = styled.form`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const NavbarSearchAreaInput = styled.input`
  padding: 8px 12px;
  border-radius: 5px;
  margin-right: 5px;
  letter-spacing: 1px;
  font-size: 14px;
  border: none;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const NavbarSearchAreaButton = styled.button`
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: white;

  &:hover {
    background-color: #ffb700;
    transition: 0.5s;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export default function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${search}`);
      setSearch('');
    }
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%', marginLeft: '20px' }}>
          <HeaderLogoArea>
            <LogoLink to="/">
              HOME
            </LogoLink>
          </HeaderLogoArea>
          <div>
            <LogoLink to="/popular">
              POPULAR
            </LogoLink>
          </div>
          <div>
            <LogoLink to="/top-rated">
              TOP RATED
            </LogoLink>
          </div>
          <div>
            <LogoLink to="/trending">
              TRENDING
            </LogoLink>
          </div>
          <div>
            <LogoLink to="/in-theaters">
              IN-THEATERS
            </LogoLink>
          </div>
        </div>
        <NavbarSearchArea>
          <NavbarSearchAreaInput type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
          <NavbarSearchAreaButton onClick={handleSubmit}>
            <SlMagnifier />
          </NavbarSearchAreaButton>
        </NavbarSearchArea>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
