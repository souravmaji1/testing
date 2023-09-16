import type { NextPage } from 'next';
import { useState, useCallback } from 'react';
import ToolTip from "../components/tool-tip";
import PortalPopup from "../components/portal-popup";
import styles from './stake.module.css';
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

const HomepageStake:NextPage = () => {
  	const [isToolTipOpen, setToolTipOpen] = useState(false);
  	const [isToolTip1Open, setToolTip1Open] = useState(false);
  	const [isToolTip2Open, setToolTip2Open] = useState(false);
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onTradeText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onAboutText1Click = useCallback(() => {
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
  	
  	
  	const onGroupContainer4Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onGroupContainer6Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	return (<>
	<div>

	<div className={styles.mobile}>
	  <StakeMobile />
	</div>

	<div className={styles.ipadstake}>
	  <IpadStake />
	</div>

	
    		<div className={styles.homepageStake}>
      			<div className={styles.homepageStakeChild} />
      			<Image className={styles.homepageStakeItem} alt="" src={Flower} />
      			<div className={styles.homepageStakeInner} />
      			<Image className={styles.homepageStakeChild1} alt="" src={Circles} />
      			<div className={styles.rwfa}>RWFA</div>
      			<img className={styles.homepageStakeChild2} alt="" src="Group 7.svg" />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<Image className={styles.rectangleIcon} alt="" src={Rectangle} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.maskGroupParent}>
				  <div className={styles.homepageBlackChild16} >
					<Footer />
					</div>
      			
      			</div>
      			<div style={thirdFont.style} className={styles.ourPartners}>
			
				</div>

				<div className={styles.staking}>
					<Cmax />
				</div>
				
      			
      			<div className={styles.joinOurCommunityParent}>
        				<div style={thirdFont.style}  className={styles.joinOurCommunity1}>Join our community</div>
        				<div style={secondFont.style}  className={styles.diveIntoA1}>Dive into a thriving hub of shared knowledge and innovation, uniting with us to shape the future of finance through RWFA DApp. Your participation drives our collective journey toward decentralized excellence.</div>
        				<div style={{display:'flex',alignItems:"center",justifyContent:'center',marginTop:'275px',gap:'20px'}}>
						<Image className={styles.groupIte} alt="" src={Github} />
						<Image className={styles.groupIte} alt="" src={Twitter} />
						<Image className={styles.groupIte} alt="" src={Linkedin} />
						<Image className={styles.groupIte} alt="" src={Notion} />
							</div>  
      			</div>
				

				  <div className={styles.navbars}>
				<Navbar />
			  </div>



      			<div className={styles.homeParent}>
        				<div style={fourthFont.style}  className={styles.home} onClick={onHomeTextClick}><a href='/'>Home</a></div>
        				<div style={fourthFont.style} className={styles.home} onClick={onTradeText1Click}><a href='/trade'>Trade</a></div>
        				<div style={fourthFont.style} className={styles.stake1}><a href='/stake'>Stake</a></div>
        				<div style={fourthFont.style} className={styles.home} onClick={onAboutText1Click}><a href='/about'>About</a></div>
						<div style={fourthFont.style} className={styles.home} onClick={onAboutText1Click}><a href='/profile'>Profile</a></div>
      			</div>
      			
      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallet} />
        				<div style={secondFont.style} className={styles.connectWallet}>
						<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none'}}
						/>
						</div>
      			</div>
      			
      			<Image className={styles.unionIcon3} alt="" src={Star} />
      			
      			<div style={myFont.style}  className={styles.stakingBenefits}>Staking benefits</div>
      			<div className={styles.homepageStakeChild4} />
				 
      			<div className={styles.frameParent}>
        				<div className={styles.groupParent} onClick={openToolTip}>
          					<Image className={styles.frameChild} alt="" src={One} />
          					<div style={secondFont.style} className={styles.search}>Earning Rewards</div>
        				</div>
        				<div className={styles.frameGroup} onClick={openToolTip1}>
          					<div className={styles.frame5}>
            						<Image className={styles.groupIcon1} alt="" src={Two} />
            						<div style={secondFont.style}  className={styles.loremIpsumDolor1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at luctus turpis hendrerit non. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non,</div>
          					</div>
          					<div style={secondFont.style} className={styles.networkSecurity}>Network Security</div>
        				</div>
        				<div className={styles.frameDiv} onClick={openToolTip2}>
          					<Image className={styles.frameIcon2} alt="" src={Three} />
          					<div style={secondFont.style} className={styles.search}>Token Appreciation</div>
        				</div>
        				<div className={styles.groupGroup}>
          					<Image className={styles.groupIcon2} alt="" src={Fourth} />
          					<div style={secondFont.style} className={styles.search}>Liquidity</div>
        				</div>
      			</div>
      			
      			<div style={thirdFont.style} className={styles.stakingPool}>Staking pool</div>
      			<div className={styles.frameParent1}>
        				<div className={styles.gWrapper}>
          					<div className={styles.trade}>1G</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.trade}>1M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.trade}>3M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.trade}>6M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.trade}>1A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.trade}>3A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.trade}>5A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.trade}>YTD</div>
        				</div>
        				<div className={styles.maxWrapper}>
          					<div className={styles.trade}>MAX</div>
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
      			<div className={styles.homepageStakeChild5} >
					<Chart />

				
					
					</div>
      			<div style={secondFont.style} className={styles.stakingInBlockchain1}>Staking in blockchain involves participants, called "stakers" or "validators," locking up their cryptocurrency holdings to support the network.</div>
      			<div className={styles.vectorGroup}>
        				<Image className={styles.groupItem} alt="" src={Mask} />
        				<Image className={styles.maskGroupIcon6} alt="" src={Mask} />
        				<div style={thirdFont.style} className={styles.claimRewards}>claim rewards</div>
        				<div  style={thirdFont.style} className={styles.totalAmountStake1}>Total amount stake</div>
        				<div className={styles.aprWrapper}>
          					<div className={styles.apr}>4 APR%</div>
        				</div>
        				<div style={thirdFont.style} className={styles.cmax}>1000 cmax</div>
        				<div className={styles.antDesigndollarOutlinedParent}>
          					<Image className={styles.antDesigndollarOutlinedIcon} alt="" src={Dollar} />
          					<div style={thirdFont.style} className={styles.connectWallet}>10 usd</div>
        				</div>
        				<img className={styles.groupInner} alt="" src="Vector 15.svg" />
      			</div>
      			<div className={styles.groupDiv}>
        				<div className={styles.ellipseParent}>
          					<div className={styles.ellipseDiv} />
          					<div style={secondFont.style} className={styles.search}>un stake</div>
        				</div>
        				<div className={styles.ellipseGroup}>
          					<div className={styles.frameChild7} />
          					<div style={secondFont.style} className={styles.search}>stake</div>
        				</div>
      			</div>



				  



      			<div className={styles.stakingStatsParent}>

				
				 
				 
        			
        				<div className={styles.groupChild1} />
        				<div style={thirdFont.style} className={styles.topHolders}>Top Holders</div>
        				<div className={styles.text28}>{` `}</div>
        				<img className={styles.groupChild2} alt="" src="Vector 16.svg" />
        				<img className={styles.groupChild3} alt="" src="Vector 17.svg" />
        				<img className={styles.groupChild4} alt="" src="Vector 18.svg" />
        				<div className={styles.div}>2,337,786</div>
        				<div className={styles.div1}>2,337,786</div>
        				<div className={styles.div2}>2,337,786</div>
        				<div className={styles.div3}>2,337,786</div>
        				<div className={styles.rectangleParent} onClick={onGroupContainer4Click}>
          					<div className={styles.groupChild5} />
          					<div className={styles.vectorContainer}>
            						<img className={styles.vectorIcon4} alt="" src="Vector.svg" />
            						<div className={styles.trade}>8%</div>
          					</div>
          					<Image className={styles.frameIcon3} alt="" src={Green} />
          					<div className={styles.cmaxPrice}>
            						<span className={styles.cmax1}>cmax</span>
            						<span className={styles.price}> price</span>
          					</div>
        				</div>
        				<div className={styles.frameParent2}>
          					<div className={styles.wrapper}>
            						<b className={styles.search}>1</b>
          					</div>
          					<div className={styles.div5}>09324414</div>
        				</div>
        				<div className={styles.frameParent3}>
          					<div className={styles.container}>
            						<b className={styles.search}>2</b>
          					</div>
          					<div className={styles.div6}>09324414</div>
        				</div>
        				<div className={styles.frameParent4}>
          					<div className={styles.container}>
            						<b className={styles.search}>3</b>
          					</div>
          					<div className={styles.div6}>09324414</div>
        				</div>
        				<div className={styles.frameParent5}>
          					<div className={styles.container}>
            						<b className={styles.search}>4</b>
          					</div>
          					<div className={styles.div6}>09324414</div>
        				</div>
        				<img className={styles.groupChild6} alt="" src="Arrow 1.svg" />
      			</div>







      			<div className={styles.stakingStatsParent}>

				
				  
        				<div style={thirdFont.style} className={styles.stakingStats}>Staking Stats</div>
        				<div className={styles.groupChild1} />
        				<div style={thirdFont.style} className={styles.topHolders}>Top Holders</div>
        				<div className={styles.text28}>{` `}</div>
        				<img className={styles.groupChild2} alt="" src="Vector 16.svg" />
        				<img className={styles.groupChild3} alt="" src="Vector 17.svg" />
        				<img className={styles.groupChild4} alt="" src="Vector 18.svg" />
        				<div className={styles.div9}>2,337,786</div>
        				<div className={styles.div1}>2,337,786</div>
        				<div className={styles.div11}>2,337,786</div>
        				<div className={styles.div3}>2,337,786</div>
        				<div className={styles.rectangleParent} onClick={onGroupContainer6Click}>
          					<div className={styles.groupChild5} />
          					<div className={styles.vectorContainer}>
            						<img className={styles.vectorIcon4} alt="" src="Vector.svg" />
            						<div className={styles.trade}>8%</div>
          					</div>
          					<Image className={styles.frameIcon3} alt="" src={Green} />
          					<div style={thirdFont.style} className={styles.cmaxPrice1}>cmax price</div>
        				</div>
        				<div className={styles.frameParent2}>
          					<div className={styles.wrapper}>
            						<b className={styles.search}>1</b>
          					</div>
          					<div className={styles.div14}>09324414</div>
        				</div>
        				<div className={styles.frameParent3}>
          					<div className={styles.container}>
            						<b className={styles.search}>2</b>
          					</div>
          					<div className={styles.div15}>09324414</div>
        				</div>
        				<div className={styles.frameParent4}>
          					<div className={styles.container}>
            						<b className={styles.search}>3</b>
          					</div>
          					<div className={styles.div15}>09324414</div>
        				</div>
        				<div className={styles.frameParent5}>
          					<div className={styles.container}>
            						<b className={styles.search}>4</b>
          					</div>
          					<div className={styles.div15}>09324414</div>
        				</div>
        				<img className={styles.groupChild6} alt="" src="Arrow 1.svg" />
						
      			</div>




				

				 
				  


    		</div>
			</div>
    		{isToolTipOpen && (
      		
        				<ToolTip onClose={closeToolTip} />
      			
    		)}
    		{isToolTip1Open && (
      		
        				<ToolTip onClose={closeToolTip1} />
      			
    		)}
    		{isToolTip2Open && (
      		
        				<ToolTip onClose={closeToolTip2} />
      		
    		)}</>);
};

export default HomepageStake;
