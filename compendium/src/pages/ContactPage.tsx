import { Header } from '../components/Header'
// import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
// import { Fade } from '../components/Fade'

import './ContactPage.css';

import pfp1 from '../assets/tkf-pfp1.png';

export function ContactPage() {

  return(
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <title>Contact</title>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"/>

      <link rel="icon" type="image/svg+xml" href={pfp1} />

      <div className="page-container-contact">

        {/* <Fade /> */}

        <Header selected={{name:'contact'}}/>

        {/* <Sidebar /> */}

        <div className="content-container-contact">

          <h1>// Contact</h1>

          <div className="content-section-contact">
            <h2>Contact information</h2>
            <p>Please refer to information found in Resume or Cover Letter.</p>

          </div>

          <div className="content-section-contact">
            <h2>PGP</h2>
            <code className="pgp-code">
              <pre>
{
  `
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEadlyehYJKwYBBAHaRw8BAQdA/EE+vYFZTExbEu7XLmriItkpLkWH0/LOyalg
RnzCmNy0AXSImQQTFgoAQRYhBCp1xu0xHo4d5t4/B7knTA+hgbPTBQJp2XJ6AhsD
BQkFpMI2BQsJCAcCAiICBhUKCQgLAgQWAgMBAh4HAheAAAoJELknTA+hgbPTs14B
AJf1HVuaYwlqGxlmqargUcgVUmEYLTpIu3i5v4JbdFl9AP49VUVG3EPQb4LJhfrx
lRFoxHcoLZwMil8ZFPr8HdneB7g4BGnZcnoSCisGAQQBl1UBBQEBB0AFj4jBn4ZS
+vmoNoArx+57KuvWfJzxa47rMdb9Rt1MZQMBCAeIfgQYFgoAJhYhBCp1xu0xHo4d
5t4/B7knTA+hgbPTBQJp2XJ6AhsMBQkFpMI2AAoJELknTA+hgbPTEfUBAPkxRHsj
ny4Als2V0VxcL2+xS6vlpDpNf7A+t962/v+wAQC1QSSHKgGTdfh6r2DKB6OT4mwG
dCP9J/whYBgo0PgwDA==
=6J4+
-----END PGP PUBLIC KEY BLOCK-----
  `
}
              </pre>
            </code>

          </div>

        </div>

        <Footer />

      </div>
      
    </>
  )


}