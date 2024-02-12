import { useState, useLayoutEffect, useEffect } from 'react';
import { SlMagnifier } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { MenuIconMobile, MenuToggleMobile, PaginaConteudoMobileContainer, PaginaConteudoMobileTitle,
         PaginaConteudoMobileWrapper, PaginaOverlayMobile, HeaderContainer, HeaderContainerFixed, HeaderLinksMobilePage, 
         HeaderNavbar, HeaderNavbarFixed, PaginaConteudoMobileSubTitle, HeaderHomeArea, HeaderHomeAreaFixed, HeaderNavbarContainer, 
         HeaderNavbarContainerFixed, HeaderRoutesArea, HeaderRoutesAreaFixed, HomeLink, LogoLink, NavbarSearchArea, NavbarSearchAreaButton, 
         NavbarSearchAreaInput, NavbarSearchAreaInputMobile } from "../../styles/HeaderStyles"

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [aberto, setAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [headerState, setHeaderState] = useState('normal');
  const [search, setSearch] = useState("")
  
  const navigate = useNavigate()

  const handleTopClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  

  const toggleMenu = () => {
    setAberto(!aberto);
  };

  const fecharMenu = () => {
    setAberto(false);
  };

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

  const handleKeyDownMobile = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${search}`);
      setSearch('');
      fecharMenu(); // Fechar o menu ao pressionar Enter
    }
  };

  const handleLinkClick = (route) => {
    if (isMobile) {
      setAberto(false); 
      navigate(route); 
    }
  };

  const handleSearchSubmit = () => {
    if (isMobile) {
      setAberto(false); // Feche o menu ao clicar em "Search"
    }

    if (search.trim() !== "") {
      navigate(`/search?q=${search}`);
      setSearch('');
    }
  };

  useLayoutEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 770;
      setIsMobile(isMobileDevice);
    };

    checkMobile();

    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    let isScrolling = false;

    // Função para atualizar a largura da janela quando a janela for redimensionada
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Adicionar um ouvinte de evento de redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Função para lidar com o scroll
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;

        const scrollY = window.scrollY;
        const headerActivationHeight = 340;
        const scrollThreshold = 50;
        const isHeaderFixed = scrollY > headerActivationHeight;

        if (isHeaderFixed && headerState !== 'fixed') {
          setHeaderState('fixed');
        } else if (!isHeaderFixed && headerState !== 'normal') {
          if (scrollY <= scrollThreshold) {
            setHeaderState('normal');
          }
        }

        setTimeout(() => {
          isScrolling = false;
        }, 50);
      }
    };

    // Adicionar um ouvinte de evento de rolagem da janela
    window.addEventListener('scroll', handleScroll);

    // Remover o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerState]);

  return (
    <>
    {headerState === 'fixed' ? (
      <HeaderContainerFixed>
        <HeaderNavbarFixed>
            <HeaderNavbarContainerFixed>
              <HeaderHomeAreaFixed>
                <LogoLink style={{ color: "white" }} onClick={handleTopClick}>
                  TOP
                </LogoLink>
              </HeaderHomeAreaFixed>
              <HeaderRoutesAreaFixed>
                <LogoLink to="/popular">
                  POPULAR
                </LogoLink>
              </HeaderRoutesAreaFixed>
              <HeaderRoutesAreaFixed>
                <LogoLink to="/top-rated">
                  TOP-RATED
                </LogoLink>
              </HeaderRoutesAreaFixed>
              <HeaderRoutesAreaFixed>
                <LogoLink to="/trending">
                  TRENDING
                </LogoLink>
              </HeaderRoutesAreaFixed>
              <HeaderRoutesAreaFixed>
                {windowWidth <= 500 ? (
                    // Renderiza os links menores
                    <LogoLink to="/in-theaters">
                      THEATER
                    </LogoLink>
                  ) : (
                    // Renderiza os links maiores
                    <LogoLink to="/in-theaters">
                      IN-THEATERS
                    </LogoLink>
                )}
              </HeaderRoutesAreaFixed>
          </HeaderNavbarContainerFixed>
          </HeaderNavbarFixed>
        </HeaderContainerFixed>
      ) : (
        <HeaderContainer id="home">
          <HeaderNavbar>
            <HeaderNavbarContainer>
              <HeaderHomeArea>
                <HomeLink to="/">
                  HOME
                </HomeLink>
              </HeaderHomeArea>
              <HeaderRoutesArea>
                <LogoLink to="/popular">
                  POPULAR
                </LogoLink>
              </HeaderRoutesArea>
              <HeaderRoutesArea>
                <LogoLink to="/top-rated">
                  TOP RATED
                </LogoLink>
              </HeaderRoutesArea>
              <HeaderRoutesArea>
                <LogoLink to="/trending">
                  TRENDING
                </LogoLink>
              </HeaderRoutesArea>
              <HeaderRoutesArea>
                <LogoLink to="/in-theaters">
                  IN-THEATERS
                </LogoLink>
              </HeaderRoutesArea>
            </HeaderNavbarContainer>
            <NavbarSearchArea>
              <NavbarSearchAreaInput type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
              <NavbarSearchAreaButton onClick={handleSubmit}>
                <SlMagnifier />
              </NavbarSearchAreaButton>
            </NavbarSearchArea>
          </HeaderNavbar>

            {isMobile && isVisible ? (
              <PaginaOverlayMobile className={`pagina-overlay ${aberto ? 'pagina-overlay-aberto' : ''}`}>
                <PaginaConteudoMobileContainer className="pagina-conteudo">
                  <div style={{display: "flex", flexDirection: "column", marginBottom: "10px"}}>
                    <PaginaConteudoMobileTitle to="/" onClick={() => handleLinkClick("/")}>HOME</PaginaConteudoMobileTitle>
                    <div style={{display: "flex", alignItems: "center"}}>
                      <NavbarSearchAreaInputMobile type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDownMobile}/>
                      <NavbarSearchAreaButton onClick={handleSearchSubmit}>
                        <SlMagnifier />
                      </NavbarSearchAreaButton>
                    </div>
                  </div>
                  <PaginaConteudoMobileWrapper>
                    <PaginaConteudoMobileSubTitle>Genres</PaginaConteudoMobileSubTitle>
                    <HeaderLinksMobilePage to="/popular" onClick={() => handleLinkClick("/popular")}>Popular</HeaderLinksMobilePage>
                    <HeaderLinksMobilePage to="/top-rated" onClick={() => handleLinkClick("/top-rated")}>Top-Rated</HeaderLinksMobilePage>
                    <HeaderLinksMobilePage to="/trending" onClick={() => handleLinkClick("/trending")}>Trending</HeaderLinksMobilePage>
                    <HeaderLinksMobilePage to="/in-theaters" onClick={() => handleLinkClick("/in-theaters")}>In-Theaters</HeaderLinksMobilePage>
                  </PaginaConteudoMobileWrapper>
                </PaginaConteudoMobileContainer>
              </PaginaOverlayMobile>
            ) : (
              null
          )}
        

        {isMobile && isVisible ? 
          <MenuToggleMobile className="menu-toggle" onClick={toggleMenu}>
            <MenuIconMobile className={`menu-icon ${aberto ? 'menu-icon-x' : 'menu-icon-vazio'}`} onClick={fecharMenu}></MenuIconMobile> 
          </MenuToggleMobile> 
      :  
        null
        }    
    </HeaderContainer>
    )}
    </>
  );
  
}
