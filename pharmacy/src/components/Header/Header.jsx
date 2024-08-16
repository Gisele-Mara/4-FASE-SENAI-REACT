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
          <Logo />
           <h1> Farmácia</h1>
    </div>
  )
}

export default Header

