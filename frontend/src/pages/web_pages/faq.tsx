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
      question: 'What features does ${projectName} offer?',
      answer:
        "${projectName} offers a range of features including lead tracking, automated workflows, secure data management, and custom reporting to enhance your law firm's operations.",
    },
    {
      question: 'How does ${projectName} ensure data security?',
      answer:
        'We prioritize data security with robust measures such as encryption and regular security audits to protect your sensitive information at all times.',
    },
    {
      question: "Can I customize ${projectName} to fit my firm's needs?",
      answer:
        'Yes, ${projectName} is highly customizable, allowing you to tailor dashboards and reports to meet the specific needs of your law firm.',
    },
    {
      question: 'Is there a trial period available for ${projectName}?',
      answer:
        "Yes, we offer a trial period for you to explore ${projectName}'s features and see how it can benefit your firm before committing to a plan.",
    },
    {
      question: 'What kind of support can I expect from ${projectName}?',
      answer:
        'Our support team is available to assist you with onboarding, training, and any ongoing questions or issues you may encounter while using ${projectName}.',
    },
    {
      question: 'How does ${projectName} integrate with existing systems?',
      answer:
        '${projectName} is designed to integrate seamlessly with your existing systems, ensuring a smooth transition and uninterrupted workflow for your firm.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, security, integration, and support options.`}
        />
      </Head>
      <WebSiteHeader projectName={'test-interface'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test-interface'}
          image={['FAQ section illustration']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Learn more about our features, integration, and support.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'test-interface'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'test-interface'}
          design={ContactFormDesigns.HIGHLIGHTED_DIVERSITY || ''}
          image={['Customer support assistance']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`Have more questions? Contact us anytime, and our team at ${projectName} will respond promptly to assist you with your inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'test-interface'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
