import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="footer">
            <ul>
                <li><a href="https://facebook.com/leosell"><img src="/images/fb.png" alt="logo-facebook"/></a></li>
                <li><a href="https://instagram.com/leo_sell_"><img src="/images/ig.png" alt="logo-instagram"/></a></li>
                <li><a href="https://twitter.com/leo_sell_"><img src="/images/tw.png" alt="logo-twitter"/></a></li>
            </ul>
            <div className="footer-logo">
                <a href="https://sc.senai.br"><img src="/images/senai-logo-1.png" alt="logo-senai" className="logo" /></a>
                <p>POWERED BY <strong>LEONARDO SELL</strong></p>
            </div>
        </footer>
    )
}

export default Rodape;