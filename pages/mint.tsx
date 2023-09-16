import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './mint.module.css';
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
import Navbar from '../components/mintnav';
import IpadMint from '../components/ipadmint';


const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});



const HomepageTradeSubpage:NextPage = () => {
  	
  	const onBackToTradeBtnClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onAboutText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onEllipseIcon1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	return (
		<div>
<div className={styles.mobile}>
	  <Mintmobile />
	</div>

	<div className={styles.ipadmint}>
	  <IpadMint />
	</div>

    		<div className={styles.homepageTradeSubpage}>


      			<div className={styles.homepageTradeSubpageChild} />
				


      			<Image className={styles.homepageTradeSubpageItem} alt="" src={Circles} />

      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			
      			<div className={styles.homepageTradeSubpageInner} />
				
      			<div style={myFont.style} className={styles.titaEtf}>Tita ETF</div>
      			<div className={styles.wrapper}>
        				<div className={styles.div}>128.68</div>
      			</div>
      			<div className={styles.frameParent}>
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
      			<div style={secondFont.style} className={styles.ter033}>TER → 0.33%</div>
      			<div className={styles.vectorParent}>
        				<img className={styles.vectorIcon1} alt="" src="Vector.svg" />
        				<div className={styles.div}>
          					<span>{`+1,03  `}</span>
          					<span className={styles.span}>|</span>
          					<span> +0,83%</span>
        				</div>
      			</div>
      			<div className={styles.frame1}>
        				<div className={styles.lineParent}>
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
        				</div>
        				<img className={styles.groupIcon5} alt="" src="Group.svg" />
        				<img className={styles.groupIcon6} alt="" src="Group.svg" />
        				<img className={styles.groupIcon7} alt="" src="Group.svg" />
        				<img className={styles.groupIcon8} alt="" src="Group.svg" />
        			

						<Chart />
      			</div>
      			<div className={styles.rectangleDiv} />
      			<div className={styles.backToTradeBtn1} onClick={onBackToTradeBtnClick}>
        				<Image className={styles.pharrowDownBoldIcon1} alt="" src='' />
        				<div className={styles.g}>Back to trade</div>
      			</div>
      			<div className={styles.swapMintburn}>

<Minting />
						
      			</div>

				  
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.maskGroupParent}>
          					<img className={styles.maskGroupIcon1} alt="" src="Mask group.png" />
          					<div className={styles.mediaInquiresForCmaxContParent}>
            						<div className={styles.mediaInquiresForContainer}>{`Media inquires for CMax - Contact `}
              							<span style={secondFont.style}  className={styles.mediacmaxcom}>media@cmax.com</span>
            						</div>
            						<div style={secondFont.style}  className={styles.copyRight20231}>Copy Right 2023 - CMax. All Rights Reserved</div>
          					</div>



							  
							

          					<div className={styles.tradeParent}>
							

				

            						<div style={secondFont.style}  className={styles.trade}>Trade</div>
            						<div style={secondFont.style}  className={styles.trade}>Stake</div>
            						<div style={secondFont.style}  className={styles.trade}>About</div>
            						<div style={secondFont.style}  className={styles.trade}>Contact Us</div>
            						<div style={secondFont.style}  className={styles.trade}>Privacy Policy</div>
            						<div style={secondFont.style}   className={styles.trade}>{`Terms & Conditions`}</div>
          					</div>
        				</div>
      			</div>
      			<Image className={styles.homepageTradeSubpageChild1} src={Logo} alt={Logo} />


				  <div className={styles.navbars}>
				<Navbar />
			  </div>



      			<div className={styles.homeParent}>


				
        				<div  style={fourthFont.style}  className={styles.home} ><a href='/'>Home</a></div>
        				<div style={fourthFont.style} className={styles.trade1}><a href='/mint'>Trade</a></div>
        				<div style={fourthFont.style}  className={styles.home} ><a href='/stake'>Stake</a></div>
						<div style={fourthFont.style}  className={styles.home}><a href='/about'>About</a></div>
        				<div style={fourthFont.style}  className={styles.home}><a href='/profile'>Profile</a></div>
      			</div>

				  

      			<div className={styles.mingcutewallet4FillParent}>
					
        				<Image className={styles.mingcutewallet4FillIcon1} alt={Wallet} src={Wallet} />
						
						
        				<ConnectKitButton
						customTheme={{
							"--ck-connectbutton-background": "#fbec50",
							"--ck-connectbutton-color": "#373737",
						  }}
						  
						/>
						
      			</div>
      			
    		</div>
			</div>
			);
};

export default HomepageTradeSubpage;
