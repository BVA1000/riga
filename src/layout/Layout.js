import Header from './Header/header';
import Footer from './Footer/footer';
import './Layout.css';

function Layout(props) {
  return (
    <div>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
