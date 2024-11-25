import React from "react";
import "../footer/footerSection.css";
import {GlobalOutlined} from  '@ant-design/icons'
import LanguageSelector from "../componenets/countrySelector";
// import logo  from "../../public/images/amazon_logo.png"
const FooterSection = ({ back }) => {
  const description = [
    {
      id: 1,
      head: "Get to Know Us",
      para: (
        <ul>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
          <li>Investor Relations</li>
          <li>Amazon Devices</li>
          <li>Amazon Science</li>
        </ul>
      ),
    },
    {
      id: 2,
      head: "	Make Money with Us",
      para: (
        <ul>
          <li>Sell products on Amazon</li>
          <li>Sell on Amazon Business</li>
          <li>Sell apps on Amazon</li>
          <li>Become an Affiliate</li>
          <li> Advertise Your Products</li>
          <li>Self-Publish with Us</li>
          <li>Host an Amazon Hub</li>
          <li>See More Make Money with Us</li>
        </ul>
      ),
    },
    {
      id: 3,
      head: "Amazon Payment Products",
      para: (
        <ul>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
        </ul>
      ),
    },
    {
      id: 4,
      head: "Let Us Help You",
      para: (
        <ul>
          <li>Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
          <li> Returns & Replacements</li>
          <li>Manage Your Content and Devices</li>
          <li>Help</li>
          <li>See More Make Money with Us</li>
        </ul>
      ),
    },
  ];

  const footerLinks = [
    {
      // href: "https://music.amazon.com?ref=dm_aff_amz_com",
      title: "Amazon Music",
      description: "Stream millions of songs",
    },
    {
      // href: "https://advertising.amazon.com/?ref=footer_advtsing_amzn_com",
      title: "Amazon Ads",
      description: "Reach customers wherever they spend their time",
    },
    {
      // href: "https://www.6pm.com",
      title: "6pm",
      description: "Score deals on fashion brands",
    },
    {
      // href: "https://www.abebooks.com",
      title: "AbeBooks",
      description: "Books, art & collectibles",
    },
    {
      // href: "https://www.acx.com/",
      title: "ACX",
      description: "Audiobook Publishing Made Easy",
    },
    {
      // href: "https://sell.amazon.com/?ld=AZUSSOA-footer-aff&ref_=footer_sell",
      title: "Sell on Amazon",
      description: "Start a Selling Account",
    },
    {
      // href: "https://www.veeqo.com/?utm_source=amazon&utm_medium=website&utm_campaign=footer",
      title: "Veeqo",
      description: "Shipping Software Inventory Management",
    },
    {
      // href: "/business?ref_=footer_retail_b2b",
      title: "Amazon Business",
      description: "Everything For Your Business",
    },
    {
      // href: "/gp/browse.html?node=230659011&ref_=footer_amazonglobal",
      title: "AmazonGlobal",
      description: "Ship Orders Internationally",
    },
    {
      // href: "/services?ref_=footer_services",
      title: "Home Services",
      description: "Experienced Pros Happiness Guarantee",
    },
    {
      // href: "https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=amazonfooter",
      title: "Amazon Web Services",
      description: "Scalable Cloud Computing Services",
    },
    {
      // href: "https://www.audible.com",
      title: "Audible",
      description: "Listen to Books & Original Audio Performances",
    },
    {
      // href: "https://www.boxofficemojo.com/?ref_=amzn_nav_ftr",
      title: "Box Office Mojo",
      description: "Find Movie Box Office Data",
    },
    {
      // href: "https://www.goodreads.com",
      title: "Goodreads",
      description: "Book reviews & recommendations",
    },
    {
      // href: "https://www.imdb.com",
      title: "IMDb",
      description: "Movies, TV & Celebrities",
    },
    {
      // href: "https://pro.imdb.com?ref_=amzn_nav_ftr",
      title: "IMDbPro",
      description: "Get Info Entertainment Professionals Need",
    },
    {
      // href: "https://kdp.amazon.com",
      title: "Kindle Direct Publishing",
      description: "Indie Digital & Print Publishing Made Easy",
    },
    {
      // href: "https://videodirect.amazon.com/home/landing",
      title: "Prime Video Direct",
      description: "Video Distribution Made Easy",
    },
    {
      // href: "https://www.shopbop.com",
      title: "Shopbop",
      description: "Designer Fashion Brands",
    },
    {
      // href: "https://www.woot.com/",
      title: "Woot!",
      description: "Deals and Shenanigans",
    },
    {
      // href: "https://www.zappos.com",
      title: "Zappos",
      description: "Shoes & Clothing",
    },
    {
      // href: "https://ring.com",
      title: "Ring",
      description: "Smart Home Security Systems",
    },
    {
      // href: "https://eero.com/",
      title: "eero WiFi",
      description: "Stream 4K Video in Every Room",
    },
    {
      // href: "https://blinkforhome.com/?ref=nav_footer",
      title: "Blink",
      description: "Smart Security for Every Home",
    },
    {
      // href: "https://shop.ring.com/pages/neighbors-app",
      title: "Neighbors App",
      description: "Real-Time Crime & Safety Alerts",
    },
    {
      // href: "/gp/browse.html?node=14498690011&ref_=amzn_nav_ftr_swa",
      title: "Amazon Subscription Boxes",
      description: "Top subscription boxes – right to your door",
    },
    {
      // href: "https://www.pillpack.com",
      title: "PillPack",
      description: "Pharmacy Simplified",
    }
  ];

  
  const chunkedLinks = [];
  for (let i = 0; i < footerLinks.length; i += 7) {
    chunkedLinks.push(footerLinks.slice(i, i + 7));
  }

  return (
    <>
      <div className="footer-border">
        <div className="inner-div">
          {/* <div className='personalization'> */}
          <h2 className="inner-div-h2">See personalized recommendations</h2>
          <button className="sign-in-button">Sign in</button>
          <p className="new-cst">
            New customer? <span className="start-here">Start here</span>
          </p>
          {/* </div> */}
        </div>
      </div>
      <div className="back-to-top" onClick={back}>
        Back to top
      </div>
      <div>
        <div className="get-to-know">
          {description.map((thing, index) => {
            return (
              <div className="know" key={index}>
                <h2 className="know-head">{thing.head}</h2>
                <p className="know-para">{thing.para}</p>
              </div>
            );
          })}
        </div>
        <div className="last-footer">
          <div className="footer-logo"></div>
          <div className="world-wide">
          <GlobalOutlined />
          English
          </div>
          <div className="dollar-usd">
           $USD - U.S. Dollar
          </div>
          <div className="flag-select">
            <img src="/images/Flag.png" alt="flag" className="img-flag"/>
            <span>United States</span>
          </div>
        </div>
        <div className="last-footer-link">
      <div className="navFooterLine navFooterLinkLine navFooterDescLine " role="navigation" aria-label="More on Amazon">
        <table className="navFooterMoreOnAmazon" cellSpacing="0" summary="More on Amazon">
          <tbody>
            {chunkedLinks.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((link, index) => (
                  <React.Fragment key={index}>
                    <td className="navFooterDescItem">
                      <a href={link.href} className="nav_a">
                        {link.title}
                        <br />
                        <span className="navFooterDescText">{link.description}</span>
                      </a>
                    </td>
                    <td className="navFooterDescSpacer" style={{ width: "3%" }}></td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="conditions">
       <p>
       Conditions of Use
Privacy Notice
Consumer Health Data Privacy Disclosure
Your Ads Privacy Choices
       </p>

© 1996-2024, Amazon.com, Inc. or its affiliates
    </div>
    
    <div>
      
    </div>
      </div>
    </>
  );
};

export default FooterSection;
