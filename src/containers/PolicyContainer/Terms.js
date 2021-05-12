import React, { PureComponent } from 'react';
import Navbar from '../../components/Header/Navbar';

import { PrivacyWrapper, Masthead } from "./privacy.styles.js";
import Footer from '../../components/Footer/generalfooter';

class Terms extends PureComponent {
  render() {
    return (
      <PrivacyWrapper>
        <Navbar showCart={() => this.setState({ isCartVisible: true })} white />

        <Masthead>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 top-margin text-center">
                <h1>Terms & Conditions</h1>
                <p>Learn about the terms and conditions of vardenfoods.com</p>
              </div>
            </div>
          </div>
        </Masthead>

        <div className="container">
          <main className="content">
            <div className="row justify-content-center">
              <div className="col-sm-8 mt-4 mb-4">
                <h2 className="mt-4">Content</h2>
                <p>There are certain things in the Spirit we cannot access until we have a certain level of hunger. It does not matter how desperate we cry for it, God would not answer our prayer beyond the capacity of our hunger. Lest we begin to think that God loves some people more than some, it is their hunger.

We must learn how to use our words the way a carpenter uses his screwdriver. Our tongues have been prepared as the pen of a ready writer, with it we can write, erase and rewrite situations.

We are not supposed to negotiate with the Devil. We can appeal to God for mercy, but when we are facing the devil, we are to be bold. We should realize that diseases like cancer have capacity to hear and we can speak to it.

In the day of battle, we are supposed to have been prepared.
</p>
<p>
MINISTER: Pastor Gbenga Shafe 
God is not just interested in our spiritual lives; He is also interested in sorting us out materially. He wants to help us, help our families and even help with academics but what makes tremendous power available is the effectual fervent prayer of the righteous man. The righteous man is the man that takes a position where God is standing. There is a righteousness that comes by faith, and there’s another that comes by standing where God is standing. So, the first thing to do is to find out where God is standing concerning a matter. Once you can determine where God is standing, you can begin to legislate, insisting based on what you know to be the will of God. The first prayer is not about the problem; the first prayer is to know what God is saying. That is why often times we pray and we don’t seem to get results.  
Daniel 10 : 10 – 21
There are certain things the LordPrayer brings joy. This is the joy that comes from been confident that when we start praying, we will receive answers. We are to pray that our joy may be full but we must have the tenacity to tarry.
</p>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </PrivacyWrapper>
    )
  }
}

export default Terms;