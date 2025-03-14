import { Footer } from "flowbite-react";
const FooterComponent = () => {
  return (
    <div className="bottom-0 left-0 w-full">
    <Footer container>
    <Footer.Copyright href="#" by="Flowbite™" year={2022} />
    <Footer.LinkGroup>
      <Footer.Link href="#about">About</Footer.Link>
      {/* <Footer.Link href="#">Privacy Policy</Footer.Link>
      <Footer.Link href="#">Licensing</Footer.Link> */}
      <Footer.Link href="#contact">Contact</Footer.Link>
    </Footer.LinkGroup>
  </Footer>
  </div>
  )
}

export default FooterComponent