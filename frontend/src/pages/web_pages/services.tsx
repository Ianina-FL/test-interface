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
  FeaturesDesigns,
  PricingDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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
      name: 'Lead Tracking',
      description:
        'Efficiently track and manage leads with real-time updates and detailed insights. Enhance your sales strategy with organized lead data.',
      icon: 'mdiAccountMultiple',
    },
    {
      name: 'Automated Workflows',
      description:
        'Automate routine tasks and processes to save time and reduce errors. Focus on what matters most while ${projectName} handles the rest.',
      icon: 'mdiAutorenew',
    },
    {
      name: 'Secure Data Management',
      description:
        'Keep your sensitive information safe with robust security measures. ${projectName} ensures your data is protected at all times.',
      icon: 'mdiLock',
    },
    {
      name: 'Custom Reporting',
      description:
        "Generate custom reports to gain valuable insights into your firm's performance. Make informed decisions with data-driven analytics.",
      icon: 'mdiFileChart',
    },
    {
      name: 'Client Communication',
      description:
        "Enhance client relationships with integrated communication tools. Stay connected and responsive to your clients' needs.",
      icon: 'mdiMessageText',
    },
    {
      name: 'Team Collaboration',
      description:
        'Foster collaboration across departments with shared access to information and resources. ${projectName} brings your team together.',
      icon: 'mdiAccountGroup',
    },
  ];

  const pricing_features = {
    standard: {
      features: [
        'Lead Tracking',
        'Automated Workflows',
        'Secure Data Management',
      ],
      limited_features: ['Basic Reporting', 'Limited Client Communication'],
    },
    premium: {
      features: [
        'Lead Tracking',
        'Automated Workflows',
        'Secure Data Management',
        'Custom Reporting',
      ],
      also_included: ['Enhanced Client Communication', 'Priority Support'],
    },
    business: {
      features: [
        'Lead Tracking',
        'Automated Workflows',
        'Secure Data Management',
        'Custom Reporting',
        'Enhanced Client Communication',
        'Team Collaboration',
        'Dedicated Account Manager',
      ],
    },
  };

  const description = {
    standard:
      'The Standard plan is ideal for individual practitioners or small law firms looking to streamline basic operations with essential CRM features.',
    premium:
      'The Premium plan is perfect for small to medium-sized law firms or agencies seeking advanced features and enhanced client communication tools.',
    business:
      'The Business plan is designed for large enterprises requiring comprehensive CRM solutions, including team collaboration and dedicated support.',
  };

  const testimonials = [
    {
      text: '${projectName} has been a game-changer for our firm. The seamless integration and user-friendly interface have significantly improved our workflow.',
      company: 'Legal Innovators Inc.',
      user_name: 'Alice Thompson, Partner',
    },
    {
      text: "The automated workflows in ${projectName} have saved us countless hours. It's an indispensable tool for any law firm looking to enhance efficiency.",
      company: 'Justice League LLP',
      user_name: 'Robert King, Operations Manager',
    },
    {
      text: "With ${projectName}, our client communication has never been better. The integrated tools keep us connected and responsive to our clients' needs.",
      company: 'Advocate Solutions',
      user_name: 'Emily Carter, Client Relations',
    },
    {
      text: 'The custom reporting feature in ${projectName} provides us with valuable insights. We can now make data-driven decisions with confidence.',
      company: 'Barrister \u0026 Co.',
      user_name: 'Michael Lee, Data Analyst',
    },
    {
      text: "Our team collaboration has improved dramatically since adopting ${projectName}. It's brought our departments together like never before.",
      company: 'Counsel Connect',
      user_name: 'Jessica White, Team Lead',
    },
    {
      text: 'The support team at ${projectName} is exceptional. They are always ready to assist and ensure we get the most out of the platform.',
      company: 'Lexington Legal Group',
      user_name: 'David Brown, IT Specialist',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the comprehensive services offered by ${projectName}, designed to enhance efficiency and collaboration in law firms. Discover our features, pricing, and client testimonials.`}
        />
      </Head>
      <WebSiteHeader projectName={'test-interface'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test-interface'}
          image={['Law firm services overview']}
          mainText={`Transform Your Firm with ${projectName} Services`}
          subTitle={`Discover how ${projectName} can revolutionize your law firm's operations with our tailored CRM services. Enhance efficiency, streamline processes, and boost collaboration across departments.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'test-interface'}
          image={['CRM features showcase']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Features`}
          subTitle={`Unlock the full potential of your law firm with ${projectName}'s innovative features designed to streamline operations and enhance collaboration.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <PricingSection
          projectName={'test-interface'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <TestimonialsSection
          projectName={'test-interface'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied Clients at ${projectName} `}
        />

        <ContactFormSection
          projectName={'test-interface'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact form interface']}
          mainText={`Reach Out to ${projectName} `}
          subTitle={`Have questions or need assistance? Contact us anytime, and our team at ${projectName} will respond promptly to your inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'test-interface'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
