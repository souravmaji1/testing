import type { NextPage } from 'next';
import { useCallback } from 'react';
import {useRouter} from "next/router";
import styles from './menu.module.css';
import Headlogo from '../public/logs.png';
import { ConnectWallet } from '@thirdweb-dev/react';
import Image from 'next/image';

import Github from '../public/mdi_github.svg';
import Twitter from '../public/mdi_twitter.svg';
import Linkedin from '../public/entypo-social_linkedin-with-circle.svg';
import Notion from '../public/mingcute_notion-fill.svg';

import localFont from 'next/font/local';

import Wallet from '../public/mingcute_wallet-4-fill.svg';
import User from '../public/rrr.jpg';
import Circles from '../public/Group 6.png';
import Snake from '../public/Vector 19.png';




const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});




type MenuIPadPro1291Type = {
  	onClose?: () => void;
}

const MenuIPadPro1291:NextPage<MenuIPadPro1291Type> = ({ onClose }) => {
  	const router = useRouter();
  	
  	const onHomeTextClick = useCallback(() => {
    		router.push("/");
  	}, [router]);
  	
  	
  	const onTradeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onAboutTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onProfileTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.menuIpadPro1291}>
      			<img className={styles.unionIcon1} alt="" src="Union.svg" />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div style={myFont.style}   className={styles.home} onClick={onHomeTextClick}><a href='/'>Home</a></div>
      			<div style={myFont.style}    className={styles.trade} onClick={onTradeTextClick}><a href='/trade'>Trade</a></div>
      			<div  style={myFont.style}   className={styles.stake} onClick={onStakeTextClick}><a href='/stake'>Stake</a></div>
      			<div style={myFont.style}    className={styles.about} onClick={onAboutTextClick}><a href='/profile'>Profile</a></div>
      			<div style={myFont.style}    className={styles.profile} onClick={onProfileTextClick}><a href='/about'>About</a></div>
      			<div className={styles.menuIpadPro1291Child} />
      			<div className={styles.menuIpadPro1291Item} />
      			<div className={styles.menuIpadPro1291Inner} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallet} />
        				<div className={styles.connectWallet}>
				
						<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none',color:'black'}}
						/>
					
						</div>
      			</div>
      			<img className={styles.materialSymbolscloseIcon1} alt="" src="material-symbols:close.svg" />
    		</div>);
};

export default MenuIPadPro1291;
