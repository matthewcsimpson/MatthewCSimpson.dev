import "@/components/Footer/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Matthew Simpson. All rights reserved.
      </p>
      <p className="footer__glasses">
        If you can read this you don&apos;t need glasses.
      </p>
    </footer>
  );
};
export default Footer;
