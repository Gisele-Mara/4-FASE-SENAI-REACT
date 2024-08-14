import "./Header.css"


function Logo(){
    
    return (
        <div className="logo">
             <img src="/src/assets/farmarcia-logo-pq.png" alt="Pharmacy logo's" />
        </div>
      )


}

function Header() {
  return (
    <div className="header-container">
          <h1> FARMÁCIA</h1>
          <Logo />
    </div>
  )
}

export default Header

