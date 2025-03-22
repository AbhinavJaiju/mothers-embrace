import { Footer } from "flowbite-react";
const FooterComponent = () => {
  return (
    <div className="bottom-0 left-0 w-full">
    <Footer container>
    <Footer.Copyright href="#" by="Mother's Embrace™" year={2024} />
    <Footer.LinkGroup>
      <Footer.Link href="#services">About</Footer.Link>
      {/* <Footer.Link href="#">Privacy Policy</Footer.Link>
      <Footer.Link href="#">Licensing</Footer.Link> */}
      <Footer.Link href="#contact">Contact</Footer.Link>
    </Footer.LinkGroup>
  </Footer>
  </div>
  )
}

export default FooterComponent