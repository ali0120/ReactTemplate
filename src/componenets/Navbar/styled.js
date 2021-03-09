import  styled  from 'styled-components';
export const Container = styled.div`
    width: 85%;
    margin: auto;
`
export const Nav = styled.div` 
   display: flex;
   justify-content: space-between;
`
export const NavbarSection = styled.div`
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
`
export const Logo = styled.div`
    line-height: 18px;
`
export const Logotext = styled.h2`
    font-size: 30px;
    font-weight: bold
`
export const UlList = styled.ul`
 
    list-style: none;
`
export const LiList = styled.li`
    display: inline-block;

`
export const Anchor  = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
    color: #eb5424
            
    }
`