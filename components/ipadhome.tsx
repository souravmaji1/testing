import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './ipadhome.module.css';



import Image from 'next/image';
import Btn from '../public/Rectangle 334.svg';
import Home from '../public/shutterstock_2152297015-[Converted] 1.png';
import Video from '../public/carbon_play-filled.svg';
import Headlogo from '../public/logs.png';
import Frame from '../public/Frame.svg';
import Stats from '../public/shutterstock_1007444929-[Converted] 1.png'
import One from '../public/one.png';
import Two from '../public/two.png';
import Three from '../public/three.png';
import Fou from '../public/cc.png';
import Fif from '../public/bb.png';
import Six from '../public/aa.png';
import Wallet from '../public/mingcute_wallet-4-fill.svg';
import User from '../public/Ellipse 59.svg';
import Arrow from '../public/arrow.svg';
import Green from '../public/gr.svg';
import White from '../public/wh.svg';
import Circles from '../public/Circle BG.svg';
import Star from '../public/Union.png';
import Circ from '../public/Group 8.png';
import Leftcir from '../public/Group 1000000925.png';
import Rectangle from '../public/Rectangle 349.png';
import Partner from '../public/Partners-Logos.png';
import Flower from '../public/Group 1000000920.png';
import { ConnectWallet } from '@thirdweb-dev/react';
import localFont from 'next/font/local';
import React, { useEffect } from "react";
import Sliders from '../components/slider';
import Github from '../public/mdi_github.svg';
import Twitter from '../public/mdi_twitter.svg';
import Linkedin from '../public/entypo-social_linkedin-with-circle.svg';
import Notion from '../public/mingcute_notion-fill.svg';
import Footer from '../components/aboutfooter';
import { useState } from 'react';
import Navbar from '../components/navbar';
import Mobile from '../components/mobile';
import Ipad from '../components/ipadhome';
import Btx from '../public/btx.png';
import { graphql } from 'msw';


const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});













const HomeIPadPro1291:NextPage = () => {
  	
  	const onTradeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onAboutTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onEllipseIconClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.homeIpadPro1291}>
      			<div className={styles.homeIpadPro1291Child} />
      			<img className={styles.homeIpadPro1291Item} alt="" src="Group 1000000920.png" />
      			<div className={styles.joinOurCommunityParent}>
        				<div style={thirdFont.style}  className={styles.joinOurCommunity1}>Join our community</div>
        				<div style={secondFont.style}    className={styles.diveIntoA1}>Dive into a thriving hub of shared knowledge and innovation, uniting with us to shape the future of finance through Coliseum DApp. Your participation drives our collective journey toward decentralized excellence.</div>
        				<img className={styles.groupChild} alt="" src="Group 2.png" />
      			</div>
      			<div className={styles.homeIpadPro1291Inner} />
      			<div className={styles.ellipseDiv} />
      			<Image className={styles.frameIcon} alt="" src={Circ} />
      			<Image className={styles.homeIpadPro1291Child1} alt="" src={Circ} />
      			<Image className={styles.homeIpadPro1291Child2} alt="" src={Leftcir} />
      			<img className={styles.shutterstock2152297015ConveIcon} alt="" src="shutterstock_2152297015-[Converted] 1.png" />
      			<Image className={styles.circleBgIcon} alt="" src={Leftcir} />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.homeParent}>
        				<div style={fourthFont.style}  className={styles.home}><a href='/'>Home</a></div>
        				<div style={fourthFont.style}   className={styles.trade} ><a href='/trade'>Trade</a></div>
        				<div style={fourthFont.style}  className={styles.trade} ><a href='/stake'>Stake</a></div>
        				<div style={fourthFont.style}  className={styles.trade} ><a href='/about'>About</a></div>
						<div style={fourthFont.style}  className={styles.trade} ><a href='/profile'>Profile</a></div>
      			</div>

      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon2} alt="" src={Wallet} />
        				<div className={styles.connectWallet}>
						<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none',color:'black'}}
						/>
						</div>
      			</div>
      			<img className={styles.unionIcon3} alt="" src="Union.png" />
      			<img className={styles.unionIcon4} alt="" src="Union.png" />
      			<img className={styles.unionIcon5} alt="" src="Union.png" />
      			<div className={styles.btnParent}>
        				<div className={styles.btn}>
          					<Image className={styles.btnChild} alt="" src={Btx} />
          					<div style={thirdFont.style}  className={styles.startTrading}>Start Trading</div>
        				</div>
        				<div className={styles.carbonplayFilledParent}>
          					<Image className={styles.carbonplayFilledIcon1} alt="" src={Video} />
          					<div style={thirdFont.style}  className={styles.watchTutorial}>Watch Tutorial</div>
        				</div>
      			</div>
      			<div className={styles.rectangleDiv} />
      			<div className={styles.frameParent}>
        				<div className={styles.groupParent}>
          					<div className={styles.downloadOurWhitePaperForIParent}>
            						<div style={thirdFont.style}  className={styles.downloadOurWhite1}>Download Our White Paper for In-Depth Insights</div>
            						<div style={secondFont.style}   className={styles.diveIntoThe1}>📥 Dive into the comprehensive details of the Coliseum DApp by downloading our white paper. Gain a deeper understanding of the revolutionary features, innovative functionalities, and the vision that drives our project forward. Stay ahead of the curve and explore the potential that awaits. Download now and embark on a journey of knowledge and innovation. 🚀</div>
          					</div>
          					<div className={styles.mingcutewallet4FillGroup}>
            						<img className={styles.carbonplayFilledIcon1} alt="" src="mingcute:wallet-4-fill.png" />
            						<div style={secondFont.style}   className={styles.connectWallet}><a href='https://moodglobalservices.notion.site/Coliseum-White-Paper-fa2c3eb3583b454a8a4d7ad8d4360391?pvs=4'>READ OUR WHITEPAPER</a></div>
          					</div>
        				</div>
        				<div className={styles.rectangleParent}>
          					<div className={styles.groupItem} />
          					<div className={styles.frameGroup}>
            						<Image className={styles.frameIcon1} alt="" src={Frame} />
            						<div className={styles.rwfaParent}>
              							<div style={myFont.style}   className={styles.rwfa}>RWFA</div>
              							<div style={myFont.style}   className={styles.whitepaper}>Whitepaper</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.homeIpadPro1291Child4} />
      			<div className={styles.rectangleGroup}>
        				<div className={styles.groupInner} />
        				<div className={styles.groupChild1} />
        				<img className={styles.carbonplayFilledIcon2} alt="" src="carbon:play-filled.png" />
      			</div>
      			<div style={thirdFont.style}  className={styles.treasuryTokens1}>{`Treasury & Tokens Ecosystem`}</div>
      			<div style={secondFont.style}  className={styles.immerseYourselfIn1}>Immerse yourself in a dynamic visual tour showcasing the Coliseum DApp's transformative capabilities, from secure transactions to decentralized empowerment.</div>
        				<div className={styles.groupDiv}>
          					<div className={styles.rectangleContainer}>
            						<div className={styles.groupChild2} />
            						<div className={styles.frameParent1}>
              							<Image className={styles.frameIcon2} alt="" src={Green} />
              							<div style={thirdFont.style}  className={styles.totalTradingVolume2}>Total Trading Volume</div>
              							<div style={thirdFont.style}  className={styles.cmax24}>Cmax +24%</div>
            						</div>
          					</div>
          					<div className={styles.rectangleParent1}>
            						<div className={styles.groupChild2} />
            						<div className={styles.frameParent1}>
              							<Image className={styles.frameIcon2} alt="" src={White} />
              							<div style={thirdFont.style}  className={styles.totalTradingVolume2}>Total Trading Volume</div>
              							<div style={thirdFont.style}  className={styles.tita24}>Tita +24%</div>
            						</div>
          					</div>
          					<div className={styles.maskGroupParent}>
            						<Image className={styles.maskGroupIcon1} alt="" src={Stats} />
            						<div style={thirdFont.style}   className={styles.div}>59.000.000,00 €</div>
            						<div className={styles.div1}>=</div>
            						<div style={thirdFont.style}   className={styles.treasury}>Treasury</div>
            						<div style={thirdFont.style}   className={styles.rsc}>59.000.000 RSC</div>
          					</div>
        				</div>
        				<div className={styles.benefits}>
          					<div className={styles.benefitsChild} />
          					<div className={styles.benefitsItem} />
          					<div className={styles.benefitsInner} />
          					<div style={thirdFont.style}   className={styles.discoverOurBenefits1}>Discover Our Benefits</div>
          					<div style={secondFont.style}   className={styles.elevateYourFinancial1}>Elevate your financial experience with Coliseum DApp – where decentralized power meets security, offering cross-border transactions and smart contract capabilities for a future-forward journey.</div>
          					<div className={styles.benefitsChild1} />
          					<div className={styles.benefitsChild2} />
          					<div className={styles.benefitsChild3} />
          					<div className={styles.benefitsChild4} />
          					<div className={styles.benefitsChild5} />
          					<div className={styles.benefitsChild6} />
          					<div  style={myFont.style}  className={styles.seamlessFinancialInclusion1}>Seamless Financial Inclusion</div>
          					<div style={myFont.style}   className={styles.enhancedSecurity}>Enhanced Security</div>
          					<div  style={myFont.style}   className={styles.effortlessCrossBorderTransa1}>Effortless Cross-Border Transactions</div>
          					<div  style={myFont.style}   className={styles.enhancedSecurity1}>Enhanced Security</div>
          					<div  style={myFont.style}  className={styles.smartContractCapabilities1}>Smart Contract Capabilities</div>
          					<div   style={myFont.style}  className={styles.decentralizedControl}>Decentralized Control</div>
          					<div  style={secondFont.style}  className={styles.joinAPlatform1}>Join a platform designed to bridge the gap between traditional financial systems and the digital world, ensuring access to financial services for all.</div>
          					<div   style={secondFont.style} className={styles.experienceEnhancedSecurity1}>Experience enhanced security through blockchain technology, providing tamper-resistant records and advanced encryption to protect your data and transactions</div>
          					<div   style={secondFont.style} className={styles.sendAndReceive1}>Send and receive funds globally without the complexities of traditional banking systems, making international transactions faster and more cost-effective</div>
          					<div  style={secondFont.style}  className={styles.benefitFromLower2}>Benefit from lower transaction fees compared to traditional financial systems, maximizing the value of your transactions</div>
          					<div   style={secondFont.style}  className={styles.leverageSmartContracts1}>Leverage smart contracts to automate agreements and transactions, ensuring transparency and eliminating the need for intermediaries</div>
          					<div   style={secondFont.style} className={styles.benefitFromLower3}>Benefit from lower transaction fees compared to traditional financial systems, maximizing the value of your transactions</div>
          					<Image className={styles.groupIcon} alt="" src={One} />
          					<Image className={styles.benefitsChild7} alt="" src={Two} />
          					<Image className={styles.benefitsChild8} alt="" src={Three} />
          					<Image className={styles.benefitsChild9} alt="" src={Fou} />
          					<Image className={styles.benefitsChild10} alt="" src={Fif} />
          					<Image className={styles.benefitsChild11} alt="" src={Six} />
        				</div>
        			
        				<div className={styles.rectangleParent2}>
          					<div className={styles.groupChild4} />
          					<div className={styles.maskGroupGroup}>
            						<Image className={styles.maskGroupIcon6} alt="" src={Headlogo} />
            						<div className={styles.mediaInquiresForCmaxContParent}>
              							<div  style={secondFont.style}  className={styles.mediaInquiresFor1}>Media inquires for CMax - Contact media@cmax.com</div>
              							<div className={styles.mediaInquiresFor1}>Copy Right 2023 - CMax. All Rights Reserved</div>
            						</div>
            						<div className={styles.tradeParent}>
              							<div style={secondFont.style}  className={styles.contactUs}>Trade</div>
              							<div style={secondFont.style}  className={styles.contactUs}>Stake</div>
              							<div  style={secondFont.style}  className={styles.contactUs}>About</div>
              							<div className={styles.contactUs}>Contact Us</div>
              							<div className={styles.contactUs}>Privacy Policy</div>
              							<div className={styles.contactUs}>{`Terms & Conditions`}</div>
            						</div>
          					</div>
        				</div>
        				<div style={thirdFont.style} className={styles.unveilingANew1}>Discover the power of tokenization </div>
        				<div style={myFont.style}   className={styles.discoverTheRwfa}>Explore new tokenized digital assets as : Fiscal Credit, ETFs and more...</div>
      			</div>);
      			};
      			
      			export default HomeIPadPro1291;
      			