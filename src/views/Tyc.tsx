import FooterCompany from '../components/FooterCompany'
import { useEffect, useRef } from 'react';
import HeaderKx from '../components/HeaderKx'
import Tyccontent from '../components/Tyccontent'
const tyc = () => {
  const myComponentRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if(myComponentRef.current !== null) {
      myComponentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
    return (
      <>
      <div ref={myComponentRef}>

      </div>
      <HeaderKx />
      
      <Tyccontent />  
      <FooterCompany />
      </>
    )
  }

export default tyc;