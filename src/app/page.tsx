import { HeroSection } from '@/components/home/HeroSection';
import { ClassCards } from '@/components/home/ClassCards';
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
      <ClassCards />
      <PopularSubjects />
      <WhyChooseUs />
      <FAQSection />
    </>
  );
}
