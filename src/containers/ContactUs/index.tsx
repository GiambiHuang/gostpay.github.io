import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';

import { cardContainerVariants, cardVariants, titleVariants } from '../../config/variants';
import MailButtonSVG from '../../images/mail-button.svg';
import TwitterButtonSVG from '../../images/twitter-button.svg';
import MailBgSVG from '../../images/mail-bg.svg';
import TwitterBgSVG from '../../images/twitter-bg.svg';
import ArrowRightSVG from '../../images/chevron-right.svg';

import * as modules from './index.module.scss';

const ContactUs: React.FC = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="app-content-wrap flex flex-col gap-[96px] text-center pt-10 pb-32"
    >
      <motion.div
        className="text-[40px] leading-[1.3] font-semibold"
        variants={titleVariants}
      >
        Contact Us
      </motion.div>
      <motion.div
        className="grid grid-cols-2 gap-6 text-white"
        variants={cardContainerVariants}
      >
        <motion.div variants={cardVariants}>
          <a href="mailto:info@gostpay.net" className={cx('bg-primary min-h-[240px]', modules.contactButton)}>
            <div className="flex-1 text-left z-20">
              <div className="text-[32px] leading-[1.3] font-semibold mb-4">
                Send Email To Us
              </div>
              <div className="text-lg leading-[1.3] opacity-60 flex items-center">
                <span>Contact Now</span>
                <ArrowRightSVG className="ml-1" />
              </div>
            </div>
            <MailButtonSVG className="z-20" />
            <MailBgSVG className="absolute bottom-0 right-0  z-10" />
          </a>
        </motion.div>
        <motion.div variants={cardVariants}>
          <a href="//twitter.com/gostpay" target="_blank" className={cx('bg-[#1D9BF0] min-h-[240px]', modules.contactButton)}>
            <div className="flex-1 text-left z-20">
              <div className="text-[32px] leading-[1.3] font-semibold mb-4">
                Send Us a DM
              </div>
              <div className="text-lg leading-[1.3] opacity-60 flex items-center">
                <span>Contact Now</span>
                <ArrowRightSVG className="ml-1" />
              </div>
            </div>
            <TwitterButtonSVG className="z-20" />
            <TwitterBgSVG className="absolute bottom-0 right-0 z-10" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContactUs;
