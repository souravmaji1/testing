import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './ipadprofile.module.css';

import User from '../public/rrr.jpg';
import Location from '../public/mdi_location.svg';
import Headlogo from '../public/logs.png';
import Users from '../public/man.png';
import Eth from '../public/eth.47c40f70.svg';
import Mantle from '../public/mantle.61752091.svg';
import Polygon from '../public/polygon.31b1e7a0.svg';
import Bnb from '../public/bsc.67e32b4c.svg';
import Wallet from '../public/eth.47c40f70 (1).svg';
import Pool from '../public/pool.svg';
import Wallets from '../public/mingcute_wallet-4-fill.svg';
import Circles from '../public/Group 6.png';
import Social from '../public/Group 2.png';
import Star from '../public/Union.png';
import Footer from '../components/aboutfooter';

import { ConnectWallet } from '@thirdweb-dev/react';
import Image from 'next/image';
import { ST } from 'next/dist/shared/lib/utils';
import localFont from 'next/font/local';
import Chart from '../components/profilechart';
import Navbar from '../components/navbar';
import Aboutmobile from '../components/aboutmobile';
import IpadProfile from '../components/ipadprofile';

const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});












const ProfileIPadPro1294:NextPage = () => {
  	
  	const onTradeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onAboutTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.profileIpadPro1294}>
      			<div className={styles.profileIpadPro1294Child} />
      			<Image className={styles.circleBgIcon} alt="" src={Circles} />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.homeParent}>
        				<div style={fourthFont.style}  className={styles.trade} ><a href='/'>Home</a></div>
        				<div style={fourthFont.style}  className={styles.home}><a href='/trade'>Trade</a></div>
        				<div style={fourthFont.style} className={styles.trade} ><a href='/stake'>Stake</a></div>
        				<div style={fourthFont.style}  className={styles.trade} ><a href='/about'>About</a></div>
        				<div style={fourthFont.style}  className={styles.trade} ><a href='/profile'>Profile</a></div>
      			</div>
      		
      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallets} />
						<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none'}}
						/>
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
      			<Image className={styles.profileIpadPro1294Inner} alt="" src={User} />
      			<div style={myFont.style}  className={styles.sebastianMathew}>User 1</div>
      			<div style={thirdFont.style}  className={styles.networth}>Networth</div>
      			<div className={styles.div}>$0</div>
      			<div style={thirdFont.style}  className={styles.hi}>HI,</div>
      			<div className={styles.mdilocationParent}>
        				<Image className={styles.mdilocationIcon1} alt="" src={Location} />
        				<div style={thirdFont.style}  className={styles.nwBobcatLane}>Test</div>
      			</div>
      			<div className={styles.rectangleDiv} />
      			<div className={styles.frameParent}>
        				<div className={styles.gWrapper}>
          					<div className={styles.connectWallet}>1G</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.connectWallet}>1M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.connectWallet}>3M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.connectWallet}>6M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.connectWallet}>1A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.connectWallet}>3A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.connectWallet}>5A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.connectWallet}>YTD</div>
        				</div>
        				<div className={styles.maxWrapper}>
          					<div className={styles.connectWallet}>MAX</div>
        				</div>
      			</div>
      			<div className={styles.frame}>
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
        				</div>
        				<img className={styles.groupIcon3} alt="" src="Group.png" />
        				<img className={styles.groupIcon4} alt="" src="Group.png" />
        				<img className={styles.groupIcon5} alt="" src="Group.png" />
        				<img className={styles.groupIcon6} alt="" src="Group.png" />
        				

        				
      			</div>
      			<div style={thirdFont.style}  className={styles.pl}>{`P&L`}</div>
      			<div className={styles.vectorParent}>
        				<img className={styles.vectorIcon1} alt="" src="Vector.png" />
        				<div className={styles.home}>+24%</div>
      			</div>
      			<div style={thirdFont.style}  className={styles.holdings}>Holdings</div>
      			<div className={styles.profileIpadPro1294Child1} />
      			<div className={styles.unfold11Coin1}>Unfold 11 Coin</div>
      			<div className={styles.polygon31b1e7a0Parent}>
        				<Image className={styles.polygon31b1e7a0Icon} alt="" src={Polygon} />
        				<div className={styles.polygonParent}>
          					<div style={thirdFont.style} className={styles.polygon}>Polygon</div>
          					<div className={styles.div2}>
            						<span>
              							<b className={styles.b}>$05</b>
              							<span className={styles.span}>{` `}</span>
            						</span>
            						<span className={styles.span}>
              							<span>03%</span>
            						</span>
          					</div>
        				</div>
      			</div>
      			<div className={styles.mantle61752091Parent}>
        				<Image className={styles.mantle61752091Icon} alt="" src={Mantle} />
        				<div className={styles.polygonParent}>
          					<div style={thirdFont.style}  className={styles.polygon}>Mantie</div>
          					<div className={styles.div2}>
            						<span>
              							<b className={styles.b}>$75</b>
              							<span className={styles.span}>{` `}</span>
            						</span>
            						<span className={styles.span}>
              							<span>37%</span>
            						</span>
          					</div>
        				</div>
      			</div>
      			<div className={styles.eth47c40f70Parent}>
        				<Image className={styles.polygon31b1e7a0Icon} alt="" src={Eth} />
        				<div className={styles.polygonParent}>
          					<div style={thirdFont.style}  className={styles.polygon}>Ethereum</div>
          					<div className={styles.div2}>
            						<span>
              							<b className={styles.b}>$83</b>
              							<span className={styles.span}>{` `}</span>
            						</span>
            						<span className={styles.span}>
              							<span>43%</span>
            						</span>
          					</div>
        				</div>
      			</div>
      			<div className={styles.text8}>{` `}</div>
      			<div className={styles.eth47c40f70Group}>
        				<Image className={styles.polygon31b1e7a0Icon} alt="" src={Wallet} />
        				<div className={styles.polygonParent}>
          					<div className={styles.walletWrapper}>
            						<div style={thirdFont.style}  className={styles.polygon}>Wallet</div>
          					</div>
          					<b className={styles.b3}>$435</b>
        				</div>
      			</div>
      			<div className={styles.eth47c40f70Container}>
        				<Image className={styles.polygon31b1e7a0Icon} alt="" src={Pool} />
        				<div className={styles.polygonParent}>
          					<div className={styles.poolTogetherWrapper}>
            						<div style={thirdFont.style}  className={styles.polygon}>Pool Together</div>
          					</div>
          					<b className={styles.b3}>$0</b>
        				</div>
      			</div>
    		</div>);
};

export default ProfileIPadPro1294;
