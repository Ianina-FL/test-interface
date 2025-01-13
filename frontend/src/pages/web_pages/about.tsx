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
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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
      name: 'Seamless Integration',
      description:
        'Easily integrate ${projectName} with your existing systems to ensure a smooth transition and uninterrupted workflow. Enhance connectivity across all departments.',
      icon: 'mdiLinkVariant',
    },
    {
      name: 'Advanced Analytics',
      description:
        "Leverage powerful analytics tools to gain insights into your firm's performance. Make data-driven decisions to optimize operations and drive growth.",
      icon: 'mdiChartBar',
    },
    {
      name: 'Customizable Dashboards',
      description:
        "Tailor your dashboard to fit your firm's unique needs. Access the information that matters most to you, all in one place, with ${projectName}.",
      icon: 'mdiViewDashboard',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has transformed the way our firm operates. The seamless integration and user-friendly interface have made our processes more efficient than ever.',
      company: 'Lexington Legal Group',
      user_name: 'John Doe, Managing Partner',
    },
    {
      text: 'Thanks to ${projectName}, our team collaboration has improved significantly. The customizable dashboards provide us with the insights we need to make informed decisions.',
      company: 'Barrister \u0026 Co.',
      user_name: 'Jane Smith, Senior Associate',
    },
    {
      text: 'The advanced analytics feature of ${projectName} is a game-changer. We can now track our performance metrics with ease and accuracy.',
      company: 'Justice Partners',
      user_name: 'Emily Johnson, Operations Manager',
    },
    {
      text: 'Our sales pipeline has never been more organized. ${projectName} has helped us manage leads effectively, resulting in increased conversions.',
      company: 'Legal Eagles',
      user_name: 'Michael Brown, Sales Director',
    },
    {
      text: 'The support team at ${projectName} is exceptional. They guided us through the setup process and continue to provide excellent assistance whenever needed.',
      company: 'Advocate Alliance',
      user_name: 'Sarah Davis, IT Specialist',
    },
    {
      text: "With ${projectName}, we have streamlined our operations and improved communication across departments. It's an invaluable tool for any law firm.",
      company: 'Counsel Connect',
      user_name: 'David Wilson, CEO',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About ${projectName} - Transforming Law Firms`}</title>
        <meta
          name='description'
          content={`Learn more about ${projectName}, our mission, values, and how we empower law firms with innovative CRM solutions tailored to enhance collaboration and efficiency.`}
        />
      </Head>
      <WebSiteHeader projectName={'test-interface'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test-interface'}
          image={['Team collaborating on CRM']}
          mainText={`Discover the Vision Behind ${projectName}`}
          subTitle={`Explore how ${projectName} is revolutionizing the legal industry with innovative CRM solutions. Learn about our mission, values, and commitment to empowering law firms.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Story`}
        />

        <AboutUsSection
          projectName={'test-interface'}
          image={['Innovative CRM development team']}
          mainText={`Our Journey with ${projectName}`}
          subTitle={`At ${projectName}, we are driven by a passion to innovate and transform the legal industry. Our team is dedicated to providing cutting-edge CRM solutions that enhance efficiency and collaboration for law firms.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Meet Our Team`}
        />

        <FeaturesSection
          projectName={'test-interface'}
          image={['CRM features in action']}
          withBg={1}
          features={features_points}
          mainText={`Innovative Features of ${projectName}`}
          subTitle={`Discover how ${projectName} empowers law firms with advanced features designed to streamline operations and enhance collaboration.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'test-interface'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'test-interface'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact form communication']}
          mainText={`Connect with ${projectName} Today `}
          subTitle={`We're here to help! Reach out to us anytime for inquiries or support. Our team at ${projectName} is committed to responding promptly to your messages.`}
        />
      </main>
      <WebSiteFooter projectName={'test-interface'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
