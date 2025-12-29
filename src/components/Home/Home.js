import { useEffect } from 'react';
import IntroHome from './IntroHome';
import QuoteHome from './QuoteHome';
import ApproachHome from "./ApproachHome";
import ContactHome from './ContactHome';
import NewsHome from './NewsHome';
import RightsHome from './RightsHome';
import PhoneHome from './PhoneHome';

export default function Home() {

  useEffect(() => {
    if (document.getElementById('mcjs')) return;

    const script = document.createElement('script');
    script.id = 'mcjs';
    script.async = true;
    script.src =
      'https://chimpstatic.com/mcjs-connected/js/users/7eebd2a3d3d769aad41558f83/c4a0cdb4ce2f47c60723d55e9.js';

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <IntroHome />
      <PhoneHome />
      <QuoteHome />
      <ApproachHome />
      <RightsHome />
      <NewsHome />
      <ContactHome />
    </>
  );
}
