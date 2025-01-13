import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'test-interface';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const faqs = [
    {
      question: 'What is ${projectName} and how does it benefit my law firm?',
      answer:
        '${projectName} is a CRM solution designed specifically for law firms to streamline operations, enhance collaboration, and manage leads effectively. It connects various departments, making your firm more efficient.',
    },
    {
      question: 'How secure is my data with ${projectName}?',
      answer:
        'Data security is a top priority for ${projectName}. We implement robust security measures to ensure your sensitive information is protected at all times.',
    },
    {
      question: 'Can ${projectName} integrate with our existing systems?',
      answer:
        'Yes, ${projectName} is designed to integrate seamlessly with your existing systems, ensuring a smooth transition and uninterrupted workflow.',
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        '${projectName} offers comprehensive support including onboarding, training, and ongoing assistance to ensure your firm gets the most out of the CRM.',
    },
    {
      question: 'Is ${projectName} suitable for small law firms?',
      answer:
        'Absolutely! ${projectName} is scalable and can be tailored to meet the needs of both small and large law firms, providing value at every level.',
    },
    {
      question: 'How can I get started with ${projectName}?',
      answer:
        "Getting started with ${projectName} is easy. Contact our team for a demo or to discuss your specific needs, and we'll guide you through the setup process.",
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - ${projectName}`}</title>
        <meta
          name='description'
          content={`Get in touch with ${projectName} for inquiries, support, or more information. Our team is here to assist you with any questions you may have.`}
        />
      </Head>
      <WebSiteHeader projectName={'test-interface'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test-interface'}
          image={['Customer support team']}
          mainText={`Connect with ${projectName} Today`}
          subTitle={`We're here to help! Reach out to ${projectName} for any inquiries or support. Our dedicated team is ready to assist you with all your needs.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Contact Us Now`}
        />

        <FaqSection
          projectName={'test-interface'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions about ${projectName} `}
        />

        <ContactFormSection
          projectName={'test-interface'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Email communication form']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Have questions or need support? Contact us anytime, and our team at ${projectName} will respond promptly to assist you.`}
        />
      </main>
      <WebSiteFooter projectName={'test-interface'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
