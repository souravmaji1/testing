import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './home.module.css';
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

const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});





const HomepageBlack:NextPage = () => {

	
	  
    
  	const onTradeText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onAboutText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onEllipseIconClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	return (
		<div>

<div className={styles.mobile}>
<Mobile />
</div>




<div className={styles.ipad}>


<Ipad />


</div>




    		<div className={styles.homepageBlack}>


<div className={styles.navbars}>
				<Navbar />
			  </div>



      			<Image className={styles.homepageBlackChild} alt="" src={Flower} />
      			<div className={styles.homepageBlackItem} >
					
				 
					</div>
      			<div className={styles.homepageBlackInner} >
					
				  
					</div>
      			<div className={styles.ellipseDiv} />
      			<div className={styles.homepageBlackChild1} />
      			<div className={styles.homepageBlackChild2} />
      			<Image className={styles.homepageBlackChild3} alt="" src={Circ} />
      			<Image className={styles.homepageBlackChild4} alt="" src={Circ} />
      			<Image className={styles.homepageBlackChild5} alt="" src={Leftcir} />
      			<div className={styles.homepageBlackChild6} />
      			<Image className={styles.homepageBlackChild7} alt="" src={Circles} /> 
      			<div className={styles.rwfa}>RWFA</div>
      			<div style={fourthFont.style} className={styles.unveilingANew1}> Discover the power of tokenization </div>
      			<div style={myFont.style} className={styles.discoverTheRwfa}>Explore new tokenized digital assets as : Fiscal Credit, ETFs and more...  </div>
      			<img className={styles.homepageBlackChild8} alt="" src="Group 7.svg" />
      			<div className={styles.btnParent}>
        				<div className={styles.btn}>
          					<Image className={styles.btnChild} alt="" src={Btn} />
          					<div style={thirdFont.style}  className={styles.startTrading}><a href='/trade'>Start Trading</a></div>
        				</div>
        				<div className={styles.carbonplayFilledParent}>
          					<Image className={styles.carbonplayFilledIcon1} alt="" src={Video} />
          					<div style={fourthFont.style} className={styles.watchTutorial}>Watch Tutorial</div>
        				</div>
      			</div>
      			<div className={styles.rectangleDiv} />
      			<div className={styles.text3}>{` `}</div>
      			<div className={styles.frameParent}>
        				<div className={styles.groupParent}>
          					<div className={styles.downloadOurWhitePaperForIParent}>
            						<div style={thirdFont.style} className={styles.downloadOurWhite1}>Download Our White Paper for In-Depth Insights</div>
            						<div style={secondFont.style} className={styles.diveIntoThe1}>📥 Dive into the comprehensive details of the Coliseum DApp by downloading our white paper. Gain a deeper understanding of the revolutionary features, innovative functionalities, and the vision that drives our project forward. Stay ahead of the curve and explore the potential that awaits. Download now and embark on a journey of knowledge and innovation. 🚀</div>
          					</div>
          					<div className={styles.mingcutewallet4FillParent}>
            						<Image className={styles.carbonplayFilledIcon1} alt="" src={Arrow} />
            						<div style={thirdFont.style} className={styles.downloadWhitepaper}><a href='https://moodglobalservices.notion.site/Coliseum-White-Paper-fa2c3eb3583b454a8a4d7ad8d4360391?pvs=4'>READ OUR WHITEPAPER</a></div>
          					</div>
        				</div>
        				<div className={styles.rectangleParent}>
          					<div className={styles.groupChild} />
          					<div className={styles.frameGroup}>
            						<Image className={styles.frameIcon} alt="" src={Frame} />
            						<div className={styles.rwfaParent}>
              							<div style={myFont.style} className={styles.rwfa1}>RWFA</div>
              							<div style={myFont.style}  className={styles.whitepaper}>Whitepaper</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div style={thirdFont.style} className={styles.discoverOurBenefits1}>Discover Our Benefits</div>
      			<div  style={secondFont.style} className={styles.elevateYourFinancial1}>Elevate your financial experience with Coliseum DApp – where decentralized power meets security, offering cross-border transactions and smart contract capabilities for a future-forward journey.</div>
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.homepageBlackChild9} />
				
      			<div className={styles.homepageBlackChild10} />
      			<div className={styles.homepageBlackChild11} />
      			<div className={styles.homepageBlackChild12} />
      			<div className={styles.homepageBlackChild13} />
      			<div className={styles.homepageBlackChild14} />
      			<div style={myFont.style} className={styles.seamlessFinancialInclusion1}>Seamless Financial Inclusion</div>
      			<div style={myFont.style} className={styles.decentralizedControl}>Decentralized Control</div>
      			<Image className={styles.groupIcon1} alt="" src={Six} />
      			<div style={myFont.style} className={styles.enhancedSecurity}>Enhanced Security</div>
      			<div style={myFont.style} className={styles.smartContractCapabilities1}>Smart Contract Capabilities</div>
      			<div style={myFont.style} className={styles.reducedFees}>Reduced Fees</div>
      			<div style={myFont.style} className={styles.effortlessCrossBorderTransa1}>Effortless Cross-Border Transactions</div>
      			<div style={secondFont.style} className={styles.joinAPlatform1}>Join a platform designed to bridge the gap between traditional financial systems and the digital world, ensuring access to financial services for all.</div>
      			<div style={secondFont.style} className={styles.enjoyThePower1}>Enjoy the power of decentralization, where users have more control over their assets and transactions, reducing dependence on intermediaries</div>
      			<div style={secondFont.style} className={styles.experienceEnhancedSecurity1}>Experience enhanced security through blockchain technology, providing tamper-resistant records and advanced encryption to protect your data and transactions</div>
      			<div style={secondFont.style} className={styles.leverageSmartContracts1}>Leverage smart contracts to automate agreements and transactions, ensuring transparency and eliminating the need for intermediaries</div>
      			<div style={secondFont.style} className={styles.benefitFromLower1}>Benefit from lower transaction fees compared to traditional financial systems, maximizing the value of your transactions</div>
      			<div style={secondFont.style} className={styles.sendAndReceive1}>Send and receive funds globally without the complexities of traditional banking systems, making international transactions faster and more cost-effective</div>
      			<Image className={styles.groupicon1} alt="" src={One} />
      			<Image className={styles.groupIcon2} alt="" src={Fou} />
      			<Image className={styles.groupIcon3} alt="" src={Two} />
      			<Image className={styles.groupIcon4} alt="" src={Three} />
      			<Image className={styles.groupIcon5} alt="" src={Fif} />
      			
      			<div className={styles.homepageBlackChild16} >
					<Footer />
					</div>
      			
      			
      			<div className={styles.joinOurCommunityParent}>
        				<div style={thirdFont.style} className={styles.joinOurCommunity1}>Join our community</div>
        				<div style={secondFont.style} className={styles.diveIntoA1}>Dive into a thriving hub of shared knowledge and innovation, uniting with us to shape the future of finance through Coliseum DApp. Your participation drives our collective journey toward decentralized excellence.</div>
        				<div style={{display:'flex',alignItems:"center",justifyContent:'center',marginTop:'294px',gap:'20px'}}>
						<Image className={styles.groupIte} alt="" src={Github} />
						<Image className={styles.groupIte} alt="" src={Twitter} />
						<Image className={styles.groupIte} alt="" src={Linkedin} />
						<Image className={styles.groupIte} alt="" src={Notion} />
							</div>  
      			</div>
      			<div className={styles.homepageBlackChild17} />
      			<Image className={styles.shutterstock2152297015ConveIcon} alt="" src={Home} />


				

      			<div className={styles.homeParent}>



		
        				<div style={fourthFont.style}  className={styles.home}><a href='/'>Home</a></div>
        				<div style={fourthFont.style} className={styles.trade1}><a href='/trade'>Trade</a></div>
        				<div  style={fourthFont.style} className={styles.trade1}><a href='/stake'>Stake</a></div>
						<div style={fourthFont.style}  className={styles.trade1}><a href='/about'>About</a></div>
        				<div style={fourthFont.style} className={styles.trade1} ><a href='/profile'>Profile</a></div>
					

      			</div>
      			
      			<div className={styles.mingcutewallet4FillGroup}>
        				<Image className={styles.carbonplayFilledIcon1} alt="" src={Wallet} />
        				<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none',color:'black'}}
						/>
      			</div>
      			
      			<img className={styles.unionIcon4} alt="" src="Union.svg" />
      			<Image className={styles.unionIcon5} alt="" src={Star} />
      			<Image className={styles.homepageBlackChild5} alt="" src={Leftcir} />
      			<div className={styles.rectangleGroup}>
        				<div className={styles.groupInner} />
        				<div className={styles.groupChild1} />
        				<img className={styles.carbonplayFilledIcon2} alt="" src="carbon:play-filled.svg" />
      			</div>
      			<div style={thirdFont.style}  className={styles.treasuryTokens1}>{`Treasury & Tokens Ecosystem`}</div>
      			<div style={secondFont.style}  className={styles.immerseYourselfIn1}>The core of our treasury is anchored in tax credits and country bonds, two assets that offer both stability and appreciable benefits:  </div>
        				<Image className={styles.maskGroupIcon6} alt="" src={Stats} />
        				<div className={styles.homepageBlackChild20} />
        				<Image className={styles.frameIcon3} alt="" src={Green} />
        				<div style={secondFont.style} className={styles.totalTradingVolume2}>Total Trading Volume</div>
        				<div className={styles.homepageBlackChild21} />
        				<Image className={styles.frameIcon4} alt="" src={White} />
        				<div style={thirdFont.style} className={styles.cmax24}>Cmax +24%</div>
        				<div style={secondFont.style} className={styles.totalTradingVolume3}>Total Trading Volume</div>
        				<div  style={thirdFont.style} className={styles.tita24}>Tita +24%</div>
        				<div  style={thirdFont.style} className={styles.div}>150.000.000,00 €</div>
        				<div  style={thirdFont.style} className={styles.treasury}>Treasury</div>
        				<div style={thirdFont.style}  className={styles.rsc}>150.000.000 RSC</div>
        				<div className={styles.div1}>=</div>
      			</div>
				</div>
				);
      			};
      			
      			export default HomepageBlack;
      			