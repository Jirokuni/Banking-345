const Homepage = () => { // Define a functional component named Homepage
    return (
        <> {/* React Fragment */}
        <div className="nav-bar">
            <nav>
                <ul>
                    <li>Promotions</li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                    <button>Register</button>
                    <button>Log In</button>
                </ul>     
            </nav>
        </div>
        <div className="box-container">
            <div className="box">
                <h1>Box</h1>
            </div>
            <div className="box">
                <h1>Box</h1>
            </div>
            <div className="box">
                <h1>Box</h1>
            </div>
            <div className="box">
                <h1>Box</h1>
            </div>
            <div className="box">
                <h1>Box</h1>
            </div>
            <div className="box">
                <h1>Box</h1>
            </div>
            <div className="box">
                <h1>Box</h1>
            </div>
        </div>
        <footer>
            <h1>PDIC INSURED UP TO 500,000PHP</h1>
        </footer>
        </>
    )
}


export default Homepage