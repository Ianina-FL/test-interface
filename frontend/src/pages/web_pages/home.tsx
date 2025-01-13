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
  FeaturesDesigns,
  AboutUsDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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

  const features_points = [
    {
      name: 'Lead Management',
      description:
        'Track and manage leads effectively with a comprehensive view of their status and history. Enhance your sales pipeline with organized lead data.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Department Integration',
      description:
        'Connect sales, customer service, and marketing departments seamlessly. Improve communication and collaboration across your law firm.',
      icon: 'mdiLink',
    },
    {
      name: 'Analytics and Reporting',
      description:
        'Gain insights with detailed analytics and reporting tools. Monitor performance metrics to make informed decisions and drive growth.',
      icon: 'mdiChartLine',
    },
  ];

  const faqs = [
    {
      question: 'What is ${projectName} and who is it for?',
      answer:
        '${projectName} is a CRM solution designed specifically for law firms to connect departments, streamline operations, and manage leads effectively.',
    },
    {
      question: 'How does ${projectName} help in managing leads?',
      answer:
        '${projectName} provides tools to track lead status, categorize them, and manage contacts, helping sales representatives maintain an organized sales pipeline.',
    },
    {
      question: 'Can ${projectName} integrate with existing systems?',
      answer:
        'Yes, ${projectName} is designed to integrate with various existing systems, ensuring seamless data flow and enhanced collaboration across departments.',
    },
    {
      question: 'Is ${projectName} suitable for small law firms?',
      answer:
        'Absolutely! ${projectName} is scalable and can be tailored to meet the needs of both small and large law firms, providing value at every level.',
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        '${projectName} offers comprehensive support including onboarding, training, and ongoing assistance to ensure your firm gets the most out of the CRM.',
    },
    {
      question: 'Is my data secure with ${projectName}?',
      answer:
        'Yes, data security is a top priority for ${projectName}. We implement robust security measures to protect your sensitive information.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`CRM for Law Industry - Connect and Streamline Your Firm`}</title>
        <meta
          name='description'
          content={`Discover our CRM solution tailored for the law industry, designed to connect departments and streamline operations. Track leads, manage contacts, and enhance collaboration.`}
        />
      </Head>
      <WebSiteHeader projectName={'test-interface'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test-interface'}
          image={['Law firm CRM dashboard']}
          mainText={`Revolutionize Your Law Firm with ${projectName}`}
          subTitle={`Connect departments, streamline operations, and enhance collaboration with ${projectName}, the CRM tailored for the law industry. Manage leads and contacts efficiently.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'test-interface'}
          image={['CRM features overview']}
          withBg={0}
          features={features_points}
          mainText={`Discover Key Features of ${projectName}`}
          subTitle={`Enhance your law firm's efficiency with ${projectName}. Explore features designed to streamline operations and improve collaboration.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'test-interface'}
          image={['Law firm team collaboration']}
          mainText={`Empowering Law Firms with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to transforming the way law firms operate. Our CRM solution is designed to connect departments, streamline processes, and enhance collaboration, ensuring your firm stays ahead in a competitive industry.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <FaqSection
          projectName={'test-interface'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions about ${projectName} `}
        />

        <ContactFormSection
          projectName={'test-interface'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact form communication']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime for inquiries or support. Our team at ${projectName} is here to assist you and will respond promptly to your messages.`}
        />
      </main>
      <WebSiteFooter projectName={'test-interface'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
