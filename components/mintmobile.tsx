import type { NextPage } from 'next';
import { useState, useCallback } from 'react';

import styles from './mintmobile.module.css';

import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "../components/portalpopup";



import Image from 'next/image';
import Logo from '../public/Group 7.svg';
import CommitLogo from '../public/Group 1000000931.svg';
import Tokens from '../public/Ellipse 74.svg';
import Arrow from '../public/ri_arrow-up-s-line.svg';
import Wallet from '../public/mingcute_wallet-4-fill.svg';
import User from '../public/Ellipse 59.svg';
import Headlogo from '../public/logs.png';
import Circles from '../public/Group 6.png';
import { ConnectWallet } from '@thirdweb-dev/react';
import Minting from '../components/minting';
import Chart from '../components/chart';
import { ConnectKitButton } from "connectkit";
import Mintmobile from '../components/mintmobile';
import localFont from 'next/font/local';
import Navbs from '../public/dd.svg'





const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});




const TradeSubpageIPadPro129:NextPage = () => {
  	const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);
  	
  	const openMenuIPadPro1291 = useCallback(() => {
    		setMenuIPadPro1291Open(true);
  	}, []);
  	
  	const closeMenuIPadPro1291 = useCallback(() => {
    		setMenuIPadPro1291Open(false);
  	}, []);
  	
  	
  	const onGroupContainer3Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (<>
    		<div className={styles.tradeSubpageIpadPro129}>
      			<div className={styles.tradeSubpageIpadPro129Child} />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<Image className={styles.maskGroupIcon1} alt="" src={Headlogo} />
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
      			<div className={styles.aboutParent} onClick={openMenuIPadPro1291}>
        				<div className={styles.g}>Mint</div>
        				<Image className={styles.rimenuFillIcon1} alt="" src={Navbs} />
      			</div>
      			<div className={styles.swapMintburn}>
        				<Minting />
      			</div>
      			<div className={styles.rectangleGroup} onClick={onGroupContainer3Click}>
        				<div className={styles.groupItem} />
        				<div className={styles.frameGroup}>
          					<div className={styles.lineParent}>
            						<div className={styles.frameInner} />
            						<div className={styles.frameInner} />
            						<div className={styles.frameInner} />
            						<div className={styles.frameChild2} />
            						<div className={styles.frameChild2} />
            						<div className={styles.frameChild2} />
            						<div className={styles.frameChild2} />
            						<div className={styles.frameChild2} />
            						<div className={styles.frameChild2} />
          					</div>
          					

                              


























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
        				</div>
      			</div>
      			<div  style={myFont.style}   className={styles.titaEtf}>Tita ETF</div>
      			<div className={styles.frameParent2}>
        				<div className={styles.frameParent3}>
          					<div className={styles.wrapper}>
            						<div className={styles.trade}>128.68</div>
          					</div>
          					<div className={styles.vectorParent}>
            						<img className={styles.vectorIcon1} alt="" src="Vector.svg" />
            						<div className={styles.trade}>+1,03  | +0,83%</div>
          					</div>
        				</div>
        				<div className={styles.ter033}>TER → 0.33%</div>
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

export default TradeSubpageIPadPro129;
