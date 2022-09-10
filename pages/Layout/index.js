import Header from "../Common/header";
import Footer from "../Common/footer";
const Layout = ({ children }) => {
   /*  console.log("This is my Layout") */
    return (
        <>
            <Header />
                <main>{children}</main>
            <Footer />
        </>
    );
}
export default Layout;