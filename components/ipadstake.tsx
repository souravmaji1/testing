import type { NextPage } from 'next';
import { useState, useCallback } from 'react';
import ToolTip from "../components/tool-tip";
import PortalPopup from "../components/portal-popup";
import {useRouter} from "next/router";
import styles from './ipadstake.module.css';

import Wallet from '../public/mingcute_wallet-4-fill.svg';
import User from '../public/Ellipse 59.svg';
import Headlogo from '../public/logs.png';
import Image from 'next/image';
import Circles from '../public/Group 6.png';
import Star from '../public/Union.png';
import Rectangle from '../public/Rectangle 349.png';
import One from '../public/one.png';
import Two from '../public/Group.svg';
import Three from '../public/thrs.svg';
import Fourth from '../public/cc.png';
import Mask from '../public/bacu.png'
import Dollar from '../public/ant-design_dollar-outlined.svg';
import Right from '../public/ep_arrow-right-bold.svg';
import Left from '../public/ep_arrow-right-bold (1).svg';
import Flower from '../public/back.png';
import Github from '../public/mdi_github.svg';
import Twitter from '../public/mdi_twitter.svg';
import Linkedin from '../public/entypo-social_linkedin-with-circle.svg';
import Notion from '../public/mingcute_notion-fill.svg';
import localFont from 'next/font/local';
import Sliders from '../components/slider';
import Green from "../public/grk.png";
import Chart from '../components/stakechart';
import { ConnectWallet } from '@thirdweb-dev/react';
import PriceView from "../pages/test"
import Cmax from '../components/mintcmax';
import Navbar from '../components/tradenav';
import Footer from '../components/footer';
import StakeMobile from '../components/stakemobile';
import IpadStake from '../components/ipadstake';

const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});



const StakeIPadPro1292:NextPage = () => {
  	const [isToolTipOpen, setToolTipOpen] = useState(false);
  	const [isToolTip1Open, setToolTip1Open] = useState(false);
  	const [isToolTip2Open, setToolTip2Open] = useState(false);
  	const [isToolTip3Open, setToolTip3Open] = useState(false);
  	const router = useRouter();
  	
  	const onTradeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeTextClick = useCallback(() => {
    		router.push("/");
  	}, [router]);
  	
  	
  	const onAboutTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onEllipseIconClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const openToolTip = useCallback(() => {
    		setToolTipOpen(true);
  	}, []);
  	
  	const closeToolTip = useCallback(() => {
    		setToolTipOpen(false);
  	}, []);
  	
  	
  	const openToolTip1 = useCallback(() => {
    		setToolTip1Open(true);
  	}, []);
  	
  	const closeToolTip1 = useCallback(() => {
    		setToolTip1Open(false);
  	}, []);
  	
  	
  	const openToolTip2 = useCallback(() => {
    		setToolTip2Open(true);
  	}, []);
  	
  	const closeToolTip2 = useCallback(() => {
    		setToolTip2Open(false);
  	}, []);
  	
  	
  	const openToolTip3 = useCallback(() => {
    		setToolTip3Open(true);
  	}, []);
  	
  	const closeToolTip3 = useCallback(() => {
    		setToolTip3Open(false);
  	}, []);
  	
  	
  	const onGroupContainer5Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (<>
    		<div className={styles.stakeIpadPro1292}>
      			<div className={styles.stakeIpadPro1292Child} />
      			<img className={styles.stakeIpadPro1292Item} alt="" src="Group 1000000920.png" />
      			<div className={styles.joinOurCommunityParent}>
        				<div style={thirdFont.style}  className={styles.joinOurCommunity1}>Join our community</div>
        				<div  style={secondFont.style}  className={styles.diveIntoA1}>Dive into a thriving hub of shared knowledge and innovation, uniting with us to shape the future of finance through Coliseum DApp. Your participation drives our collective journey toward decentralized excellence.</div>
        				<img className={styles.groupChild} alt="" src="Group 2.png" />
      			</div>
      			<Image className={styles.circleBgIcon} alt="" src={Circles} />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.homeParent}>
        				<div style={fourthFont.style}  className={styles.home}> <a href='/'>Home</a> </div>
        				<div style={fourthFont.style}  className={styles.trade}><a href='/trade'>Trade</a></div>
        				<div style={fourthFont.style}   className={styles.stake} ><a href='/stake'>Stake</a></div>
        				<div style={fourthFont.style}  className={styles.trade} ><a href='/profile'>Profile</a></div>
      			</div>

				  
      			
      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallet} />
						<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none'}}
						/>
        				<div className={styles.connectWallet}>
						
						</div>
      			</div>
      			<img className={styles.unionIcon2} alt="" src="Union.png" />
      			<img className={styles.unionIcon3} alt="" src="Union.png" />
      			
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupItem} />
        				<div className={styles.maskGroupParent}>
          					<Image className={styles.maskGroupIcon5} alt="" src={Headlogo} />
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
      			<div style={myFont.style}  className={styles.stakingBenefits}>Staking benefits</div>
      			<div style={secondFont.style}  className={styles.stakingInBlockchain1}>Staking in blockchain involves participants, called "stakers" or "validators," locking up their cryptocurrency holdings to support the network.</div>
      			
      			<div className={styles.rectangleDiv} />
      			<div className={styles.frameParent}>
        				<div className={styles.groupParent} onClick={openToolTip}>
          					<Image className={styles.frameChild} alt="" src={One} />
          					<div style={secondFont.style}   className={styles.home}>Earning Rewards</div>
        				</div>
        				<div className={styles.frameGroup} onClick={openToolTip1}>
          					<div className={styles.frame4}>
            						<Image className={styles.groupIcon} alt="" src={Two} />
            						<div style={secondFont.style}   className={styles.loremIpsumDolor1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at luctus turpis hendrerit non. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non,</div>
          					</div>
          					<div style={secondFont.style}   className={styles.networkSecurity}>Network Security</div>
        				</div>
        				<div className={styles.groupParent} onClick={openToolTip2}>
          					<Image className={styles.frameIcon2} alt="" src={Three} />
          					<div style={secondFont.style}   className={styles.home}>Token Appreciation</div>
        				</div>
        				<div className={styles.groupParent} onClick={openToolTip3}>
          					<Image className={styles.groupIcon1} alt="" src={Fourth} />
          					<div style={secondFont.style}   className={styles.home}>Liquidity</div>
        				</div>
      			</div>
      			<img className={styles.eparrowRightBoldIcon2} alt="" src="ep:arrow-right-bold.png" />
      			<img className={styles.eparrowRightBoldIcon3} alt="" src="ep:arrow-right-bold.png" />
      			<div className={styles.stakeIpadPro1292Child1} />
      			<div style={thirdFont.style}   className={styles.stakingPool}>Staking pool</div>
      			<div className={styles.frameParent1}>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>1G</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>1M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>3M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>6M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>1A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>3A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>5A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>YTD</div>
        				</div>
        				<div className={styles.maxWrapper}>
          					<div className={styles.g}>MAX</div>
        				</div>
      			</div>
      			<div className={styles.lineParent}>
        				<div className={styles.frameItem} />
        				<div className={styles.frameItem} />
        				<div className={styles.frameItem} />
        				<div className={styles.frameItem} />
        				<div className={styles.frameItem} />
        				<div className={styles.frameItem} />
        				<div className={styles.frameItem} />
        				<div className={styles.frameItem} />
        				<div className={styles.frameItem} />
      			</div>






      			<div className={styles.groupDiv}>
        				<div className={styles.ellipseParent}>
          					<div className={styles.ellipseDiv} />
          					<div style={secondFont.style}   className={styles.home}>unstake</div>
        				</div>
        				<div className={styles.ellipseGroup}>
          					<div className={styles.frameChild7} />
          					<div style={secondFont.style}   className={styles.home}>stake</div>
        				</div>
      			</div>
      			<div className={styles.vectorGroup}>
        				
        				<Image className={styles.groupInner} alt="" src={Mask} />
        				<div style={thirdFont.style}   className={styles.claimRewards}>claim rewards</div>
        				<div style={thirdFont.style}  className={styles.totalAmountStake1}>Total amount stake</div>
        				<div className={styles.aprWrapper}>
          					<div style={secondFont.style}  className={styles.apr}>4 APR%</div>
        				</div>
        				<div style={thirdFont.style}  className={styles.cmax}>1000 cmax</div>
        				<div className={styles.antDesigndollarOutlinedParent}>
          					<Image className={styles.antDesigndollarOutlinedIcon} alt="" src={Dollar} />
          					<div className={styles.connectWallet}>10 usd</div>
        				</div>
        				<img className={styles.groupChild1} alt="" src="Vector 15.png" />
      			</div>
      			<div className={styles.text14}>{` `}</div>
      			<div className={styles.stakingStatsParent}>
        				<div style={thirdFont.style}  className={styles.stakingStats}>Staking Stats</div>
        				<div className={styles.frameParent2}>
          					<div className={styles.rectangleGroup}>
            						<div className={styles.frameChild8} />
            						<img className={styles.frameChild9} alt="" src="Vector 16.png" />
            						<img className={styles.frameChild10} alt="" src="Vector 17.png" />
            						<img className={styles.frameChild11} alt="" src="Vector 18.png" />
            						<div style={thirdFont.style}  className={styles.topHolders}>Top Holders</div>
            						<div className={styles.frameParent3}>
              							<div className={styles.wrapper}>
                								<b className={styles.home}>1</b>
              							</div>
              							<div className={styles.div}>09324414</div>
            						</div>
            						<div className={styles.frameParent4}>
              							<div className={styles.container}>
                								<b className={styles.home}>2</b>
              							</div>
              							<div className={styles.div1}>09324414</div>
            						</div>
            						<div className={styles.frameParent5}>
              							<div className={styles.container}>
                								<b className={styles.home}>3</b>
              							</div>
              							<div className={styles.div1}>09324414</div>
            						</div>
            						<div className={styles.frameParent6}>
              							<div className={styles.container}>
                								<b className={styles.home}>4</b>
              							</div>
              							<div className={styles.div1}>09324414</div>
            						</div>
            						<div className={styles.div4}>2,337,786</div>
            						<div className={styles.div5}>2,337,786</div>
            						<div className={styles.div6}>2,337,786</div>
            						<div className={styles.div7}>2,337,786</div>
            						<img className={styles.frameChild12} alt="" src="Arrow 1.png" />
          					</div>
          					<div className={styles.rectangleContainer} onClick={onGroupContainer5Click}>
            						<div className={styles.groupChild2} />
            						<div className={styles.vectorContainer}>
              							<img className={styles.vectorIcon3} alt="" src="Vector.png" />
              							<div className={styles.g}>8%</div>
            						</div>
            						<Image className={styles.frameIcon3} alt="" src={Green} />
            						<div style={thirdFont.style}  className={styles.cmaxPrice}>cmax price</div>
          					</div>
        				</div>
      			</div>
    		</div>
    		{isToolTipOpen && (
      			<h1></h1>
    		)}
    		{isToolTip1Open && (
      			<h1></h1>
    		)}
    		{isToolTip2Open && (
      		<h1></h1>
    		)}
    		{isToolTip3Open && (
      			<h1></h1>
    		)}</>);
};

export default StakeIPadPro1292;
