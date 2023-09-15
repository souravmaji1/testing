import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './about.module.css';
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
import IpadAbout from '../components/ipadabout';


const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});


const HomepageAbout:NextPage = () => {
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onTradeText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onEllipseIconClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	return (
		<div>

<div className={styles.mobile}>
	  <Aboutmobile />
	</div>
	<div className={styles.ipadabout}>
	  <IpadAbout />
	</div>

    		<div className={styles.homepageAbout}>
      			<div className={styles.homepageAboutChild} />
      			<Image className={styles.homepageAboutItem} alt="" src={Circles} />
      			<div className={styles.rwfa}>RWFA</div>
      			<img className={styles.homepageAboutInner} alt="" src="Group 7.svg" />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.maskGroupParent}>
				  <div className={styles.homepageBlackChild16} >
					<Footer />
					</div>
        				
        				<div className={styles.mediaInquiresForCmaxContParent}>
          					
        				</div>
        				<div className={styles.tradeParent}>
          				
        				</div>
      			</div>

				  <div className={styles.navbars}>
				<Navbar />
			  </div>




      			<div className={styles.homeParent}>
        				<div  style={fourthFont.style}  className={styles.home} onClick={onHomeTextClick}><a href ='/'>Home</a></div>
        				<div style={fourthFont.style}  className={styles.home} onClick={onTradeText1Click}><a href ='/trade'>Trade</a></div>
        				<div style={fourthFont.style}  className={styles.home} onClick={onStakeText1Click}><a href ='/stake'>Stake</a> </div>
        				<div style={fourthFont.style}   className={styles.about1}><a href ='/about'>About</a></div>
						<div style={fourthFont.style}  className={styles.home} ><a href ='/profile'>Profile</a> </div>
      			</div>
    
      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallet} />
        				<div className={styles.connectWallet}>
						<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none'}}
						/>
						</div>
      			</div>
      			<Image className={styles.unionIcon2} alt="" src={Star} />
      			<img className={styles.unionIcon3} alt="" src="Union.svg" />
      			<div style={myFont.style} className={styles.aboutUs}>About Us</div>
      			<div style={thirdFont.style} className={styles.ourVision1}>{`Audit`}</div>
      			<div style={thirdFont.style} className={styles.roadMap}>Road Map</div>
      			<div className={styles.loremIpsumDolorContainer}>
        				<p style={secondFont.style} className={styles.blankLine}>Delve into the world of Coliseum Project - where innovation meets ambition. Rooted in a rich legacy of pioneering ideas, we stand as a testament to the relentless spirit of pushing boundaries. Our journey is not just about achieving milestones but also about crafting experiences and building lasting legacies. Dive in, and get to know the passion, ethos, and vision that shape the Coliseum Project. Join us as we sculpt the future, one groundbreaking endeavor at a time. Welcome to our arena.  </p>
        				<p className={styles.blankLine}>&nbsp;</p>
        				
      			</div>
      			<div className={styles.loremIpsumDolorContainer1}>
        				<p style={secondFont.style} className={styles.blankLine}>At Coliseum, we prioritize the security and trust of our community above all. Every smart contract under our banner has undergone rigorous auditing by industry-leading experts, ensuring their robustness and impenetrability. We believe in setting the gold standard in blockchain security, and as such, our smart contracts reflect our commitment to safeguarding your interests. With Coliseum, you're not just investing in a project, but also in a fortress of trust and reliability. Rest assured, with our fully audited and secure smart contracts, you're in safe hands  </p>
        				<p style={secondFont.style} className={styles.blankLine}>&nbsp;</p>
        				
      			</div>
      			<div style={secondFont.style} className={styles.loremIpsumDolor7}>Welcome to our journey's blueprint - a strategic roadmap meticulously designed to chart our course towards a visionary future. As we delve into the intricate tapestry of our goals, we invite you to explore every twist, turn, and milestone we've set out to achieve. Our roadmap isn't just a set of tasks or deadlines; it embodies our commitment, passion, and innovation in our quest for excellence. Whether you're a stakeholder, team member, or a curious visitor, step into our world and witness firsthand how we transform our ambitions into tangible realities. Embrace the adventure ahead and discover what makes our roadmap the beacon that lights our path forward. Welcome aboard!  </div>
      		
      			<div className={styles.vectorParent}>
        				<Image className={styles.groupItem} alt="" src={Snake} />
        		
        				
        				<div className={styles.frameDiv} />
        				<div className={styles.groupChild3} />
        				<div className={styles.groupChild4} />
        				<div className={styles.groupChild5} />
        				<div className={styles.groupChild6} />
        				<div className={styles.groupChild7} />
        				<div className={styles.groupChild8} />
        				<div className={styles.groupChild9} />
        				<div className={styles.groupChild10} />
        				<div style={myFont.style}   className={styles.q1}>Q3 2023</div>
        				<div style={myFont.style}  className={styles.q3}>Q1 2024</div>
        				<div  style={myFont.style} className={styles.q2}>Q2</div>
        				<div  style={myFont.style} className={styles.q4}>Q4 2025</div>
        				<div className={styles.distributionTokenCbcContainer}>
          					<p style={fourthFont.style} className={styles.blankLine}>Launch the beta version of the Coliseum platform, allowing a select group of users to test its functionalities and provide feedback. Start a pre-seed funding round to attract early investors and lay the groundwork for future expansion. Initiate our social media and marketing strategy, crafting a brand image and generating buzz in the crypto and financial communities. Launch the Initial DEX Offering (IDO) for CMAX, providing the public with their first opportunity to acquire the cornerstone token of our ecosystem.  </p>
          					
        				</div>
        				<div className={styles.distributionTokenCbcContainer1}>
          					<p style={fourthFont.style} className={styles.blankLine}>The official release of the Coliseum mobile application allows users to trade and manage their portfolios on the go.

Organize global roadshows and webinars, educating potential users on the benefits of tokenized assets and our platform.

Initiate partnerships with traditional financial institutions, bridging centralized finance and the decentralized world.  </p>
          				
        				</div>
        				<div className={styles.distributionTokenCbcContainer2}>
          					<p style={fourthFont.style} className={styles.blankLine}>Start acquiring global licenses, ensuring the Coliseum platform operates legally in as many countries as possible.Incorporate bonds and Bitcoin into our treasury, solidifying our financial backbone and diversifying our asset base.Begin developing the Coliseum mobile application, focusing on a seamless user experience. </p>

        				</div>
        				<div className={styles.distributionTokenCbcContainer3}>
          					<p style={fourthFont.style} className={styles.blankLine}>Implement Layer 2 solutions to mitigate potential scalability issues, ensuring swift transactions at lower costs.

Explore the possibility of tokenizing commodities and precious metals, further diversifying our asset offerings.

Open physical offices in key financial hubs worldwide, solidifying our global presence and enhancing user trust. </p>
          					
        				</div>
      			</div>
      			<Image className={styles.rectangleIcon} alt="" src={Abouts} />
      			
    		</div>
			
			</div>
			);
};

export default HomepageAbout;
