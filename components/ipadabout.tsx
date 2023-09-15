import type { NextPage } from 'next';
import { useCallback } from 'react';
import {useRouter} from "next/router";
import styles from './ipadabout.module.css';

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
import Rightone from '../public/Group 8.png';
import Back from '../public/aboutbac.png';


const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});


const AboutIPadPro1293:NextPage = () => {
  	const router = useRouter();
  	
  	const onTradeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onAboutTextClick = useCallback(() => {
    		router.push("/");
  	}, [router]);
  	
  	
  	const onEllipseIconClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.aboutIpadPro1293}>
      			<Image className={styles.aboutIpadPro1293Child} alt="" src={Rightone} />
      			<div className={styles.aboutIpadPro1293Item} />
      			<Image className={styles.circleBgIcon} alt="" src={Circles} />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.homeParent}>
        				<div style={fourthFont.style}  className={styles.home}><a href='/'>Home</a></div>
        				<div style={fourthFont.style}  className={styles.trade} ><a href='/trade'>Trade</a></div>
        				<div style={fourthFont.style}  className={styles.trade}><a href='/stake'></a>Stake</div>
        				<div style={fourthFont.style}   className={styles.about} ><a href='/about'>About</a></div>
						<div style={fourthFont.style}  className={styles.trade}><a href='/profile'></a>Profile</div>
      			</div>
      			
      			<div className={styles.mingcutewallet4FillParent}>
				  <ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none',color:'black'}}
						/>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallet} />
        				<div className={styles.connectWallet}></div>
      			</div>
      			<img className={styles.unionIcon2} alt="" src="Union.png" />
      			<img className={styles.unionIcon3} alt="" src="Union.png" />
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.maskGroupParent}>
          					<Image className={styles.maskGroupIcon1} alt="" src={Headlogo} />
          					<div className={styles.mediaInquiresForCmaxContParent}>
            						<div className={styles.mediaInquiresFor1}>Media inquires for CMax - Contact media@cmax.com</div>
            						<div className={styles.mediaInquiresFor1}>Copy Right 2023 - CMax. All Rights Reserved</div>
          					</div>
          					<div className={styles.tradeParent}>
            						<div className={styles.home}>Trade</div>
            						<div className={styles.home}>Stake</div>
            						<div className={styles.home}>About</div>
            						<div className={styles.home}>Contact Us</div>
            						<div className={styles.home}>Privacy Policy</div>
            						<div className={styles.home}>{`Terms & Conditions`}</div>
          					</div>
        				</div>
      			</div>
      			<div style={myFont.style}  className={styles.aboutUs}>About Us</div>
      			<div style={thirdFont.style}  className={styles.roadMap}>Road Map</div>
      			<div style={thirdFont.style}  className={styles.ourVision1}>{`Audit`}</div>
      			<div className={styles.loremIpsumDolorContainer}>
        				<p style={secondFont.style}  className={styles.blankLine}>Delve into the world of Coliseum Project - where innovation meets ambition. Rooted in a rich legacy of pioneering ideas, we stand as a testament to the relentless spirit of pushing boundaries. Our journey is not just about achieving milestones but also about crafting experiences and building lasting legacies. Dive in, and get to know the passion, ethos, and vision that shape the Coliseum Project. Join us as we sculpt the future, one groundbreaking endeavor at a time. Welcome to our arena.   </p>
        				<p className={styles.blankLine}>&nbsp;</p>
        				
      			</div>
      			<div className={styles.loremIpsumDolorContainer1}>
        				<p style={secondFont.style}   className={styles.blankLine}>Welcome to our journey's blueprint - a strategic roadmap meticulously designed to chart our course towards a visionary future. As we delve into the intricate tapestry of our goals, we invite you to explore every twist, turn, and milestone we've set out to achieve. Our roadmap isn't just a set of tasks or deadlines; it embodies our commitment, passion, and innovation in our quest for excellence. Whether you're a stakeholder, team member, or a curious visitor, step into our world and witness firsthand how we transform our ambitions into tangible realities. Embrace the adventure ahead and discover what makes our roadmap the beacon that lights our path forward. Welcome aboard!</p>
        				<p className={styles.blankLine}>&nbsp;</p>
        				
      			</div>
      			<div className={styles.loremIpsumDolorContainer2}>
        				<p style={secondFont.style}  className={styles.blankLine}>At Coliseum, we prioritize the security and trust of our community above all. Every smart contract under our banner has undergone rigorous auditing by industry-leading experts, ensuring their robustness and impenetrability. We believe in setting the gold standard in blockchain security, and as such, our smart contracts reflect our commitment to safeguarding your interests. With Coliseum, you're not just investing in a project, but also in a fortress of trust and reliability. Rest assured, with our fully audited and secure smart contracts, you're in safe hands  </p>
        				<p className={styles.blankLine}>&nbsp;</p>
        			
      			</div>
      			<div className={styles.vectorParent}>
        				<img className={styles.groupItem} alt="" src="Vector 19.png" />
        				<div className={styles.groupInner} />
        				<div className={styles.ellipseDiv} />
        				<div className={styles.groupChild1} />
        				<div className={styles.groupChild2} />
        				<div className={styles.div}>1</div>
        				<div className={styles.div1}>2</div>
        				<div className={styles.div2}>3</div>
        				<div className={styles.div3}>4</div>
        				<div className={styles.frameDiv} />
        				<div className={styles.groupChild3} />
        				<div className={styles.groupChild4} />
        				<div className={styles.groupChild5} />
        				<div className={styles.groupChild6} />
        				<div className={styles.rectangleDiv} />
        				<div className={styles.groupChild7} />
        				<div className={styles.groupChild8} />
        				<div className={styles.groupChild9} />
        				<div style={myFont.style}   className={styles.q1}>Q1</div>
        				<div style={myFont.style}   className={styles.q3}>Q3</div>
        				<div style={myFont.style}  className={styles.q2}>Q2</div>
        				<div  style={myFont.style}  className={styles.q4}>Q4</div>
        				<div className={styles.distributionTokenCbcContainer}>
          					<p style={thirdFont.style}  className={styles.blankLine}>distribution token CBC</p>
          					<p style={thirdFont.style}  className={styles.blankLine}>Portfolio Diversification</p>
          					<p style={thirdFont.style}   className={styles.blankLine}>Global Transactions</p>
          					<p  style={thirdFont.style}  className={styles.blankLine}>Asset Tokenization</p>
        				</div>
        				<div className={styles.distributionTokenCbcContainer1}>
          					<p style={thirdFont.style}   className={styles.blankLine}>distribution token CBC</p>
          					<p style={thirdFont.style}   className={styles.blankLine}>Portfolio Diversification</p>
          					<p style={thirdFont.style}   className={styles.blankLine}>Global Transactions</p>
          					<p style={thirdFont.style}   className={styles.blankLine}>Asset Tokenization</p>
        				</div>
        				<div className={styles.distributionTokenCbcContainer2}>
          					<p style={thirdFont.style}   className={styles.blankLine}>distribution token CBC</p>
          					<p style={thirdFont.style}   className={styles.blankLine}>Portfolio Diversification</p>
          					<p style={thirdFont.style}   className={styles.blankLine}>Global Transactions</p>
          					<p  style={thirdFont.style} className={styles.blankLine}>Asset Tokenization</p>
        				</div>
        				<div className={styles.distributionTokenCbcContainer3}>
          					<p style={thirdFont.style}  className={styles.blankLine}>distribution token CBC</p>
          					<p style={thirdFont.style}   className={styles.blankLine}>Portfolio Diversification</p>
          					<p  style={thirdFont.style} className={styles.blankLine}>Global Transactions</p>
          					<p style={thirdFont.style}   className={styles.blankLine}>Asset Tokenization</p>
        				</div>
      			</div>
      			
      			<div className={styles.frameParent}>
        				
      			</div>
    		</div>);
};

export default AboutIPadPro1293;
