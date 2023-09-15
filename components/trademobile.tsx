import type { NextPage } from 'next';
import { useState, useCallback } from 'react';

import styles from './trade.module.css';

import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "../components/portalpopup";

import Frame from '../public/Frame.png';
import Image from 'next/image';
import Fx from '../public/fifth.png';
import Fr from '../public/fourth.png';
import Ft from '../public/sec.png';
import Fa from '../public/sixth.png';
import Fe from '../public/sec.png';
import Fs from '../public/tita.png';
import Sear from '../public/Vector.svg';
import User from '../public/Ellipse 59.svg';
import Wallet from '../public/mingcute_wallet-4-fill.svg';
import Headlogo from '../public/logs.png';
import Circles from '../public/Group 6.png';
import Star from '../public/Union.png';
import Rectangle from '../public/Rectangle 349.png';
import Flower from '../public/Group 1000000920.png';
import { ConnectWallet } from '@thirdweb-dev/react';
import localFont from 'next/font/local';
import Link from 'next/link';
import Stats from '../public/grk.png';
import Github from '../public/mdi_github.svg';
import Twitter from '../public/mdi_twitter.svg';
import Linkedin from '../public/entypo-social_linkedin-with-circle.svg';
import Notion from '../public/mingcute_notion-fill.svg';
import Sliders from '../components/slider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Footer from '../components/aboutfooter';
import Navbar from '../components/simplenavbar';
import Arrowdown from '../public/ri_arrow-up-s-line.svg';

import Frameg from '../public/greenf.png';
import Tita from '../public/tita.png';
import Navbs from '../public/dd.svg';

const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});


const TradeIPadPro1292:NextPage = () => {
  	const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);
  	
  	const onGroupContainer6Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const openMenuIPadPro1291 = useCallback(() => {
    		setMenuIPadPro1291Open(true);
  	}, []);
  	
  	const closeMenuIPadPro1291 = useCallback(() => {
    		setMenuIPadPro1291Open(false);
  	}, []);
  	
  	
  	const onGroupContainer7Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onGroupContainer8Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (<>
    		<div className={styles.tradeIpadPro1292}>
      			<Image className={styles.tradeIpadPro1292Child} alt="" src={Flower} />
      			<div className={styles.tradeIpadPro1292Item} />
      			
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div style={thirdFont.style}  className={styles.trendingProducts}>trending products</div>
      			
      		
      			<div className={styles.joinOurCommunityParent}>
        				<div style={thirdFont.style}   className={styles.joinOurCommunity1}>Join our community</div>
        				<div style={secondFont.style}   className={styles.diveIntoA1}>Dive into a thriving hub of shared knowledge and innovation, uniting with us to shape the future of finance through Coliseum DApp. Your participation drives our collective journey toward decentralized excellence.</div>
        				
                        <div style={{display:'flex',alignItems:"center",justifyContent:'center',marginTop:'290px',gap:'20px'}}>
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
          					<div className={styles.trade}>Trade</div>
          					<div className={styles.trade}>Stake</div>
          					<div className={styles.trade}>About</div>
          				
          					<div className={styles.trade}>{`Terms & Conditions`}</div>
        				</div>
      			</div>
      			<div className={styles.rectangleGroup} onClick={onGroupContainer6Click} >
					
					        				<div className={styles.rectangleDiv} />
        				<div style={myFont.style}   className={styles.titaEtf}><a href='/mint'>Tita ETF</a></div>
        				
        				<Image className={styles.frameIcon} alt="" src={Frameg} />
      			</div>
      			
      			<div className={styles.tradeGroup} onClick={openMenuIPadPro1291}>
        				<div className={styles.div}>Trade</div>
        				<Image className={styles.rimenuFillIcon1} alt="" src={Navbs} />
      			</div>
      			<div className={styles.rectangleContainer} onClick={onGroupContainer7Click}>
        				<div className={styles.rectangleDiv} />
        				
        				<div style={myFont.style}   className={styles.tusaEtf}>Coming Soon</div>
        				<Image className={styles.frameIcon1} alt="" src={Frame} />
      			</div>
      			<div className={styles.groupDiv} onClick={onGroupContainer8Click}>
        				<div className={styles.rectangleDiv} />
        				
        				<div style={myFont.style}  className={styles.tgermEtf}>Coming Soon</div>
        				<Image className={styles.frameIcon2} alt="" src={Frame} />
      			</div>

      			<div className={styles.rectangleParent1}>
        				<div className={styles.rectangleDiv} />
        				<div style={myFont.style}  className={styles.comingSoon}>Coming Soon</div>
        				<Image className={styles.frameIcon3} alt="" src={Frame} />
      			</div>
      			<div className={styles.unfold10ResultParent}>
        				<div className={styles.unfold10Result1}>unfold 10 result</div>
        				<Image className={styles.fearrowDownIcon1} alt="" src={Arrowdown} />
      			</div>
      			<div className={styles.frameParent}>
        				<div className={styles.parent}>
          					<div className={styles.div3}>1</div>
          					<div className={styles.ellipseParent}>
            						<Image className={styles.frameChild} alt="" src={Tita} />
            						<div style={{fontFamily:'sans-serif'}}   className={styles.tita}>tita</div>
          					</div>
          					<div className={styles.polygonParent}>
            						
            						
          					</div>
        				</div>
        				<div className={styles.parent}>
          					<div className={styles.div3}>2</div>
          					<div className={styles.ellipseParent}>
            					
            						<div style={{fontFamily:'sans-serif'}}   className={styles.tita}>Coming Soon</div>
          					</div>
          					<div className={styles.polygonGroup}>
            						<img className={styles.frameItem} alt="" src="Polygon 3.svg" />
            						
          					</div>
        				</div>
        				<div className={styles.parent}>
          					<div className={styles.div3}>3</div>
          					<div className={styles.ellipseParent}>
            						
            						<div style={{fontFamily:'sans-serif'}}   className={styles.tita}>Coming Soon</div>
          					</div>
          					<div className={styles.polygonParent}>
            						<img className={styles.frameItem} alt="" src="Polygon 3.svg" />
            						
          					</div>
        				</div>
        				<div className={styles.parent}>
          					<div className={styles.div3}>4</div>
          					<div className={styles.ellipseParent}>
            						
            						<div  style={{fontFamily:'sans-serif'}}  className={styles.tita}>Coming Soon</div>
          					</div>
          					<div className={styles.polygonGroup}>
            						
            						
          					</div>
        				</div>
        				<div className={styles.parent}>
          					<div className={styles.div3}>5</div>
          					<div className={styles.ellipseParent}>
            					
            						<div style={{fontFamily:'sans-serif'}}   className={styles.tita}>Coming Soon</div>
          					</div>
          					<div className={styles.polygonGroup}>
            						
            						
          					</div>
        				</div>
        				<div className={styles.parent}>
          					<div className={styles.div3}>6</div>
          					<div className={styles.ellipseParent}>
            					
            						<div style={{fontFamily:'sans-serif'}}  className={styles.tita}>Coming Soon</div>
          					</div>
          					<div className={styles.polygonParent}>
            						
            						
          					</div>
        				</div>
      			</div>
      			<div className={styles.tradeIpadPro1292Inner} />
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

export default TradeIPadPro1292;
