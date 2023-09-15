import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './profile.module.css';
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

const HomepageProfile:NextPage = () => {
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	return (
		<div>

<div className={styles.mobile}>
	  <Aboutmobile />
	</div>

	<div className={styles.ipadprofile}>
	  <IpadProfile />
	</div>

    		<div className={styles.homepageProfile}>
      			<div className={styles.homepageProfileChild} />
      			<Image className={styles.homepageProfileItem} alt="" src={Circles} />
      			<div className={styles.rwfa}>RWFA</div>
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.homepageProfileInner} >
					<Footer />
					</div>

					<div className={styles.navbars}>
				<Navbar />
			  </div>
      		
      			<div className={styles.homeParent}>
        				<div style={{fontFamily:'Inter'}}  className={styles.home} ><a href='/'>Home</a></div>
        				<div style={{fontFamily:'Inter'}}  className={styles.home}><a href='/trade'>Trade</a></div>
        				<div style={{fontFamily:'Inter'}}  className={styles.home} ><a href='/stake'>Stake</a></div>
						<div style={{fontFamily:'Inter'}}  className={styles.home}><a href='/about'>About</a></div>
        				<div style={{fontFamily:'Inter'}}  className={styles.trade1}><a href='/profile'>Profile</a></div>
      			</div>
      			
      			<Image className={styles.homepageProfileChild2} alt="" src={User} />
      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallets} />
        				<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none',color:'black'}}
						/>
      			</div>
      			
      			<Image className={styles.unionIcon3} alt="" src={Star} />
      			<div style={myFont.style}  className={styles.sebastianMathew}>User 1</div>
      			<div style={thirdFont.style}  className={styles.holdings}>Holdings</div>
      			<div style={{fontFamily:'Inter'}}  className={styles.networth}>Networth</div>
      			<div className={styles.div}>$0</div>
      			<div className={styles.rectangleDiv} />
      			<div style={{fontFamily:'Inter'}} className={styles.pl}>{`P&L`}</div>
      			<div className={styles.vectorParent}>
        				<img className={styles.vectorIcon1} alt="" src="Vector.svg" />
        				<div className={styles.trade}>+24%</div>
      			</div>
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
          					<div className={styles.frameChild} />
        				</div>
        				<img className={styles.groupIcon3} alt="" src="Group.svg" />
        				<img className={styles.groupIcon4} alt="" src="Group.svg" />
        				<img className={styles.groupIcon5} alt="" src="Group.svg" />
        				<img className={styles.groupIcon6} alt="" src="Group.svg" />
        				<Chart />
      			</div>
      			<div className={styles.homepageProfileChild3} />
      			<div style={{fontFamily:'Inter'}}  className={styles.unfold11Coin1}>Unfold 11 Coin</div>
      			<div className={styles.polygon31b1e7a0Parent}>
        				<Image className={styles.polygon31b1e7a0Icon} alt="" src={Polygon} />
        				<div className={styles.polygonParent}>
          					<div style={{fontFamily:'Inter'}} className={styles.polygon}>Polygon</div>
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
          					<div style={{fontFamily:'Inter'}}  className={styles.polygon}>Mantie</div>
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
          					<div style={{fontFamily:'Inter'}}  className={styles.polygon}>Ethereum</div>
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
      			<div className={styles.bsc67e32b4cParent}>
        				<Image className={styles.polygon31b1e7a0Icon} alt="" src={Bnb} />
        				<div className={styles.polygonParent}>
          					<div style={{fontFamily:'Inter'}}  className={styles.polygon}>BNB Coin</div>
          					<div className={styles.div2}>
            						<span>
              							<b className={styles.b}>$24</b>
              							<span className={styles.span}>{` `}</span>
            						</span>
            						<span className={styles.span}>
              							<span>37%</span>
            						</span>
          					</div>
        				</div>
      			</div>
      			<div style={myFont.style} className={styles.hi}>HI,</div>
      			<div className={styles.mdilocationParent}>
        				<Image className={styles.mdilocationIcon1} alt="" src={Location} />
        				<div className={styles.nwBobcatLane}>Test</div>
      			</div>
      			<Image className={styles.homepageProfileChild4} alt="" src={Social} />
      			<div className={styles.text10}>{` `}</div>
      			<div className={styles.text11}>{` `}</div>
      			<div className={styles.eth47c40f70Group}>
        				<Image className={styles.polygon31b1e7a0Icon} alt="" src={Wallet} />
        				<div className={styles.polygonParent}>
          					<div className={styles.walletWrapper}>
            						<div style={{fontFamily:'Inter'}}  className={styles.polygon}>Wallet</div>
          					</div>
          					<b className={styles.b4}>$435</b>
        				</div>
      			</div>
      			<div className={styles.eth47c40f70Container}>
        				<Image className={styles.polygon31b1e7a0Icon} alt="" src={Pool} />
        				<div className={styles.polygonParent}>
          					<div className={styles.poolTogetherWrapper}>
            						<div style={{fontFamily:'Inter'}}  className={styles.polygon}>Pool Together</div>
          					</div>
          					<b className={styles.b4}>$0</b>
        				</div>
      			</div>
    		</div>
			</div>
			
			);
};

export default HomepageProfile;
