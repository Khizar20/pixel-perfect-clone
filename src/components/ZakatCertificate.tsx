import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const ZakatCertificate = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section 
      className="relative px-4 pt-8 pb-16 md:pt-12 md:pb-24 -mt-8 md:-mt-12"
      style={{
        backgroundColor: '#FCFCFC',
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Top text */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xl md:text-2xl lg:text-3xl text-black leading-relaxed">
            Children of Adam is a US-based Tax Exempt 501(c)(3)<br />
            non-profit organization (Federal Tax ID # 45-4397298).
          </p>
        </div>

        {/* Main content: Certificate and CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 md:gap-12 lg:gap-16 relative">
          {/* Left: Certificate preview - clickable */}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <div className="flex-shrink-0 relative w-full lg:w-auto cursor-pointer hover:opacity-90 transition-opacity">
                <div className="rounded-lg p-2 bg-white shadow-lg inline-block">
                  <img
                    src="/Images/Landing Page/certificate.png"
                    alt="Zakat Collection Certificate"
                    className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded"
                  />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-[90vw] max-h-[90vh] p-4 bg-white border-0 overflow-auto">
              <div className="relative flex items-center justify-center">
                <img
                  src="/Images/Landing Page/certificate.png"
                  alt="Zakat Collection Certificate"
                  className="w-full max-w-2xl h-auto rounded-lg object-contain"
                  style={{ maxHeight: '85vh' }}
                />
              </div>
            </DialogContent>
          </Dialog>

          {/* Right: CTA with checkmark and arrow */}
          <div className="flex flex-col items-center lg:items-start relative flex-1 lg:flex-initial">
            {/* Text with checkmark icon */}
            <div className="flex items-center gap-2 mb-8 lg:mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-black">
                View our Zakat Collection Certificate
              </h3>
              {/* Check icon image */}
              <img
                src="/Images/Landing Page/check.png"
                alt="Check icon"
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0"
              />
            </div>

            {/* Arrow image pointing from text to certificate */}
            <div className="hidden lg:block absolute top-24 -left-40 w-48 h-48">
              <img
                src="/Images/Landing Page/down-left.png"
                alt="Arrow pointing to certificate"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZakatCertificate;

