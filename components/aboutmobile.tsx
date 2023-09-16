import type { NextPage } from 'next';
import { useState, useCallback } from 'react';

import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "../components/portalpopup";

import Github from '../public/mdi_github.svg';
import Twitter from '../public/mdi_twitter.svg';
import Linkedin from '../public/entypo-social_linkedin-with-circle.svg';
import Notion from '../public/mingcute_notion-fill.svg';

import localFont from 'next/font/local';
import Headlogo from '../public/logs.png';
import Wallet from '../public/mingcute_wallet-4-fill.svg';
import User from '../public/rrr.jpg';
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

import Navbs from '../public/dd.svg';
import Down from '../public/new.png';



const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});

import Location from '../public/mdi_location.svg';
import styles from './about.module.css';
import Link from 'next/link';


const ProfileIPadPro1294:NextPage = () => {
  	const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);
  	
  	const openMenuIPadPro1291 = useCallback(() => {
    		setMenuIPadPro1291Open(true);
  	}, []);
  	
  	const closeMenuIPadPro1291 = useCallback(() => {
    		setMenuIPadPro1291Open(false);
  	}, []);
  	
  	
  	const onGroupContainer4Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (<>
    		<div className={styles.profileIpadPro1294}>
      			<div className={styles.profileIpadPro1294Child} />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<Image className={styles.maskGroupIcon1} alt="" src={Headlogo} />
        				<div className={styles.mediaInquiresForCmaxContParent}>
          					
          					<div className={styles.copyRight20231}>Copy Right 2023 - CMax. All Rights Reserved</div>
        				</div>
        				<div className={styles.tradeParent}>
          					<div style={fourthFont.style}   className={styles.trade}>< a href='/trade'>Trade</a></div>
          					<div  style={fourthFont.style}  className={styles.trade}>< a href='/stake'>Stake</a></div>
          					<div style={fourthFont.style}className={styles.trade}> < a href='/trade'>About</a> </div>
          				
          					<div style={fourthFont.style}  className={styles.trade}>< a href='/profile'>Profile</a>  </div>
        				</div>
      			</div>
      			<div className={styles.aboutParent} onClick={openMenuIPadPro1291}>
        				<div className={styles.g}>Profile</div>
        				<Image className={styles.rimenuFillIcon1} alt="" src={Navbs} />
      			</div>
      			<div className={styles.hiSebastianMathewContainer}>
        				<p style={myFont.style}    className={styles.hi}>Hi,</p>
        				<p style={myFont.style}   className={styles.sebastianMathew}>User 1</p>
      			</div>
      			<div className={styles.netWorthParent}>
        				<div  style={thirdFont.style}   className={styles.netWorth}>Net-worth</div>
        				<div   style={thirdFont.style}  className={styles.div}>$0</div>
      			</div>
      			<div className={styles.ellipseParent}>
        				<Image className={styles.frameChild} alt="" src={User} />
        				<div className={styles.mdidiscordParent}>
          					<img className={styles.mdidiscordIcon1} alt="" src="mdi:discord.svg" />
          					<img className={styles.mdiredditIcon1} alt="" src="mdi:reddit.svg" />
          					<div className={styles.mingcutenotionFillParent}>
            						<Image className={styles.mingcutenotionFillIcon1} alt="" src={Notion} />
            						<Image className={styles.mdigithubIcon1} alt="" src={Github} />
            						<Image className={styles.mdigithubIcon1} alt="" src={Twitter} />
            						<Image className={styles.mingcutenotionFillIcon1} alt="" src={Linkedin} />
          					</div>
        				</div>
      			</div>
      			<div className={styles.mdilocationParent}>
        				<Image className={styles.mdilocationIcon1} alt="" src={Location} />
        				<div  style={secondFont.style}   className={styles.nwBobcatLane}>Test</div>
      			</div>
      			<div className={styles.rectangleGroup} onClick={onGroupContainer4Click}>
        				<div className={styles.groupItem} />
        				<div className={styles.plParent}>
          					<div  style={thirdFont.style}  className={styles.pl}>{`P&L`}</div>
          					<div className={styles.vectorParent}>
            						<img className={styles.vectorIcon1} alt="" src="Vector.svg" />
            						<div className={styles.trade}>+24%</div>
          					</div>
        				</div>
        				<div className={styles.frameParent}>
          					<div className={styles.lineParent}>
            						<div className={styles.frameItem} />
            						<div className={styles.frameItem} />
            						<div className={styles.frameItem} />
            						<div className={styles.frameChild1} />
            						<div className={styles.frameChild1} />
            						<div className={styles.frameChild1} />
            						<div className={styles.frameChild1} />
            						<div className={styles.frameChild1} />
            						<div className={styles.frameChild1} />
          					</div>
          				

























          					<div className={styles.frameGroup}>
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
        				</div>
      			</div>
      			<div  style={thirdFont.style}   className={styles.holdings}>Holdings</div>
      			<div className={styles.rectangleContainer}>
        				<div className={styles.groupInner} />
        				<div className={styles.unfold10ResultParent}>
          					<div className={styles.wallet}>unfold 10 result</div>
          					<Image className={styles.fearrowDownIcon1} alt="" src={Down} />
        				</div>
        				<div className={styles.frameDiv}>
          					<div className={styles.eth47c40f70Parent}>
            						<img className={styles.eth47c40f70Icon} alt="" src="eth.47c40f70.svg" />
            						<div className={styles.ethereumParent}>
              							<div className={styles.walletWrapper}>
                								<div  style={secondFont.style}   className={styles.wallet}>Wallet</div>
              							</div>
              							<b  style={thirdFont.style}   className={styles.b}>$435</b>
            						</div>
          					</div>
          					<div className={styles.eth47c40f70Group}>
            						<img className={styles.eth47c40f70Icon} alt="" src="eth.47c40f70.svg" />
            						<div className={styles.ethereumParent}>
              							<div className={styles.poolTogetherWrapper}>
                								<div  style={secondFont.style}  className={styles.wallet}>Pool Together</div>
              							</div>
              							<b  style={thirdFont.style}   className={styles.b}>$0</b>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameParent3}>
          					<div className={styles.eth47c40f70Container}>
            						<img className={styles.eth47c40f70Icon} alt="" src="eth.47c40f70.svg" />
            						<div className={styles.ethereumParent}>
              							<div  style={secondFont.style}  className={styles.wallet}>Ethereum</div>
              							<div className={styles.div2}>
                								<span>
                  									<b   style={thirdFont.style}  className={styles.b2}>$83</b>
                  									<span className={styles.span}>{` `}</span>
                								</span>
                								<span className={styles.span}>
                  									<span>43%</span>
                								</span>
              							</div>
            						</div>
          					</div>
          					<div className={styles.eth47c40f70Container}>
            						<img className={styles.mantle61752091Icon} alt="" src="mantle.61752091.svg" />
            						<div className={styles.ethereumParent}>
              							<div  style={secondFont.style}   className={styles.wallet}>Mantie</div>
              							<div className={styles.div2}>
                								<span>
                  									<b  style={thirdFont.style}   className={styles.b2}>$75</b>
                  									<span className={styles.span}>{` `}</span>
                								</span>
                								<span className={styles.span}>
                  									<span>37%</span>
                								</span>
              							</div>
            						</div>
          					</div>
          					<div className={styles.eth47c40f70Container}>
            						<img className={styles.eth47c40f70Icon} alt="" src="polygon.31b1e7a0.svg" />
            						<div className={styles.ethereumParent}>
              							<div   style={secondFont.style}  className={styles.wallet}>Polygon</div>
              							<div className={styles.div2}>
                								<span>
                  									<b  style={thirdFont.style}   className={styles.b2}>$05</b>
                  									<span className={styles.span}>{` `}</span>
                								</span>
                								<span className={styles.span}>
                  									<span>03%</span>
                								</span>
              							</div>
            						</div>
          					</div>
        				</div>
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

export default ProfileIPadPro1294;
