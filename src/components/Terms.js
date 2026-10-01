import Marquee from 'react-fast-marquee';
export default function Terms(){
    return(
        <div id='tcbg'>
            <h1 className="text-center">Terms&Conditions</h1>
            <div>
            <Marquee speed={50} pauseOnHover={true} gradient={false}>
                <span style={{color:"green"}}>
                    Welcome to TradeX. By accessing or using this website and its services, you agree to comply with and be bound by these Terms & Conditions. Please read them carefully before using the platform.
                    </span>
            </Marquee>
            <div style={{textAlign:"start"}} className='text'>
            <div className='d-flex justify-content-center '>
                <h5 style={{textTransform:"capitalize"}}>use of the website:</h5>
                <p style={{width:"20rem"}}>TradeX provides users with access to trading-related information, market data, charts, educational resources, and other financial tools. You agree to use the website only for lawful purposes and in accordance with these Terms & Conditions.</p>
            </div>
            <br></br>
            <div className='d-flex justify-content-center'>
                <h5>Account Registration:</h5>
                <p style={{width:"20rem"}}>To access certain features, you may be required to create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your login credentials and for all activities carried out through your account.</p>
            </div>
            <div className='d-flex justify-content-center'>
                <h5 className='ms-5 ps-3'>Trading Risk:</h5>
                <p style={{width:"20rem"}} className='ms-'>Trading financial instruments involves significant risk and may result in the loss of some or all of your invested capital. Past performance does not guarantee future results. You should carefully consider your financial situation and risk tolerance before making any trading decision.</p>
            </div>
            <div className='d-flex justify-content-center'>
                <h5>Market Information:</h5>
                <p style={{width:"20rem"}}>Information, prices, charts, market data, and other content displayed on TradeX may be provided for informational and educational purposes. While we aim to maintain accurate and timely information, we do not guarantee that all information is complete, accurate, or continuously updated.</p>
            </div>
            <div className='d-flex justify-content-center'>
                <h5>User Responsibilities:</h5>
                <p style={{width:"20rem"}}>You agree not to misuse the platform, attempt unauthorized access, interfere with website operations, submit false information, or use the website for any unlawful activity.</p>
            </div>
            <div className='d-flex justify-content-center'>
                <h5 className='ms-5 ps-5'>Contact:</h5>
                <p style={{width:"20rem"}}>If you have questions regarding these Terms & Conditions, please contact us through the contact information provided on the TradeX website.By creating an account or using TradeX, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>
            </div>
            </div>
        </div>
        </div>
    )
}