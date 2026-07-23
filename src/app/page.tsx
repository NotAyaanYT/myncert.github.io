import { HeroSection } from '@/components/home/HeroSection';
import { ClassCards } from '@/components/home/ClassCards';
import { StatsCounter } from '@/components/home/StatsCounter';
import { PopularSubjects } from '@/components/home/PopularSubjects';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FAQSection } from '@/components/home/FAQSection';
import { JsonLd, webSiteSchema, organizationSchema } from '@/components/seo/JsonLd';

export default function HomePage() {
  return (
    <>
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={organizationSchema()} />
      <HeroSection />
      <div className="section-divider" />
      <ClassCards />
      <div className="section-divider" />
      <StatsCounter />
      <div className="section-divider" />
      <PopularSubjects />
      <div className="section-divider" />
      <WhyChooseUs />
      <div className="section-divider" />
      <FAQSection />
    </>
  );
}
