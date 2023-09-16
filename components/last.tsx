import type { NextPage } from 'next';
import { useState, useCallback } from 'react';

import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "../components/portalpopup";
import Flower from '../public/Group 1000000920.png';
import localFont from 'next/font/local';
import Headlogo from '../public/logs.png';
import Wallet from '../public/mingcute_wallet-4-fill.svg';
import User from '../public/Ellipse 59.svg';
import Circles from '../public/Group 6.png';
import Snake from '../public/Vector 19.png';
import Image from 'next/image';
import Sidecircle from '../public/Group 8.png';
import Head from 'next/head';
import Star from '../public/Union.png';
import Abouts from '../public/aboutbac.png';
import Sociallin from '../public/Group 87.svg';
import Brother from '../public/Mask Group.svg';
import { ConnectWallet } from '@thirdweb-dev/react';
import Navbar from '../components/navbar';
import Footer from '../components/aboutfooter';
import Box from '@mui/material/Box';
import About from '../public/image 1.png';
import Aboutmobile from '../components/last';
import Navbs from '../public/dd.svg';
import Github from '../public/mdi_github.svg';
import Twitter from '../public/mdi_twitter.svg';
import Linkedin from '../public/entypo-social_linkedin-with-circle.svg';
import Notion from '../public/mingcute_notion-fill.svg';

const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});


import styles from './last.module.css';
const AboutIPadPro1293:NextPage = () => {
  	const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);
  	
  	const openMenuIPadPro1291 = useCallback(() => {
    		setMenuIPadPro1291Open(true);
  	}, []);
  	
  	const closeMenuIPadPro1291 = useCallback(() => {
    		setMenuIPadPro1291Open(false);
  	}, []);
  	
  	return (<>
    		<div className={styles.aboutIpadPro1293}>
      			<Image className={styles.aboutIpadPro1293Child} alt="" src={Flower} />
      			<div className={styles.aboutIpadPro1293Item} />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      		
      			<div className={styles.joinOurCommunityParent}>
        				<div style={thirdFont.style} className={styles.joinOurCommunity1}>Join our community</div>
        				<div  style={secondFont.style}  className={styles.diveIntoA1}>Dive into a thriving hub of shared knowledge and innovation, uniting with us to shape the future of finance through RWFA DApp. Your participation drives our collective journey toward decentralized excellence.</div>
        			

                        <div style={{display:'flex',alignItems:"center",justifyContent:'center',marginTop:'310px',gap:'20px'}}>
						<Image className={styles.groupIte} alt="" src={Github} />
						<Image className={styles.groupIte} alt="" src={Twitter} />
						<Image className={styles.groupIte} alt="" src={Linkedin} />
						<Image className={styles.groupIte} alt="" src={Notion} />
							</div>  


      			</div>
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupInner} />
        				<Image className={styles.maskGroupIcon3} alt="" src={Headlogo} />
        				<div className={styles.mediaInquiresForCmaxContParent}>
          					
          					<div className={styles.copyRight20231}>Copy Right 2023 - CMax. All Rights Reserved</div>
        				</div>
        				<div className={styles.tradeParent}>
          					<div className={styles.trade}>< a href='/trade'>Trade</a>  </div>
          					<div className={styles.trade}>< a href='/trade'>Stake</a>  </div>
          					<div className={styles.trade}>< a href='/about'>About</a>  </div>
          				
          					<div className={styles.trade}>< a href='/profile'>Profile</a>  </div>
        				</div>
      			</div>
      			<div className={styles.aboutParent} onClick={openMenuIPadPro1291}>
        				<div style={thirdFont.style}   className={styles.about1}>About</div>
        				<Image className={styles.rimenuFillIcon1} alt="" src={Navbs} />
      			</div>
      			<div style={myFont.style}  className={styles.aboutUs}>About Us</div>
      			<div style={thirdFont.style}   className={styles.roadMap}>Road Map</div>
      			<div style={thirdFont.style}  className={styles.ourVision1}>{`Audit`}</div>
      	
      			<div className={styles.loremIpsumDolorContainer}>
        				<p  style={secondFont.style}  className={styles.blankLine}>Delve into the world of Coliseum Project - where innovation meets ambition. Rooted in a rich legacy of pioneering ideas, we stand as a testament to the relentless spirit of pushing boundaries. Our journey is not just about achieving milestones but also about crafting experiences and building lasting legacies. Dive in, and get to know the passion, ethos, and vision that shape the Coliseum Project. Join us as we sculpt the future, one groundbreaking endeavor at a time. Welcome to our arena.  </p>
        				<p  style={secondFont.style}  className={styles.blankLine}>&nbsp;</p>
        			
      			</div>
      			<div className={styles.loremIpsumDolorContainer1}>
        				<p style={secondFont.style}  className={styles.blankLine}>At Coliseum, we prioritize the security and trust of our community above all. Every smart contract under our banner has undergone rigorous auditing by industry-leading experts, ensuring their robustness and impenetrability. We believe in setting the gold standard in blockchain security, and as such, our smart contracts reflect our commitment to safeguarding your interests. With Coliseum, you're not just investing in a project, but also in a fortress of trust and reliability. Rest assured, with our fully audited and secure smart contracts, you're in safe hands  </p>
        				<p    className={styles.blankLine}>&nbsp;</p>
        				
      			</div>
      			<div className={styles.loremIpsumDolorContainer2}>
        				<p style={secondFont.style}   className={styles.blankLine}>Welcome to our journey's blueprint - a strategic roadmap meticulously designed to chart our course towards a visionary future. As we delve into the intricate tapestry of our goals, we invite you to explore every twist, turn, and milestone we've set out to achieve. Our roadmap isn't just a set of tasks or deadlines; it embodies our commitment, passion, and innovation in our quest for excellence. Whether you're a stakeholder, team member, or a curious visitor, step into our world and witness firsthand how we transform our ambitions into tangible realities. Embrace the adventure ahead and discover what makes our roadmap the beacon that lights our path forward. Welcome aboard!</p>
        				<p className={styles.blankLine}>&nbsp;</p>
        				
      			</div>
      			<img className={styles.aboutIpadPro1293Inner} alt="" src="Vector 20.svg" />
      			
      			
      			<div className={styles.vectorContainer}>
        				<img className={styles.groupChild1} alt="" src="Vector 21.svg" />
        			
        				<div className={styles.groupParent2}>
          					<div className={styles.ellipseParent2}>
            						<div className={styles.groupChild5} />
            						<div className={styles.rectangleDiv} />
            						<div style={myFont.style}     className={styles.q1}>Q3 2023</div>
            						<div className={styles.distributionTokenCbcContainer}>
              							<p  style={fourthFont.style}  className={styles.blankLine}>Launch the beta version of the Coliseum platform, allowing a select group of users to test its functionalities and provide feedback. Start a pre-seed funding round to attract early investors and lay the groundwork for future expansion. Initiate our social media and marketing strategy, crafting a brand image and generating buzz in the crypto and financial communities. Launch the Initial DEX Offering (IDO) for CMAX, providing the public with their first opportunity to acquire the cornerstone token of our ecosystem.    </p>
              						
              						
            						</div>
          					</div>
          					<div className={styles.ellipseParent2}>
            						<div className={styles.groupChild6} />
            						<div className={styles.groupChild7} />
            						<div style={myFont.style}   className={styles.q2}>Q1 2024</div>
            						<div className={styles.distributionTokenCbcContainer1}>
              							<p style={fourthFont.style}   className={styles.blankLine}>The official release of the Coliseum mobile application allows users to trade and manage their portfolios on the go.

Organize global roadshows and webinars, educating potential users on the benefits of tokenized assets and our platform.

Initiate partnerships with traditional financial institutions, bridging centralized finance and the decentralized world.   </p>
              						
            						</div>
          					</div>
          					<div className={styles.ellipseParent4}>
            						<div className={styles.groupChild8} />
            						<div className={styles.groupChild9} />
            						<div style={myFont.style}   className={styles.q3}>Q4 2025</div>
            						<div className={styles.distributionTokenCbcContainers}>
              							<p style={fourthFont.style}   className={styles.blankLine}>Implement Layer 2 solutions to mitigate potential scalability issues, ensuring swift transactions at lower costs.

Explore the possibility of tokenizing commodities and precious metals, further diversifying our asset offerings.

Open physical offices in key financial hubs worldwide, solidifying our global presence and enhancing user trust.  </p>
              						
            						</div>
          					</div>
          					<div className={styles.ellipseParent2}>
            						<div className={styles.groupChild10} />
            						<div className={styles.groupChild7} />
            						<div style={myFont.style}   className={styles.q2}>Q2 2024</div>
            						<div className={styles.distributionTokenCbcContainer3}>
              							<p style={fourthFont.style}  className={styles.blankLine}>Start acquiring global licenses, ensuring the Coliseum platform operates legally in as many countries as possible.Incorporate bonds and Bitcoin into our treasury, solidifying our financial backbone and diversifying our asset base.Begin developing the Coliseum mobile application, focusing on a seamless user experience.  </p>
              						
            						</div>
          					</div>
        				</div>
        				<img className={styles.groupChild12} alt="" src="Vector 22.svg" />
        				<img className={styles.groupChild13} alt="" src="Vector 23.svg" />
        				<img className={styles.groupChild14} alt="" src="Vector 24.svg" />
        				<img className={styles.groupChild15} alt="" src="Vector 25.svg" />
      			</div>
    		</div>
    		{isMenuIPadPro1291Open && (
      			<PortalPopup
        				overlayColor="rgba(113, 113, 113, 0.3)"
        				placement="Centered"
        				
        				
        				
        				
        				
        				onOutsideClick={closeMenuIPadPro1291}
        				>
        				<MenuIPadPro1291 onClose={closeMenuIPadPro1291} />
      			</PortalPopup>
    		)}</>);
};

export default AboutIPadPro1293;
